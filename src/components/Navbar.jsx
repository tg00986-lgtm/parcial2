import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>[cite: HOME BURGERS]</h1> {/* El nombre de la referencia */}
      <ul className="nav-links">
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/menu">MENÚ</Link></li>
        <li><Link to="/pedidos">PEDIDOS ({cartCount})</Link></li>
      </ul>
    </nav>
  );
}