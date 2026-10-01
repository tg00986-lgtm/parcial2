import React from 'react';

export default function Orders({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleConfirm = () => {
    if (cart.length === 0) return;
    alert('¡Pedido confirmado con éxito! Tu comida está en preparación.');
    clearCart();
  };

  return (
    <div className="container">
      <h2>RESUMEN DE TU PEDIDO</h2>
      <div className="order-summary">
        {cart.length === 0 ? (
          <p>Aún no has seleccionado productos del menú.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="order-item">
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  <small style={{ color: '#d63031', fontWeight: 600 }}>
                    ${item.price.toLocaleString()}
                  </small>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  style={{ 
                    background: 'transparent', 
                    color: '#d63031', 
                    border: 'none', 
                    textDecoration: 'underline', 
                    fontSize: '0.8rem', 
                    cursor: 'pointer' 
                  }}
                >
                  QUITAR
                </button>
              </div>
            ))}

            <div className="total-section">
              <span>Total a pagar:</span>
              <span>${total.toLocaleString()}</span>
            </div>

            <button className="btn-primary" style={{ width: '100%', marginTop: '2rem' }} onClick={handleConfirm}>
              CONFIRMAR PEDIDO
            </button>
          </>
        )}
      </div>
    </div>
  );
}