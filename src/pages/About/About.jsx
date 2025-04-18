import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Garante que a animação de entrada seja ativada quando o componente for carregado
  }, []);

  return (
    <div className={`about-container ${loaded ? 'show' : ''}`}>
      <h1 className="about-title">Sobre a Empresa Fictícia</h1>
      <p className="about-description">
        Somos uma empresa dedicada a oferecer soluções inovadoras no mundo digital. Nossa missão é criar experiências únicas para nossos clientes, oferecendo serviços personalizados que atendem às suas necessidades específicas.
      </p>
      <p className="about-description">
        Com um time de especialistas altamente qualificados, estamos comprometidos em ajudar empresas a alcançar seus objetivos através de estratégias de marketing eficazes e tecnologias de ponta. Nosso foco é entregar resultados mensuráveis e impactantes.
      </p>
      <p className="about-description">
        Acreditamos em um atendimento personalizado e no fortalecimento de uma relação duradoura com nossos clientes. Estamos sempre em busca das melhores práticas e inovações para garantir que você esteja sempre à frente no mercado.
      </p>
    </div>
  );
}

export default About;
