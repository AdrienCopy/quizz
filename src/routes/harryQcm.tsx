import React from "react";
import QuizComponent from "../components/quizComponent";

const HarryQcm: React.FC = () => {

    return (
        <section>
        <QuizComponent jsonUrl="assets/json/quizHarryData.json"/>
        </section>
    );
};

export default HarryQcm;