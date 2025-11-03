import { useState } from "react";
import Header from './componentes/Header/Header';
import Body from './componentes/Body/Body';
import Footer from './componentes/Footer/Footer';
import coffeeImg from './assets/coffee.jpg';
import pieImg from './assets/pie.jpg';
import './componentes/Body/Carta.css';
import './componentes/Body/Body.css';

function App() {
  const [carta, setCarta] = useState([
    {
      categoria: "Coffee",
      imagen: coffeeImg,
      productos: [
        { nombre: "French Vanilla", precio: 3.00 },
        { nombre: "Caramel Macchiato", precio: 3.75 },
        { nombre: "Pumpkin Spice", precio: 3.50 },
        { nombre: "Hazelnut", precio: 4.00 },
        { nombre: "Mocha", precio: 4.50 },
      ],
    },
    {
      categoria: "Desserts",
      imagen: pieImg,
      productos: [
        { nombre: "Donut", precio: 1.50 },
        { nombre: "Cherry Pie", precio: 2.75 },
        { nombre: "Cheesecake", precio: 3.00 },
        { nombre: "Cinnamon Roll", precio: 2.50 },
      ],
    },
  ]);

  // Añadir categoría
  const agregarCategoria = () => {
    const nombre = prompt("Nombre de la nueva categoría:");
    if (nombre) {
      setCarta([...carta, { categoria: nombre, imagen: "", productos: [] }]);
    }
  };

  // Editar categoría
  const editarCategoria = (index) => {
    const nuevoNombre = prompt("Nuevo nombre:", carta[index].categoria);
    if (nuevoNombre) {
      const nuevaCarta = [...carta];
      nuevaCarta[index].categoria = nuevoNombre;
      setCarta(nuevaCarta);
    }
  };

  // Borrar categoría
  const borrarCategoria = (index) => {
    if (carta[index].productos.length > 0) {
      alert("Primero borra los productos de esta categoría.");
      return;
    }
    const confirmar = confirm("¿Seguro que quieres borrar esta categoría?");
    if (confirmar) {
      setCarta(carta.filter((_, i) => i !== index));
    }
  };

  // Actualizar productos de una categoría
  const actualizarProductos = (indexCategoria, nuevosProductos) => {
    const nuevaCarta = [...carta];
    nuevaCarta[indexCategoria].productos = nuevosProductos;
    setCarta(nuevaCarta);
  };

  return (
    <div className="app">
      <div className="carta-container">
        <Header />
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button onClick={agregarCategoria}>Añadir nueva categoría</button>
        </div>
        <Body
          carta={carta}
          editarCategoria={editarCategoria}
          borrarCategoria={borrarCategoria}
          actualizarProductos={actualizarProductos}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
