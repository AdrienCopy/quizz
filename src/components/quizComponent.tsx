import React, { useState, useEffect } from 'react';

interface Question {
  question: string;
  choices: string[];
  correctAnswer: string;
}

interface jsonComponent {
  jsonUrl: string;
}

const QuizComponent: React.FC<jsonComponent> = ({ jsonUrl }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        const savedName = localStorage.getItem('name');
        if (savedName) {
        setName(savedName);
        }
    }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(jsonUrl);
      const data = await response.json();
      setQuestions(data.questions);
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelection = (choice: string) => {
    setSelectedAnswer(choice);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h2>Quiz Complété</h2>
        <p className='p'>{name}, ton est Score :&nbsp; {score}/{questions.length}&nbsp; !</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <br />
      <div>
        <h2>{currentQuestion.question}</h2>
        <ul>
          {currentQuestion.choices.map((choice, index) => (
            <li key={index}>
              <button onClick={() => handleAnswerSelection(choice)} disabled={selectedAnswer !== null}>
                {choice}
              </button>
            </li>
          ))}
        </ul>
        {selectedAnswer && (
          <button onClick={handleNextQuestion} className='buttonNext'>Question suivante</button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
