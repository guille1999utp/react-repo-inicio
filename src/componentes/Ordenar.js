import './Ordenar.css';
import React, { useState, useEffect } from "react";
import Cajasolicitud from './Cajasolicitud';

function Ordenar() {
    let solicitudesarray = [
        {
          solicitado:
            "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
          fecha: "5 minutos",
        },
        {
            solicitado:
            "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
          fecha: "5 minutos",
        },
        {
            solicitado:
            "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
          fecha: "5 minutos",
        },
        {
            solicitado:
            "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
          fecha: "5 minutos",
        },
      ];
    
      const [solicitudes, setSolicitados] = useState(solicitudesarray);
      const [solicitud, setSolicitud] = useState({
        solicitado: "",
        fecha: "5 minutos",
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
            solicitado: "",
          fecha: "5 minutos",
        });
      };
    
      const onChangeMensaje = (e) => {
        const { name, value } = e.target;
        setSolicitud({
          ...solicitud,
          [name]: value,
        });
      };
  return (
    <>
    <div className='agregardenar'>
      <div className='formordenar'>
  <form>
  <label for="nombre">
            <span>¿Cuál es tu nombre?</span>
            <input type="text" id="nombre" placeholder="Tu nombre"></input>
        </label>
        <label for="inicio-platzi">
            <span>¿Qué día comenzaste en Platzi?</span>
            <input type="date" id="inicio-platzi"></input>
        </label>
        <label for="horario">
            <span>¿En qué horario estudias?</span>
            <input type="time" id="horario"></input>
        </label>
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
            <div className="finalchatscroll">
            </div>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );




  
}

export default Ordenar;
