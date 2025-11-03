import React from "react";
import './Producto.css';

function Producto({ nombre, precio }) {
  return (
    <div className="producto-container">
      <span>{nombre}</span>
      <span>${precio.toFixed(2)}</span>
    </div>
  );
}

export default Producto;
