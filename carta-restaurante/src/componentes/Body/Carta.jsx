import React, { useState } from "react";
import Producto from "./Producto";
import './Carta.css';

function Carta({ categoria, imagen, productos, onEditar, onBorrar, onActualizarProductos }) {
  const [listaProductos, setListaProductos] = useState(productos);

  // Añadir producto
  const agregarProducto = () => {
    const nombre = prompt("Nombre del nuevo producto:");
    const precio = parseFloat(prompt("Precio:"));
    if (nombre && !isNaN(precio)) {
      const nuevos = [...listaProductos, { nombre, precio }];
      setListaProductos(nuevos);
      onActualizarProductos(nuevos);
    }
  };

  // Editar producto
  const editarProducto = (index) => {
    const nuevoNombre = prompt("Nuevo nombre:", listaProductos[index].nombre);
    const nuevoPrecio = parseFloat(prompt("Nuevo precio:", listaProductos[index].precio));
    if (nuevoNombre && !isNaN(nuevoPrecio)) {
      const nuevos = [...listaProductos];
      nuevos[index] = { nombre: nuevoNombre, precio: nuevoPrecio };
      setListaProductos(nuevos);
      onActualizarProductos(nuevos);
    }
  };

  // Borrar producto
  const borrarProducto = (index) => {
    const confirmar = confirm("¿Seguro que deseas borrar este producto?");
    if (confirmar) {
      const nuevos = listaProductos.filter((_, i) => i !== index);
      setListaProductos(nuevos);
      onActualizarProductos(nuevos);
    }
  };

  return (
    <div className="carta">
      <h2 className="categoria">{categoria}</h2>
      <img src={imagen} alt={categoria} className="categoria-img" />


      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button onClick={onEditar}>Editar categoría</button>
        <button onClick={onBorrar}>Borrar categoría</button>
      </div>

      {listaProductos.map((prod, i) => (
        <div key={i}>
          <Producto nombre={prod.nombre} precio={prod.precio} />
          <div style={{ textAlign: "right", marginBottom: "5px" }}>
            <button onClick={() => editarProducto(i)}>Editar producto</button>
            <button onClick={() => borrarProducto(i)}>Borrar producto</button>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "center" }}>
        <button onClick={agregarProducto}>Añadir producto</button>
      </div>
    </div>
  );
}

export default Carta;
