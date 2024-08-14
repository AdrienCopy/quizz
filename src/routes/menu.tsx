import React, { useState, useEffect } from "react";

const Menu:  React.FC = () => {
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {

        const savedName = localStorage.getItem('name');
        if (savedName) {
        setName(savedName);
        }
    }, []);

    return (
        <section>
        <h2>Hello, {name} !</h2>
        <a href="question">QCM Avec score</a>
        <a href="serie">Serie 2000</a>
        <a href="serie90">Serie 90</a>
        <a href="serie80">Serie 80</a>
        </section>
    );
};

export default Menu;