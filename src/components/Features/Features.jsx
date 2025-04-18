import { useEffect } from 'react';
import './Features.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Features() {
 
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="features">
      <h3>O que oferecemos</h3>
      <div className="feature-list">
        <div className="feature-item" data-aos="fade-up">
          <h4>Design Moderno</h4>
          <p>
            Criamos interfaces visualmente impactantes que atraem e retêm a atenção.
          </p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="20">
          <h4>SEO Otimizado</h4>
          <p>
            Alcance mais pessoas com estratégias eficazes de otimização para mecanismos de busca.
          </p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="40">
          <h4>Resultados Mensuráveis</h4>
          <p>
            Relatórios claros e acompanhamento de métricas para medir o crescimento.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
