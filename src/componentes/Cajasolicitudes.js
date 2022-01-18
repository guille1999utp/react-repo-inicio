import React,{ useState, useContext} from 'react'
import './Cajasolicitudes.css';
import { useDispatch,useSelector } from 'react-redux';
import { activarchat , Cargarmensajeschat} from '../redux/actions/chat';
import Swal from 'sweetalert2'
import { SocketContext } from '../redux/context/contextchat'
import { fetchCToken } from '../helpers/fetchmetod';

export const Cajasolicitudes = ({history,de,producto,descripsion,urlfoto}) => {
  const {socket} = useContext(SocketContext);
  const miusuario =  useSelector(yo => yo.infoUsuario);
  const chats =  useSelector(chatsuser => chatsuser.chat.usuarios);
  const dispatch = useDispatch();
  const productoa = producto.trim().slice(0,70);
  const descripsiona = descripsion.trim().slice(0,200);

  const [solicitud, setSolicitud] = useState({
    plata: ''
  });

  const onChangeMensaje = (e) => {
    setSolicitud({plata:e.target.value});
  };

  
  const onSubmit = async(e) => {
    e.preventDefault();
    if(solicitud.plata.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'error...',
        text: 'coloque un precio por el producto'
            })
            return ;
  }
  const mensaje = productoa + 'lo tengo disponible al siguiente precio: ' + solicitud.plata;
  socket.emit('mensaje',{
    de:miusuario.uid,
    para:de,
    mensaje
    })
    const chatactivo = chats.filter( user => user.uid === de);
    dispatch(activarchat({iduser:chatactivo[0].uid, name: chatactivo[0].nombre}));
    const res = await fetchCToken(`chat/${de}`);
    dispatch(Cargarmensajeschat(res.mensajes));
    history.push( '/chat');

  };



    return (
      <>
        <div className="productordenado">
          <div className="img-producto">
          <img
            src={urlfoto}
            alt="img"
          ></img>
          </div>
          <div className="caracteristicaproductocarrito">
            <div className="flexcolum">
              <p className="mostrartextotitulocarrito">
               {productoa}
              </p>
              <h3 className="cbasica">
               {descripsiona}
              </h3>
              
            </div>
          </div>
          <form onSubmit={onSubmit}>
              <span>Precio orden</span>
              <input className='preciocajasolicitud' autoComplete={'off'} type="number" id="precio" placeholder="Tu nombre" name='plata' onChange={onChangeMensaje} value={solicitud.plata}></input>
              <br></br>
             <button type='submit'>Informar</button>
            </form>
        </div>
        <hr></hr>
        </>
    )
}
export default Cajasolicitudes;