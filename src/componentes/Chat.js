import "./Chat.css";
import CajaChat from "./CajaChat";
import UsuariosConectados from "./UsuariosConectados";
import React, { useState, useContext, useEffect,useCallback} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { SocketContext } from '../redux/context/contextchat'
import { Link  } from 'react-router-dom';
import { cargarordenes } from "../redux/actions/ordenar";
import { fetchCToken } from "../helpers/fetchmetod";

function Chat() {
  const dispatch = useDispatch();
  const {socket} = useContext(SocketContext);
  const {chatActivo, usuarios, mensajes} =  useSelector(chat => chat.chat);
  const miusuario =  useSelector(yo => yo.infoUsuario);
  const ordenecomparar =  useSelector(orden => orden.ordenar.producto);
  const [seleccionar, setSeleccionar] = useState(false);
  const [pendiente, setPendiente] = useState('pendiente');

  const [mensaje, setmensaje] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    if(mensaje.length === 0){
      return ;
    }
   socket.emit('mensaje',{
   de:miusuario.uid,
   para:chatActivo.iduser,
   mensaje,
   productorden: mensajes[0].productorden,
   precio:mensajes[0].precio,
   condicion:mensajes[0].condicion
   })

    setmensaje('');
  };
 
  const obtenerproductos = useCallback(
    async() => {
      const ordenes = await fetchCToken('ordenar');
      console.log(ordenes)
      if(!ordenes.ok){
      return ;
      }
      dispatch(cargarordenes(ordenes.producto))
    }, [dispatch],
  )
  useEffect( ()=>{
  obtenerproductos()
  },[obtenerproductos])



  const onSelect = () =>{
    setSeleccionar(true);
    socket.emit('seleccionarchat',{
      de:miusuario.uid,
      para:chatActivo.iduser,
      productorden: mensajes[0].productorden,
      })
      socket.emit('desactivarproducto', {oid:mensajes[0].productorden});

  }

  const onExito = () =>{

  }
  const  onFail = () =>{

  }
  
  const  onEnviado = () =>{
    socket.emit('enviadoproductosolicitud',{
      productorden: mensajes[0].productorden,
      de:miusuario.uid,
      para:chatActivo.iduser
      })
  }
  useEffect(() => {
    const chatscrollabajo = document.querySelector(".finalchatscroll");
    chatscrollabajo?.scrollIntoView({
      behavior: "smooth",
    });
  });

  const onChangeMensaje = (e) => {
    setmensaje(e.target.value);
  };
  return (
    <>
      <div className="fondonegrochat"></div>
      <div className="cajachat">
        <div className="usuariosactivos">
         <div className="chatperfil">
             <img className="imagenchatuser" src={miusuario.urlfoto} alt='fotoperfilchat'></img> 
             <div className="iconoschatfondo">
              <i className="bx bxs-chat chaticon"></i>
              <i className="bx bx-dots-vertical-rounded menuchat"></i>
            </div>
          </div>

          {
          (usuarios.length > 0)?
          usuarios.filter(user => user.uid !== miusuario.uid).map((usuario) => (
            <UsuariosConectados
              key={usuario.uid}
              user={usuario}
              funChulo={setSeleccionar}
              funcpendiente={setPendiente}
            ></UsuariosConectados>
          )):null
          }
        </div>
        <div className={ (chatActivo )?"mensajesusuarios":'mensajesvacio'}>
          {
            (chatActivo)?<>
          <div className="paletacomandochat">
            <div className="correcionpaletachat">
            <Link to={`/perfil/${chatActivo.iduser}`} >
              <img
                className="fotousuariouser"
                alt="imgchatusehablando"
                src={chatActivo.urlfoto}
              ></img>
            </Link>
              <p className="nombrechat">{chatActivo.name}</p>
            </div>
            <i className="bx bx-dots-vertical-rounded menuchat"></i>
          </div>
          <div className="chatuses" id="mensajes">
            {mensajes.map((e) => (
              <CajaChat
                key={e._id}
                de = {e.de}
                mensaje = {e.mensaje}
                fecha = {e.createdAt}
              ></CajaChat>
            ))}
            <div className="finalchatscroll"></div>
          </div>
          <form className="paletachat" onSubmit={onSubmit}>
            {(seleccionar)?(pendiente === 'pendiente')?(ordenecomparar.map((dato)=>{
  if(dato.oid === mensajes[0]?.productorden){
    return dato.oid
  }else{
    return null;
  }
}).includes(mensajes[0]?.productorden))?<button className="buttoncancelarpedido" type="button" onClick={onFail}><p>Cancelar</p></button>:<button className="buttonenviopedido" type="button" onClick={onEnviado}><p>Enviado</p></button>:<button className="buttonexitopedido" type="button" onClick={onExito}><p>recibido</p></button>:(ordenecomparar.map((dato)=>{
  if(dato.oid === mensajes[0]?.productorden){
    console.log(dato.aparecer)
    return dato.aparecer
  }else{
    return false;
  }
}).includes(true))?<i className='bx bx-check' onClick={onSelect}></i>:null}
            <input
            autoComplete={'off'}
              type="text"
              className="decorationpaleta"
              value={mensaje}
              placeholder="Escribir Mensaje"
              onChange={onChangeMensaje}
              name="mensaj"
            ></input>
            <button type="submit" className="botonsend">
              <i className="bx bxs-send"></i>
            </button>
          </form>
          </>
          :<div className="nohaychat">
           <h1><i className='bx bxs-chat'></i> Selecciona un CHAT</h1>  
          </div>
          }
        </div>
      </div>
    </>
  );
}

export default Chat;
