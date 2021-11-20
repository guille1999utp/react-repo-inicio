import "./Ordenar.css";
import React, { useState, useEffect } from "react";
import Cajasolicitud from "./Cajasolicitud";

function Ordenar() {
  let solicitudesarray = [
    {
      producto:
        "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
      fecha: "5 minutos",
      descripsion: '',
      requerido: '',
      horallegada: '',
      urlfoto:''
    },
    {
      producto:
        "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
      fecha: "5 minutos",
      descripsion: '',
      requerido: '',
      horallegada: '',
      urlfoto:''
    },
    {
      producto:
        "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
      fecha: "5 minutos",
      descripsion: '',
      requerido: '',
      horallegada: '',
      urlfoto:''
    },
    {
      producto:
        "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
      fecha: "5 minutos",
      descripsion: '',
      requerido: '',
      horallegada: '',
      urlfoto:''
    },
  ];

  const [solicitudes, setSolicitados] = useState(solicitudesarray);
  const [solicitud, setSolicitud] = useState({
  producto: "",
      fecha: "",
      descripsion: '',
      requerido: '',
      horallegada: '',
      urlfoto:''
  });

  useEffect(() => {
    const chatscrollabajo = document.querySelector(".finalchatscroll");
    chatscrollabajo.scrollIntoView({
      behavior: "smooth",
    });
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setSolicitados([...solicitudes, solicitud]);
    setSolicitud({
  producto: "",
      fecha: "",
      descripsion: '',
      requerido: '',
      horallegada: '',
      urlfoto:''
    });
  };

  const onChangeMensaje = (e) => {
    const { name, value } = e.target;
    setSolicitud({
      ...solicitud,
      [name]: value,
    });
  };

  const onFile  = () =>{
    document.querySelector('#fileordenar').click();
  }

  return (
    <>
      <div className="agregardenar">
        <div className="formordenar">
          <h3>busca tu Producto</h3>
          <form className="formingresarproucto">
            <label for="titulo" className="flexrow wrap">
              <span>Producto</span>
              <input type="text" id="titulo" placeholder="Tu nombre"></input>
            </label>

            <label for="descripsion" className="flexrow wrap">
              <span>descripsion</span>
              <br></br>
              <textarea
                type="text"
                id="descripsion"
                placeholder="Descripsion"
              ></textarea>
            </label>

            <label for="dia" className="flexrow wrap">
              <span>dia requerido</span>
              <input type="date" id="dia"></input>
            </label>

            <label for="horario" className="flexrow wrap">
              <span>hora llegada</span>
              <input type="time" id="horario"></input>
            </label>

            <label className="flexrow wrap">
            <span class="file-custom">Fotos</span>
            <input type="file" id="fileordenar" aria-label="File browser example"></input>
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
            <div className="chatuses">
              <Cajasolicitud></Cajasolicitud>
              <div className="finalchatscroll"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ordenar;
