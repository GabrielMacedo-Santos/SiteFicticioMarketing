import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Logo-aleatoria.png";

function Header({ openSidePanel }) {
  const handleContactClick = (e) => {
    e.preventDefault(); 
    openSidePanel(); 
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo Empresa Fictícia de Marketing" />
          <span>Empresa Fictícia de Marketing</span>
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/about">Sobre</Link>
        <Link to="/services">Serviços</Link>
        <button 
          className="contact-button" 
          onClick={handleContactClick}
          aria-label="Abrir formulário de contato"
        >
          Contato
        </button>
      </nav>
    </header>
  );
}

export default Header;