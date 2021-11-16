import './Ordenar.css';
import React, { useState, useEffect } from "react";


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
          <div className="chatuses">
            <div className="finalchatscroll"></div>
          </div>
          <form className="paletachat" onSubmit={onSubmit}>
            <i className="bx bx-paperclip"></i>
            <input
              type="text"
              className="decorationpaleta"
              value={solicitud.solicitado}
              placeholder="Escribir Mensaje"
              onChange={onChangeMensaje}
              name="solicitado"
            ></input>
            <button type="submit" className="botonsend">
              <i className="bx bxs-send"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );




  
}

export default Ordenar;
