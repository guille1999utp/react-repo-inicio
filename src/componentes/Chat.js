import "./Chat.css";
import CajaChat from "./CajaChat";
import UsuariosConectados from "./UsuariosConectados";
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useSocket } from "../SocketsConnection/useSocket";


function Chat() {
 const {  socket , conectarSocket, desconectarSocket } = useSocket('http://localhost:4000');

  const {chatActivo, usuarios, mensajes} =  useSelector(chat => chat.chat);
  const miusuario =  useSelector(yo => yo.infoUsuario);

  useEffect(() => {
    if ( miusuario.online ) {
        conectarSocket();
    }
   
}, [conectarSocket]);

useEffect(() => {
  if( !miusuario.online ){
    desconectarSocket();
  }
}, [ miusuario, desconectarSocket ]);

  const [mensaje, setmensaje] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if(mensaje.length === 0){
      return ;
    }
   socket.emit('mensaje',{
   de:miusuario.uid,
   para:chatActivo,
   mensaje
   })
    setmensaje('');
  };

  useEffect(() => {
    const chatscrollabajo = document.querySelector(".finalchatscroll");
    chatscrollabajo.scrollIntoView({
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
            <i className="bx bx-user"></i>
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
                src="https://www.fondosdepantalla.top/wp-content/uploads/2017/02/Imagenes-de-Planetas-en-4K-fondosdepantalla-5.jpg"
              ></img>
              <p className="nombrechat">nicolas pinga</p>
            </div>
            <i className="bx bx-dots-vertical-rounded menuchat"></i>
          </div>
          <div className="chatuses">
            {mensajes.map((e) => (
              <CajaChat
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
           <h1><i class='bx bxs-chat'></i> Selecciona un CHAT</h1>  
            <div className="finalchatscroll"></div>
          </div>
          }
        </div>
      </div>
    </>
  );
}

export default Chat;
