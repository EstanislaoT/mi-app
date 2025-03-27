import React, { useState } from 'react';
import { FaHome, FaUser, FaWallet, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <FaHome />, text: 'Inicio' },
    { icon: <FaUser />, text: 'Perfil' },
    { icon: <FaWallet />, text: 'Gastos' },
    { icon: <FaCog />, text: 'Cuenta' },
    { icon: <FaSignOutAlt />, text: 'Salir' }
  ];

  return (
    <div className="hamburger-menu">
      <button className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>
      <nav className={`menu-items ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <a key={index} href="#" className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-text">{item.text}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default HamburgerMenu;
