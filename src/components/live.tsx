import React from "react";
import HeartImg from "../assets/picture/heart-solid.svg";

interface Class {
    ClassName : string;
}

const Heart:  React.FC<Class> = ( {ClassName}) => {
    return (
        <img src={HeartImg} className={ClassName}></img>
    )
}

export default Heart;