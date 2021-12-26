import "./Chat.css";
import CajaChat from "./CajaChat";
import UsuariosConectados from "./UsuariosConectados";
import React, { useState, useContext, useEffect } from "react";
import { useSelector } from 'react-redux';
import { SocketContext } from '../redux/context/contextchat'

function Chat() {
      const {socket} = useContext(SocketContext);

  const {chatActivo, usuarios, mensajes} =  useSelector(chat => chat.chat);
  const miusuario =  useSelector(yo => yo.infoUsuario);

  const [mensaje, setmensaje] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if(mensaje.length === 0){
      return ;
    }
   socket.emit('mensaje',{
   de:miusuario.uid,
   para:chatActivo.iduser,
   mensaje
   })
    setmensaje('');
  };

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
            ></UsuariosConectados>
          )):null
          }
        </div>
        <div className={ (chatActivo)?"mensajesusuarios":'mensajesvacio'}>
          {
            (chatActivo)?<>
          <div className="paletacomandochat">
            <div className="correcionpaletachat">
              <img
                className="fotousuariouser"
                alt=""
                src={chatActivo.urlfoto}
              ></img>
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
            <i className="bx bx-paperclip"></i>
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
