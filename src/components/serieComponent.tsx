import React, { useState, useEffect} from "react";

interface Question {
    question: string;
    answer: string;
}

const SerieComponent: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [showSkipButton, setShowSkipButton] = useState<boolean>(false);
    const [incorrectAttempts, setIncorrectAttempts] = useState<number>(0);
    const [live, setLive] = useState<number>(5);
    
    useEffect(() => {
        const fetchQuestions = async () => {
          const response = await fetch('src/assets/json/serieData.json');
          const data = await response.json();
          setQuestions(data.questions);
        };
        fetchQuestions();
    }, []);

    const currentQuestion = questions[currentQuestionIndex];
    console.log(isAnswerCorrect);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const handleNextQuestion = () => {
        const isCorrect = userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase();
        console.log("Answer Correct:", isCorrect);
        if (!isCorrect) {
            setLive(live - 1);
            setIncorrectAttempts(incorrectAttempts + 1);
            setIsAnswerCorrect(false);

            if (incorrectAttempts + 1 >= 2) {
                setShowSkipButton(true); // Affichez le bouton après deux erreurs
            }
        } else {
            setIsAnswerCorrect(true);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer('');
            setShowSkipButton(false); // Cachez le bouton pour la prochaine question
            setIncorrectAttempts(0); // Réinitialisez les tentatives incorrectes
        }
    };

    const handleSkipQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer('');
        setShowSkipButton(false); // Cachez le bouton après avoir passé la question
        setIncorrectAttempts(0); // Réinitialisez les tentatives incorrectes
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
        </div>
    }
    
    return (
        <div>
        <h2>Serie dans les années 2000</h2>
        <h2>{currentQuestion.question}</h2>
        <input type="text" value={userAnswer} onChange={handleInputChange}/>
        <button onClick={handleNextQuestion} className='buttonNext'>Valider ma réponse</button>
        {showSkipButton && (
                <button onClick={handleSkipQuestion} className='buttonSkip'>Passer la question</button>
            )}
        <p>Live = {live}</p>
        </div>
    )
}

export default SerieComponent;


