import React from "react";
import Carta from "./Carta";
import './Body.css';

function Body({ carta, editarCategoria, borrarCategoria, actualizarProductos }) {
  return (
    <div className="body-container">
      {carta.map((cat, i) => (
        <Carta
          key={i}
          categoria={cat.categoria}
          imagen={cat.imagen}
          productos={cat.productos}
          onEditar={() => editarCategoria(i)}
          onBorrar={() => borrarCategoria(i)}
          onActualizarProductos={(productos) => actualizarProductos(i, productos)}
        />
      ))}
      <span className="body-separator"></span>
    </div>
  );
}

export default Body;
