import React from "react";
import QuestionQuizz from "../components/quesiton";

const Serie: React.FC = () => {

    return (
        <section>
        <QuestionQuizz jsonUrl="src/assets/json/serieData.json" year={2000} />
        </section>
    );
};

export default Serie;