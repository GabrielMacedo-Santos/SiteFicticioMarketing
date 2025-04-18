import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Empresa Aleatória de Marketing</h3>
          <p>Transformando ideias em resultados reais.</p>
          <p>
            <strong>Endereço:</strong> Rua da Criatividade, 123 – Bairro Imaginário, Cidade Fictícia, BR
          </p>
          <p>
            <strong>Telefone:</strong> (99) 9999-9999
          </p>
          <p>
            <strong>Email:</strong> contato@empresaaleatoria.com
          </p>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Empresa Aleatória de Marketing. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
