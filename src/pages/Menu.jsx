import React from 'react';

const products = [
  { 
    id: 1, 
    name: 'Hamburguesa Clásica', 
    desc: 'Carne 100% de res, queso, lechuga y tomate', 
    price: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 2, 
    name: 'Perro Caliente Especial', 
    desc: 'Salchicha suiza, ripio de papa y queso fundido', 
    price: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 3, 
    name: 'Papas Francesas', 
    desc: 'Porción grande crujiente con sal de la casa', 
    price: 7000,
    imageUrl: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 4, 
    name: 'Gaseosa 500ml', 
    desc: 'Sabor a elección bien fría', 
    price: 4000,
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
  },
];

export default function Menu({ addToCart }) {
  return (
    <div className="container">
      <h2>NUESTRO MENÚ</h2>
      <div className="menu-grid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={item.name} className="card-img" />
            <div className="card-content">
              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="card-footer">
                <span className="price">${item.price.toLocaleString()}</span>
                <button className="btn-add" onClick={() => addToCart(item)}>
                  AGREGAR
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}