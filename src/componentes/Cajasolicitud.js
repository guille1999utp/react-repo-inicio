import './Cajasolicitud.css';
import React from "react";
import { Link } from "react-router-dom";

function Cajasolicitud({producto,descripsion,urlfoto,id,solicitudes,setSolicitados}) {
  const productoa = producto.trim().slice(0,70);
  const descripsiona = descripsion.trim().slice(0,150);

  const onDelete = () => {
   const borrar = solicitudes.filter(element =>element.id !== id);
   console.log(borrar);
   setSolicitados([...borrar]);
     };
  return (
    <>
        <div className="productordenado">
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
              <button type="button" className="botoneliminarcarrito" onClick={ onDelete }>
                Eliminar
              </button>
            </div>
          </div>
        </div>
        <hr></hr>
            </>
  );
}

export default Cajasolicitud;
