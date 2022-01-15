import React from "react";

function CajaComprados({producto,descripsion,urlfoto,history,idcompra}) {
    const productoa = producto.trim().slice(0,70);
    const descripsiona = descripsion?.trim().slice(0,150);
    const redirect = () => {
      history.push( `/consultarpago/${idcompra}`);
       }
    return (
      <>
      <div className="productocarrito">
          <div className="img-producto">
          <img
            onClick={redirect}
            src={urlfoto}
            alt="img"
          ></img>
          </div>
          <div className="caracteristicaproductocarrito">
            <div className="flexcolum">
              <p className="mostrartextotitulocarrito" onClick={redirect}>
                {productoa}
              </p>
              <h3 className="cbasica">
               {descripsiona}
              </h3>
            </div>
          </div>
         
        </div>
        <hr></hr>
              </>
    );
  }
  
  export default CajaComprados;
  