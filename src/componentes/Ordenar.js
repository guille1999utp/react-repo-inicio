import "./Ordenar.scss";
import React, { useState, useEffect, useContext } from "react";
import Cajasolicitud from "./Cajasolicitud";
import { useSelector } from 'react-redux';
import { SocketContext } from '../redux/context/contextchat'
import Swal from 'sweetalert2'

function Ordenar() {
    const {socket} = useContext(SocketContext);
    const ordenes = useSelector(ordenes => ordenes.ordenar.producto);
    const miusuario =  useSelector(yo => yo.infoUsuario.uid);
  const [solicitud, setSolicitud] = useState({
      de: miusuario,
      nombre: "",
      descripsion: "",
      fecha: "",
      urlfoto:"https://www.ing.uc.cl/transporte-y-logistica/wp-content/uploads/2018/04/foto-incognito.jpg",
      categoria:"herramienta"
  });

  useEffect(() => {
    const chatscrollabajo = document.querySelector(".finalchatscroll");
    chatscrollabajo.scrollIntoView({
      behavior: "smooth",
    });
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if(solicitud.nombre.length === 0 && solicitud.descripsion.length === 0 && solicitud.fecha.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'error...',
        text: 'llene todos los campos por favor'
            })
  }
  socket.emit('orden',{
    solicitud
    })
    setSolicitud({
      de: miusuario,
      nombre: "",
      descripsion: "",
      fecha: "",
      urlfoto:"https://www.ing.uc.cl/transporte-y-logistica/wp-content/uploads/2018/04/foto-incognito.jpg",
      categoria:""
  });
  };

  const onChangeMensaje = (e) => {
    const { name, value } = e.target;
    setSolicitud({
      ...solicitud,
      [name]: value,
    });
  };
  
  const onFilesave  = (e) =>{
    console.log(e.target.files)
  }

  const onFile  = () =>{
    document.querySelector('#fileordenar').click();
  }

  return (
    <>
      <div className="agregardenar">
        <div className="formordenar">
          <h3>busca tu Producto</h3>
          <form className="formingresarproucto" onSubmit={onSubmit}>
            <label  className="flexrow wrap">
              <span>Producto</span>
              <input autoComplete={'off'} type="text" id="titulo" placeholder="nombre" name='nombre' onChange={onChangeMensaje} value={solicitud.nombre}></input>
            </label>

            <label className="flexrow wrap">
              <span>descripsion</span>
              <br></br>
              <textarea
                type="text"
                id="descripsion"
                placeholder="Descripsion"
                name='descripsion'
                onChange={onChangeMensaje}
                value={solicitud.descripsion} ></textarea>
            </label>

            <label  className="flexrow wrap">
              <span>dia requerido</span>
              <input type="date" id="dia" name='fecha' onChange={onChangeMensaje} value={solicitud.fecha}></input>
            </label>

            <label  className="flexrow wrap">
              <span>hora llegada</span>
              <input type="time" id="horario" name='horallegada' onChange={onChangeMensaje} value={solicitud.horallegada}></input>
            </label>

            <label className="flexrow wrap">
            <span className="file-custom">Fotos</span>
            <input type="file" id="fileordenar" aria-label="File browser example" name='urlfoto' onChange={onFilesave} ></input>
             <button type='button' className='butonfile' onClick={onFile}>subir foto</button>
            </label>
            <button type="submit" className="butonsolicitar">
              Solicitar
            </button>
          </form>
        </div>
        <div className="cajaordenar">
          <div className="mensajesusuarios">
            <div className="paletacomandoproductos">
              <div className="correcionpaletachat">
                <img
                  className="fotousuariouser"
                  alt=""
                  src="https://www.fondosdepantalla.top/wp-content/uploads/2017/02/Imagenes-de-Planetas-en-4K-fondosdepantalla-5.jpg"
                ></img>
                <p className="solicitante">Productos Solicitados</p>
              </div>
              <i className="bx bx-dots-vertical-rounded menuchat"></i>
            </div>
            <form className="paletachat" onSubmit={onSubmit}>
              <input
                type="text"
                className="decorationpaleta"
                value={solicitud.solicitado}
                placeholder="Buscar"
                onChange={onChangeMensaje}
                name="solicitado"
              ></input>
              <button type="submit" className="botonsend">
                <i className="bx bxs-send"></i>
              </button>
            </form>
            <div className="ordenarproductossolicitud">
            <div className="finalchatscroll"></div>
            {(ordenes.length > 0)?
              ordenes.map((soli) =>(
                <Cajasolicitud key={soli.id}  producto={soli.producto} id={soli.id} descripsion={soli.descripsion} urlfoto={soli.urlfoto}></Cajasolicitud>
              ))
            : <div className='ceroordenar'><h2>Solicita tu primer producto</h2></div>}
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ordenar;
