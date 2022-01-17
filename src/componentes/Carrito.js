import React,{useState} from "react";
import "./Carrito.scss";
import { Link } from "react-router-dom";
import Cajacarrito from "./Cajacarrito";
import CajaVentas from "./CajaVentas";
import CajaComprados from "./CajaComprados";
import Footer from "./Footer";
import { useSelector} from 'react-redux';

const Carrito = ({history}) => {
  const carritoproducto = useSelector(carritos => carritos.productos.carrito);
  const comprados = useSelector(comprados => comprados.productos.comprados);
  const ventas = useSelector(ventas => ventas.productos.ventas);
  const [state, setState] = useState(1);
  const mostrar = (mostrar) =>{
    setState(mostrar);
  }
  return (
    <>
    <div className="fondocarrito">
      <div className="conteinerproductoseleccionado">
        <div className="flexro">
          <span  className={(state === 0)?"botoncarrito opacityOprimer":"botoncarrito"} onClick={()=>mostrar(0)}>
            Carrito({carritoproducto.length})
          </span>
          <span className={(state === 1)?"botoncarrito opacityOprimer":"botoncarrito"} onClick={()=>mostrar(1)}>
            Compras({comprados.length})
          </span>
          <span className={(state === 2)?"botoncarrito opacityOprimer":"botoncarrito"} onClick={()=>mostrar(2)}>
            Ventas({ventas.length})
          </span>
        </div>
        <hr></hr>

        {(state === 0)? <>
        {carritoproducto.map((carro) =>(
        <Cajacarrito history={history} producto={carro.titulo} precio={carro.detalles[0].Precio} descripsion={carro.textdescripsion[0]}  urlfoto={(carro.fotosdescripsion[0]?.secure_url)?carro.fotosdescripsion[0].secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg"} id={carro.pid} ></Cajacarrito>
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
        </>
        :null
        }

    {(state === 1)? <>
        {comprados.map((carro) =>(
        <CajaComprados precio={carro.precio} history={history} key={carro.codigoProducto} idcompra={carro.codigoProducto} producto={carro.titulo}  descripsion={carro.descripsion}  urlfoto={(carro.secure_url?.secure_url)?carro.secure_url.secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg"}  ></CajaComprados>
        ))}
        {(comprados.length === 0)?
        <>
        <div className='comprarbotoncarrito'>No tienes Compras, visita el Sitio y Compra tu Primer Producto <Link to="/inicio" className="botoncarrito">
            Ver productos 
          </Link></div>
        </>
        : null}
   
        </>
        :null
        } 
{(state === 2)? <>
        {ventas.map((carro) =>(
        <CajaVentas  status={carro.status} precio={carro.precio} history={history} key={carro.codigoProducto} idcompra={carro.codigoProducto} producto={carro.titulo}  descripsion={carro.descripsion}  urlfoto={(carro.secure_url?.secure_url)?carro.secure_url.secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg"}  ></CajaVentas>
        ))}
        {(ventas.length === 0)?
        <>
        <div className='comprarbotoncarrito'>No tienes Compras, visita el Sitio y Compra tu Primer Producto <Link to="/inicio" className="botoncarrito">
            Ver productos 
          </Link></div>
        </>
        : null}
   
        </>
        :null
        } 
        </div>
        <Footer/>

    </div>
    </>
  );
};
export default Carrito;
