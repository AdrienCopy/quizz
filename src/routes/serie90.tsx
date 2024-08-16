import React from "react";
import QuestionQuizz from "../components/quesiton";

const Serie90: React.FC = () => {

    return (
        <section>
        <QuestionQuizz jsonUrl="/assets/json/serie90Data.json" year={90} />
        </section>
    );
};

export default Serie90;