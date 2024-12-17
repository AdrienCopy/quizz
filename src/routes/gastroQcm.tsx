import React from "react";
import QuizComponent from "../components/quizComponent";

const GastroQcm: React.FC = () => {

    return (
        <section>
        <QuizComponent jsonUrl="assets/json/gastroData.json"/>
        </section>
    );
};

export default GastroQcm;