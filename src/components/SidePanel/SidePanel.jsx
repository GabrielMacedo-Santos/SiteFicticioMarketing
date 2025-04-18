import React, { useState, useEffect } from "react";
import "./SidePanel.css";

function SidePanel({ isOpen, closeSidePanel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submissions, setSubmissions] = useState([]);


  useEffect(() => {
    const savedData = localStorage.getItem('Contatos');
    if (savedData) {
      setSubmissions(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSubmission = {
      ...formData,
      date: new Date().toISOString()
    };

    const updatedSubmissions = [...submissions, newSubmission];
    setSubmissions(updatedSubmissions);
    localStorage.setItem('Contatos', JSON.stringify(updatedSubmissions));

    setFormData({
      name: "",
      email: "",
      message: ""
    });

    alert("Mensagem enviada com sucesso!");
  };

  
  const handleClearSubmissions = () => {
    const confirmClear = window.confirm("Tem certeza que deseja apagar todas as mensagens salvas?");
    if (confirmClear) {
      localStorage.removeItem("Contatos"); 
      setSubmissions([]); 
      alert("Mensagens apagadas com sucesso!");
    }
  };

  // Função para exportar os dados para um arquivo JSON
  const handleExportJson = () => {
    const data = new Blob([JSON.stringify(submissions, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = "contatos.json"; 
    link.click();
    URL.revokeObjectURL(url); 
  };

  return (
    <div 
      className={`side-panel ${isOpen ? "open" : ""}`}
      aria-hidden={!isOpen}
      aria-modal="true"
    >
      <div className="panel-header">
        <h2 id="side-panel-title">Entre em Contato Conosco</h2>
        <button 
          onClick={closeSidePanel}
          aria-label="Fechar painel lateral"
        >
          &times;
        </button>
      </div>
      <div className="panel-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Seu nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Seu e-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Sua mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            Enviar Mensagem
          </button>
        </form>

        {/* Botão de limpar as mensagens salvas */}
        {/*}
        <button 
          onClick={handleClearSubmissions} 
          className="clear-button"
        >
          Apagar Todas as Mensagens
        </button>
        */}
        {/* Botão de exportação para arquivo JSON */}
        <button 
          onClick={handleExportJson}
          className="export-button"
        >
          Exportar para JSON
        </button>
      </div>
    </div>
  );
}

export default SidePanel;
