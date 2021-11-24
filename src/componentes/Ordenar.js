import "./Ordenar.css";
import React, { useState, useEffect } from "react";
import Cajasolicitud from "./Cajasolicitud";

function Ordenar() {
  let solicitudesarray = [
    {
      id: 1,
      producto:
        "computador gamer",
      fecha: "5 minutos",
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      requerido: '',
      horallegada: '',
      urlfoto:'https://www.alkosto.com/medias/192876259719-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNjU5MDJ8aW1hZ2UvcG5nfGltYWdlcy9oYzEvaGQ1LzkwNzg5NDYwMDUwMjIucG5nfGRjMzVlZjBkYzgwN2Y2ZWZhZGQxNmIxMjhhODg3NzU5NmMwNjNkN2I4OTc1NzMzY2NjNTA3YTQ3OTUxNjA2NGQ'
    },
    {
      id: 2,
      producto:"computador gamer",
      fecha: "5 minutos",
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      requerido: '',
      horallegada: '',
      urlfoto:'https://http2.mlstatic.com/D_NQ_NP_826178-MCO44786840309_022021-O.jpg'
    },
    {
      id: 3,
      producto:
        "computador gamer",
      fecha: "5 minutos",
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      requerido: '',
      horallegada: '',
      urlfoto:'https://falabella.scene7.com/is/image/FalabellaCO/13166500_1?wid=800&hei=800&qlt=70'
    },
    {
      id: 4,
      producto:
        "computador gamer",
      fecha: "5 minutos",
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      requerido: '',
      horallegada: '',
      urlfoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIUoORhUjAt4aoZIWn6VYAJebLwoDQPdXUw&usqp=CAU'
    },
    {
      id: 5,
      producto:
        "computador gamer",
      fecha: "5 minutos",
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      requerido: '',
      horallegada: '',
      urlfoto:'https://tecnobits.net/wp-content/uploads/2018/08/RAZER-BLADE-1555.jpg'
    },
  ];

  const [solicitudes, setSolicitados] = useState(solicitudesarray);
  const [solicitud, setSolicitud] = useState({
      id:"",
      producto: "",
      descripsion: "",
      fecha: "",
      requerido: "",
      horallegada: "",
      urlfoto:""
  });

  useEffect(() => {
    const chatscrollabajo = document.querySelector(".finalchatscroll");
    chatscrollabajo.scrollIntoView({
      behavior: "smooth",
    });
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if(solicitud.producto.length !== 0 && solicitud.descripsion.length !== 0){
    setSolicitud({...solicitud});
 
 
    console.log(solicitud)
    setSolicitados([solicitud,...solicitudes]);
    setSolicitud({
      producto: "",
      fecha: "",
      descripsion: '',
      requerido: '',
      horallegada: '',
      urlfoto:''
    });
  }
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
          <form className="formingresarproucto" onSubmit={onSubmit}>
            <label for="titulo" className="flexrow wrap">
              <span>Producto</span>
              <input type="text" id="titulo" placeholder="Tu nombre" name='producto' onChange={onChangeMensaje} value={solicitud.producto}></input>
            </label>

            <label for="descripsion" className="flexrow wrap">
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

            <label for="dia" className="flexrow wrap">
              <span>dia requerido</span>
              <input type="date" id="dia" name='fecha' onChange={onChangeMensaje} value={solicitud.fecha}></input>
            </label>

            <label for="horario" className="flexrow wrap">
              <span>hora llegada</span>
              <input type="time" id="horario" name='horallegada' onChange={onChangeMensaje} value={solicitud.horallegada}></input>
            </label>

            <label className="flexrow wrap">
            <span class="file-custom">Fotos</span>
            <input type="file" id="fileordenar" aria-label="File browser example" name='urlfoto' onChange={onChangeMensaje} value={solicitud.urlfoto}></input>
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
              {solicitudes.map((soli) =>(
                <Cajasolicitud key={soli.id} solicitudes={solicitudes} setSolicitados={setSolicitados} producto={soli.producto} id={soli.id} descripsion={soli.descripsion} urlfoto={soli.urlfoto}></Cajasolicitud>
              ))}
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ordenar;
