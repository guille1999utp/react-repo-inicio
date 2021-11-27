import './Cajasolicitud.css';
import React from "react";
import { Link } from "react-router-dom";

function Cajasolicitud({producto,descripsion,urlfoto,id,carrito,setCarrito,precio}) {
    const productoa = producto.trim().slice(0,70);
    const descripsiona = descripsion.trim().slice(0,150);
  
    const onDelete = () => {
     const borrar = carrito.filter(element =>element.id !== id);
     console.log(borrar);
     setCarrito([...borrar]);
       };
    return (
      <>
      <div className="productocarrito">
          <img
            src={urlfoto}
            className="img-producto"
            alt="img"
          ></img>
          <div className="caracteristicaproductocarrito">
            <div className="flexcolum">
              <Link to="/producto/45" className="mostrartextotitulocarrito">
                {productoa}
              </Link>
              <h3 className="cbasica">
               {descripsiona}
              </h3>
              <span className="enviogratiscarrito">Envio gratis</span>
              <div className='flexrowcarrito'>
              <button type="button" className="botoneliminarcarrito" onClick={onDelete}>
                Eliminar
              </button>
              <p className='preciocarrito'>{'$'+precio}</p>
              </div>
            </div>
          </div>
         
        </div>
        <hr></hr>
              </>
    );
  }
  
  export default Cajasolicitud;
  