import React from "react";
import FormName from "../components/formName";

const Index: React.FC = () => {
    return (
        <section>
        <h2>Commence à jouer !</h2>
        <FormName />
        <p className="p">
        Ce site a été réalisé dans le cadre de la formation BeCode en 2024.<br /> Il a été développé en utilisant les technologies telles que React, Vite et TypeScript. 
        </p>
        </section>
    );
};

export default Index;