import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h2>BURGERS. <br /> DONE RIGHT.</h2> {/* Título de la referencia */}
        <p>El sabor real de una buena hamburguesa.</p>
        <Link to="/menu" className="btn-primary">ORDENA AQUÍ</Link>
      </div>
    </div>
  );
}