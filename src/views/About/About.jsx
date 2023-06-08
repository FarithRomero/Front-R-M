import React from "react";
import style from "./About.module.css"
import aboutImage from "../../assets/aboutImage.jpg"

export default function About(){
    return(
            <div>          
                <h1 className={style.name}>Farith Romero Cano</h1>
                <h2 className={style.subtitle}>Full Stack Developer</h2>
                <h3 className={style.description}>Farith es un desarrollador Full Stack, estudiante de Henry Bootcamp, con conocimiento y manejo de lenguajes de programción como JavaScript, HTML, CSS, BrightScript, XML y librerías como SceneGraph, React... </h3>
                <img className={style.imagen} src={aboutImage} alt='No se puede cargar imagen'/>
            </div>
    );
};