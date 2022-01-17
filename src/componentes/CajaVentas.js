import React from "react";

function CajaVentas({producto,descripsion,urlfoto,history,idcompra,precio,lugar,status}) {
    const productoa = producto.trim().slice(0,70);
    const descripsiona = descripsion?.trim().slice(0,150);
    const redirect = () => {
      history.push( `/consultarpago/${idcompra}`);
       }
    return (
      <>
      <div className="productoventa">
          <div className="img-producto">
          <img
            onClick={redirect}
            src={urlfoto}
            alt="img"
          ></img>
          </div>
          <div className="caracteristicaproductocarrito">
            <div className="flexcolum space-around">
              <p className="mostrartextotitulocarrito" onClick={redirect}>
                {productoa}
              </p>
              <h3 className="cbasica">
               {descripsiona}
              </h3>
              <p className='infoaprobado'>{(status==="approved")?"Venta Confirmada":null}</p>
              <p className='preciocarrito preciocompra'>{(precio)?"$"+precio:"$"+ 0}</p>

            </div>
          </div>

        </div>
        <hr></hr>
              </>
    );
  }
  
  export default CajaVentas;
  