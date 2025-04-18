// src/components/ExpandableSection/ExpandableSection.jsx
import { useState } from 'react';
import './ExpandableSection.css';

function ExpandableSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`expandable-section ${isOpen ? 'open' : ''}`}>
      <button className="expandable-button" onClick={toggleSection}>
        {title}
      </button>
      <div className="expandable-content">
        {isOpen && <p>{children}</p>}
      </div>
    </div>
  );
}

export default ExpandableSection;
