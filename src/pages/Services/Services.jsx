import React, { useEffect, useState } from 'react';
import './Services.css';

function Services() {
  const [show, setShow] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setShow(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`services-container ${show ? 'show' : ''}`}>
      <h1 className="services-title">Nossos Serviços</h1>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">📈</div>
          <h3>Consultoria em Marketing Digital</h3>
          <p>Estratégias personalizadas para promover o seu negócio online.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>Gestão de Mídias Sociais</h3>
          <p>Aumente seu engajamento e alcance com gerenciamento especializado.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Desenvolvimento Web e Mobile</h3>
          <p>Sites e apps que ajudam o seu negócio a crescer no mundo digital.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🔍</div>
          <h3>SEO e Otimização para Buscas</h3>
          <p>Melhore seu ranqueamento e visibilidade nos motores de busca.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">💸</div>
          <h3>Gestão de Anúncios Online</h3>
          <p>Campanhas pagas para gerar tráfego qualificado e conversões.</p>
        </div>
        {/* Novo card de Marketing Digital */}
        <div className="service-card">
          <div className="service-icon">📊</div>
          <h3>Estratégias de Marketing Digital</h3>
          <p>Desenvolvemos campanhas de marketing digital para atrair mais clientes.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
