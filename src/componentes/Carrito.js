import React from "react";
import "./Carrito.scss";
import { Link } from "react-router-dom";
import Cajacarrito from "./Cajacarrito";
import Footer from "./Footer";
import { useSelector} from 'react-redux';

const Carrito = () => {
  const carritoproducto = useSelector(carritos => carritos.productos.carrito);
  return (
    <>
    <div className="fondocarrito">
      <div className="conteinerproductoseleccionado">
        <div className="flexro">
          <Link to="/carrito/" className="botoncarrito">
            Carrito({carritoproducto.length})
          </Link>
        </div>
        <hr></hr>
        {carritoproducto.map((carro) =>(
        <Cajacarrito producto={carro.titulo} precio={carro.detalles[0].Precio} descripsion={carro.textdescripsion[0]} urlfoto={carro.fotosdescripsion[0].secure_url} id={carro.pid} ></Cajacarrito>
        ))}
        {(carritoproducto.length === 0)?
        <>
        <div className='comprarbotoncarrito'>Selecciona Tus Productos Favoritos <Link to="/inicio" className="botoncarrito">
            Ver productos 
          </Link></div>
        
        </>
        : null}
        {(carritoproducto.length > 0)?
        <button className='comprarbotoncarrito'>Comprar</button>
        : null}
        </div>
        <Footer/>

    </div>
    </>
  );
};
export default Carrito;
