import "./Chat.css";
import CajaChat from "./CajaChat";
import UsuariosConectados from "./UsuariosConectados";
import React, { useState, useContext, useEffect,useCallback} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { SocketContext } from '../redux/context/contextchat'
import { Link  } from 'react-router-dom';
import { cargarordenes } from "../redux/actions/ordenar";
import { exitChat } from "../redux/actions/chat";
import { fetchCToken } from "../helpers/fetchmetod";
import Swal from 'sweetalert2'
import { UploadPhoto } from "../helpers/cloudinaryUpload";

function Chat() {
  const dispatch = useDispatch();
  const [urlmas, setUrl] = useState(0);
  const {socket} = useContext(SocketContext);
  const [Width, setWidth] = useState(window.innerWidth);  
  const cambiarTamaño=()=>{ 
    setWidth(window.innerWidth);
 }

  useEffect(()=>{
    window.addEventListener('resize',cambiarTamaño);
    return ()=>{
      window.removeEventListener('resize', cambiarTamaño)
    }

  })
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
   image:false,
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
  return ()=>{
    dispatch(exitChat());
  }
  },[obtenerproductos,dispatch])



  const onSelect = () =>{
    setSeleccionar(true);
    socket.emit('seleccionarchat',{
      de:miusuario.uid,
      para:chatActivo.iduser,
      productorden: mensajes[0].productorden,
      })
      socket.emit('desactivarproducto', {oid:mensajes[0].productorden, para:chatActivo.iduser});
  }

  useEffect(() => {
  
    socket.on('desactivarproducto',(dato)=>{
      console.log(dato)
      setSeleccionar(dato)
    });
  }, [ socket, setSeleccionar]);
  
  const exitchat = () =>{
    dispatch(exitChat());
  }
  useEffect(() => {
    socket.on('estadopendiente',()=>{
      setPendiente('enviado')
    });
  }, [ socket, setSeleccionar]);

  useEffect(() => {
    socket.on('estadorecibido',()=>{
      setPendiente('recibido')
    });
  }, [ socket, setSeleccionar]);

  const onRecibido = () =>{
    socket.emit('recibidoproductosolicitud',{
      productorden: mensajes[0].productorden,
      de:miusuario.uid,
      para:chatActivo.iduser
      })
  }
  const  onFail = () =>{

  }
  
  const  onCancel = () =>{
    Swal.fire({
      title: 'estas seguro?',
      text: "¡Borraras Toda la Conversacion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Entendido!'
    }).then((result) => {
      if (result.isConfirmed) {
        setSeleccionar(false);
    socket.emit('deseleccionarchat',{
      de:miusuario.uid,
      para:chatActivo.iduser,
      productorden: mensajes[0].productorden,
      })
        Swal.fire(
          'Chat Eliminado!',
          'Chat eliminado con exito',
          'success'
        )
      }
    })
    
  }
  
  const onFilesave  = async(e) =>{
    if(e.target.files.length === 0){
      return null;
    }
    const file = e.target.files[0];
    setUrl(file);
  }

  const onFile  = () =>{
    document.querySelector('#filefotochat').click();
  }


  const  onExito = () =>{
    socket.emit('productorecibidoconexito',{
      productorden: mensajes[0].productorden,
      de:miusuario.uid,
      para:chatActivo.iduser,
      dinero:mensajes[0].precio*0.05
      })
  }

  const  onExitoImage = async() =>{
  
    try{
      const url =  await UploadPhoto(urlmas);
      socket.emit('mensajeimage',{
        de:miusuario.uid,
        para:chatActivo.iduser,
        mensaje:'a',
        image:true,
        urlfoto: url.secure_url,
        uidfoto: url.public_id,
        productorden: mensajes[0].productorden,
        precio:mensajes[0].precio,
        condicion:mensajes[0].condicion
        })
    
    setUrl(0);
  }catch(err){
    console.log(err)
  }
  }
  

  const  onCancelImage = () =>{
    setUrl(0);
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
      <input type="file" id="filefotochat" aria-label="File browser example" name='urlfoto' onChange={onFilesave} ></input>

     { (Width > 600)?<div className="cajachat">
        <div className="usuariosactivos">
         <div className="chatperfil">
             <img className="imagenchatuser" src={miusuario.urlfoto} alt='fotoperfilchat'></img> 
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
              <img
                className="fotousuariouser"
                alt="imgchatusehablando"
                src={chatActivo.urlfoto}
              ></img>
              <p className="nombrechat">{chatActivo.name}</p>
            </div>
          </div>
          <div className="chatuses" id="mensajes">
            {mensajes.map((e) => (
              <CajaChat
                key={e._id}
                de = {e.de}
                mensaje = {e.mensaje}
                fecha = {e.createdAt}
                urlfoto = {e.urlfoto}
                image = {e.image}
              ></CajaChat>
            ))}
            <div className="finalchatscroll"></div>
          </div>
          <form className="paletachat" onSubmit={onSubmit}>
            {(seleccionar)?//1i
            (pendiente === 'pendiente')?//2i
              (ordenecomparar.map((dato)=>{
              if(dato.oid === mensajes[0]?.productorden){
                return dato.oid
              }else{
               return null;
              }
            }).includes(mensajes[0]?.productorden))?//3i
            <button className="buttoncancelarpedido" type="button" onClick={onCancel}><p>Cancelar</p></button>://3f
            <button className="buttonenviopedido" type="button" onClick={onEnviado}><p>Enviado</p></button>://2f
            (pendiente === 'enviado')?//4i
             (ordenecomparar.map((dato)=>{
             if(dato.oid === mensajes[0]?.productorden){
               return dato.oid
             }else{
               return null;
             }
            }).includes(mensajes[0]?.productorden))?//5i
            <button className="buttonexitopedido" type="button" onClick={onRecibido}><p>recibido</p></button>: null: null://4f // 5f
             (ordenecomparar.map((dato)=>{
              if(dato.oid === mensajes[0]?.productorden){
                console.log(dato.aparecer)
                return dato.aparecer
              }else{
                return false;
              }
            }).includes(true))?//6i
            <i className='bx bx-check' onClick={onSelect}></i>:null//1f
            }

            { (pendiente === 'recibido')?
            (ordenecomparar.map((dato)=>{
             if(dato.oid === mensajes[0]?.productorden){
                return dato.oid
             }else{
               return null;
              }
            }).includes(mensajes[0]?.productorden))?
            <>
            <button type="button" className="botonsend"  onClick={onFile}>
            <i className='bx bx-image-alt' ></i>           
             </button>
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
         </>:<div className='bordesolicitudcompleta'>
          <button className="buttonenviopedido" type="button" onClick={onExito}><p>Terminar</p></button>
           <button className="buttoncancelarpedido" type="button" onClick={onFail}><p>Reportar Problema</p></button>
          </div>
          :<>
             {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
             {(urlmas.size > 0)?
            <div className='bordesolicitudcompleta'>
            <button className="buttonenviopedido" type="button" onClick={onExitoImage}><p>Enviar</p></button>
             <button className="buttoncancelarpedido" type="button" onClick={onCancelImage}><p>Cancelar</p></button>
            </div>
          :<>
          <button type="button" className="botonsend"  onClick={onFile}>
            <i className='bx bx-image-alt' ></i>           
             </button>
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
          </>  
          }
         {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}</>}
           
          </form>
          </>
          :<div className="nohaychat">
           <h1><i className='bx bxs-chat'></i> Selecciona un CHAT</h1>  
          </div>
          }
        </div>
      </div>:
      
      ////////////////////////////
      <div className="cajachat">
        {(!chatActivo)?<div className="usuariosactivos">
         <div className="chatperfil">
             <img className="imagenchatuser" src={miusuario.urlfoto} alt='fotoperfilchat'></img> 
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
        </div>:null}
        {(chatActivo)?<div className={ (chatActivo )?"mensajesusuarios":'mensajesvacio'}>
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
          <i className='bx bx-log-out menuchat' onClick={exitchat}></i>
          </div>
          <div className="chatuses" id="mensajes">
            {mensajes.map((e) => (
              <CajaChat
                key={e._id}
                de = {e.de}
                mensaje = {e.mensaje}
                fecha = {e.createdAt}
                urlfoto = {e.urlfoto}
                image = {e.image}
              ></CajaChat>
            ))}
            <div className="finalchatscroll"></div>
          </div>
          <form className="paletachat" onSubmit={onSubmit}>
            {(seleccionar)?//1i
            (pendiente === 'pendiente')?//2i
              (ordenecomparar.map((dato)=>{
              if(dato.oid === mensajes[0]?.productorden){
                return dato.oid
              }else{
               return null;
              }
            }).includes(mensajes[0]?.productorden))?//3i
            <button className="buttoncancelarpedido" type="button" onClick={onCancel}><p>Cancelar</p></button>://3f
            <button className="buttonenviopedido" type="button" onClick={onEnviado}><p>Enviado</p></button>://2f
            (pendiente === 'enviado')?//4i
             (ordenecomparar.map((dato)=>{
             if(dato.oid === mensajes[0]?.productorden){
               return dato.oid
             }else{
               return null;
             }
            }).includes(mensajes[0]?.productorden))?//5i
            <button className="buttonexitopedido" type="button" onClick={onRecibido}><p>recibido</p></button>: null: null://4f // 5f
             (ordenecomparar.map((dato)=>{
              if(dato.oid === mensajes[0]?.productorden){
                console.log(dato.aparecer)
                return dato.aparecer
              }else{
                return false;
              }
            }).includes(true))?//6i
            <i className='bx bx-check' onClick={onSelect}></i>:null//1f
            }

            { (pendiente === 'recibido')?
            (ordenecomparar.map((dato)=>{
             if(dato.oid === mensajes[0]?.productorden){
                return dato.oid
             }else{
               return null;
              }
            }).includes(mensajes[0]?.productorden))?
            <>
             <button type="button" className="botonsend"  onClick={onFile}>
            <i className='bx bx-image-alt' ></i>           
             </button>
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
         </>:<div className='bordesolicitudcompleta'>
          <button className="buttonenviopedido" type="button" onClick={onExito}><p>Terminar</p></button>
           <button className="buttoncancelarpedido" type="button" onClick={onFail}><p>Reportar Problema</p></button>
          </div>
          :<>
           {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
           {(urlmas.size > 0)?
            <div className='bordesolicitudcompleta'>
            <button className="buttonenviopedido" type="button" onClick={onExitoImage}><p>Enviar</p></button>
             <button className="buttoncancelarpedido" type="button" onClick={onCancelImage}><p>Cancelar</p></button>
            </div>
          :<>
          <button type="button" className="botonsend"  onClick={onFile}>
            <i className='bx bx-image-alt' ></i>           
             </button>
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
          </>  
          }
         {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}</>}
           
          </form>
          </>
          :<div className="nohaychat">
           <h1><i className='bx bxs-chat'></i> Selecciona un CHAT</h1>  
          </div>
          }
        </div>:null}
      </div>}
    </>
  );
}

export default Chat;
