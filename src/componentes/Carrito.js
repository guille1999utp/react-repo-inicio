import React from 'react';
import './Carrito.css';
import { Link  } from 'react-router-dom';
const Carrito = () => {
    return (
        <div className='fondocarrito'>
      <div className='conteinerproductoseleccionado'>
       <div className='flexrow'>
      <Link to='/carrito/' className='botoncarrito'>Carrito(0)</Link>
      <Link to='/carrito/guardado' className='botoncarrito'>Guardado(5)</Link>
       </div>
       <hr></hr>
       <div className='productocarrito'>
       <img src='https://fondosmil.com/fondo/17010.jpg' className='img-producto' alt='img'></img>
       <div className='caracteristicaproductocarrito'>
      <div className ='flexcolum'>
      <Link to='/producto/45' className='mostrartextotitulocarrito'>Monitor Samsung Gaming 27 Curvo Fhd Nvidia G-sync 240hz</Link>
      <h3 className='cbasica'>Color: Dark blue gray, Voltaje: 100V/240V</h3>
      <span className='enviogratiscarrito'>envio gratis</span>
      <button type='button' className='botoneliminarcarrito'>Eliminar</button>
      </div>
      <div className ='flexcolum'>
          
      </div>
      <div className ='flexcolum'>
          
      </div>
       </div>
       </div>
      </div> 
        </div>
    )
}
export default Carrito;