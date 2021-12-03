import React,{ useState} from 'react'
import { Link } from "react-router-dom";
import './Cajasolicitudes.css';
export const Cajasolicitudes = ({producto,descripsion,urlfoto,id,solicitudes,setSolicitados}) => {

    const productoa = producto.trim().slice(0,70);
  const descripsiona = descripsion.trim().slice(0,200);

  const [solicitud, setSolicitud] = useState({producto});

  const onChangeMensaje = (e) => {

    setSolicitud(e.target.value);
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
              
            </div>
          </div>
          <form for="precio">
              <span>Precio orden</span>
              <input className='preciocajasolicitud' autoComplete={'off'} type="number" id="precio" placeholder="Tu nombre" name='producto' onChange={onChangeMensaje} value={solicitud.producto}></input>
              <br></br>
             <button type='submit'>Informar</button>
            </form>
        </div>
        <hr></hr>
        </>
    )
}
export default Cajasolicitudes;