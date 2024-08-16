import React from "react";
import QuestionQuizz from "../components/quesiton";

const Serie80: React.FC = () => {

    return (
        <section>
        <QuestionQuizz jsonUrl="assets/json/serie80Data.json" year={80} />
        </section>
    );
};

export default Serie80;