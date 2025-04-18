import './Hero.css';
import marketingImage from '../../assets/ImagemHero.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text" data-aos="fade-right">
          <h2>Transformando ideias em resultados</h2>
          <p>Conectamos criatividade, estratégia e tecnologia para impulsionar sua presença digital.</p>
          <button className="cta-button">Solicitar Orçamento</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
