import './Cajasolicitud.css';
import React from "react";
import { Link } from "react-router-dom";

function Cajasolicitud() {
  return (
    <>
        <div className="productordenado">
          <img
            src="https://fondosmil.com/fondo/17010.jpg"
            className="img-producto"
            alt="img"
          ></img>
          <div className="caracteristicaproductocarrito">
            <div className="flexcolum">
              <Link to="/producto/45" className="mostrartextotitulocarrito">
                Monitor Samsung Gaming 27 Curvo Fhd Nvidia G-sync 240hz
              </Link>
              <h3 className="cbasica">
                Color: Dark blue gray, Voltaje: 100V/240V
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
