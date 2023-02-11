import { useSelector } from "react-redux";
import "../styles/AbautMe.css";
import React from "react";

const AbautMe = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section id="AbautMe" className={`${active === "AbautMe" && "active"}`}>
      <h3 className="caption">Sobre mi</h3>
      <p className="paragraph">
        Hola, soy desarrollador Full Stack, amante de los
        videojuegos. Siempre dispuesto a aprender
        nuevas tecnologías. Soy una persona autodidacta, proactiva, eficaz, que
        ama la tecnología. Actualmente, dedico mi tiempo a estudiar y
        desarrollar aplicaciones web. Me encantan los desafíos y si hay algo que no se, lo anoto para averiguarlo.
      </p>
      <div className="myInfoCard">
        <div>
          <span>Edad</span>
          <p className="myInfoCardText">27</p>
        </div>
        <div>
          <span>País</span>
          <p className="myInfoCardText">Argentina</p>
        </div>
        <div>
          <span>De pequeño jugaba con</span>
          <p className="myInfoCardText">Rastrillos</p>
        </div>
        <div>
          <span>Me gustaría</span>
          <p className="myInfoCardText">Conocer el Mundo</p>
        </div>
      </div>
    </section>
  );
};

export default AbautMe;
