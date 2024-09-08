import React from "react";
import QuizComponent from "../components/quizComponent";

const Question: React.FC = () => {

    return (
        <section>
        <QuizComponent jsonUrl="assets/json/quizData.json"/>
        </section>
    );
};

export default Question;