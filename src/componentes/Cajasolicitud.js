import './Cajasolicitud.css';
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { SocketContext } from '../redux/context/contextchat'
import Swal from 'sweetalert2'

function Cajasolicitud({producto,descripsion,urlfoto,oid,idfoto}) {
  const {socket} = useContext(SocketContext);

  const productoa = producto.trim().slice(0,70);
  const descripsiona = descripsion.trim().slice(0,150);

  const onDelete = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        socket.emit('eliminarorden', {oid,idfoto});
        Swal.fire(
          'Eliminado!',
          'eliminado con exito',
          'success'
        )
      }
    })
  };
  return (
    <>
        <div className="productordenadoss">
          <div className="img-producto">
          <img
            src={urlfoto}
            alt="img"
          ></img>
          </div>
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
