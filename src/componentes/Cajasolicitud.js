import './Cajasolicitud.css';
import React from "react";
import { Link } from "react-router-dom";

function Cajasolicitud({producto,descripsion,urlfoto}) {
  console.log(urlfoto)
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
               {producto}
              </Link>
              <h3 className="cbasica">
               {descripsion}
              </h3>
              <button type="button" className="botoneliminarcarrito">
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
