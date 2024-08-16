import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/serie">Serie 2000</Link>
        <Link to="/serie90">Serie 90</Link>
        <Link to="/serie80">Serie 80</Link> 
        <Link to="/question">QCM Avec score</Link>       
        </section>
    );
};

export default Menu;