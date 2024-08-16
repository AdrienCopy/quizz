import React, { useState, useEffect} from "react";
import Heart from "./live";

interface Question {
    question: string;
    answer: string;
}

interface jsonComponent {
    jsonUrl: string;
    year: number;
}


const QuestionQuizz: React.FC<jsonComponent> = ({ jsonUrl, year }) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [showSkipButton, setShowSkipButton] = useState<boolean>(false);
    const [incorrectAttempts, setIncorrectAttempts] = useState<number>(0);
    const [live, setLive] = useState<number>(5);
    
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(jsonUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setQuestions(data.questions);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchQuestions();
    }, [jsonUrl]);

    const currentQuestion = questions[currentQuestionIndex];

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const handleNextQuestion = () => {
        const isCorrect = userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase();
        //console.log("Answer Correct:", isCorrect);
        if (!isCorrect) {
            setLive(live - 1);
            setIncorrectAttempts(incorrectAttempts + 1);
            setIsAnswerCorrect(false);

            if (incorrectAttempts + 1 >= 2) {
                setShowSkipButton(true); // Affichez le bouton après deux erreurs
            }
        } else {
            setIsAnswerCorrect(true);
            console.log(isAnswerCorrect);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer('');
            setShowSkipButton(false);
            setIncorrectAttempts(0);
        }
    };

    const handleSkipQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer('');
        setShowSkipButton(false);
        setIncorrectAttempts(0);
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }
    
    if (currentQuestionIndex >= questions.length) {
        return (
            <div>
                <h2>Quiz Complété</h2>
            </div>
            );
    }
      
    if (live === 0) {
        return <div>
            <h2>Oh non !</h2>
            <a href="menu">Retour</a>
        </div>
    }

    let css = "";
    if (live > 3) {
        css = "green";
    } else if (live === 3) {
        css = "orange";
    } else if (live < 3) {
        css = "red";
    }

    
    return (
        <>
        <h2>Serie dans les années {year}</h2>
        <h2>{currentQuestion.question}</h2>
        <input type="text" value={userAnswer} className='inputResponse' onChange={handleInputChange}/>
        <button onClick={handleNextQuestion} className='buttonNext'>Valider ma réponse</button>
        {showSkipButton && (
                <button onClick={handleSkipQuestion} className='buttonNext'>Passer la question</button>
            )}
        <h2 className="live"><Heart ClassName={css} />  {live}</h2>
        </>
    )
}

export default QuestionQuizz;


