import './Cajasolicitud.css';
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { SocketContext } from '../redux/context/contextchat'
import Swal from 'sweetalert2'

function Cajasolicitud({producto,descripsion,urlfoto,id,precio,history}) {
    const {socket} = useContext(SocketContext);
    const productoa = producto.trim().slice(0,70);
    const descripsiona = descripsion?.trim().slice(0,150);
  
    const onDelete = () => {
      socket.emit('eliminarproductocarrito',{
        pid:id
        });

        socket.on('eliminarproductocarrito',(res)=>{
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          if(res.ok){
            Toast.fire({
              icon: 'success',
              title: res.msg
            })
          }else{
            Toast.fire({
              icon: 'error',
              title: res.msg
            })
          }
        })
       };
       const redirect = () => {
        history.push( `/producto/${id}`);
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
            <div className="flexcolum space-around">
              <Link to={`/producto/${id}`} className="mostrartextotitulocarrito">
                {productoa}
              </Link>
              <h3 className="cbasica">
               {descripsiona}
              </h3>
              <span className="enviogratiscarrito">Envio gratis</span>
              <div className='flexrowcarrito'>
              <button type="button" className="botoneliminarcarrito" onClick={onDelete}>
                Eliminar
              </button>
              <p className='preciocarrito'>{'$'+precio}</p>
              </div>
            </div>
          </div>
         
        </div>
        <hr></hr>
              </>
    );
  }
  
  export default Cajasolicitud;
  