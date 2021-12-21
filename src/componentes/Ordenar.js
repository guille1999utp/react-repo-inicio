import "./Ordenar.scss";
import React, { useState, useEffect, useContext , useCallback} from "react";
import Cajasolicitud from "./Cajasolicitud";
import { useDispatch,useSelector} from 'react-redux';
import { SocketContext } from '../redux/context/contextchat'
import Swal from 'sweetalert2'
import { fetchCToken } from "../helpers/fetchmetod";
import { cargarordenes } from "../redux/actions/ordenar";
import { UploadPhoto } from "../helpers/cloudinaryUpload";

function Ordenar() {
  const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const ordenes = useSelector(ordenes => ordenes.ordenar.producto);
    const miusuario =  useSelector(yo => yo.infoUsuario.uid);
  const [solicitud, setSolicitud] = useState({
      de: miusuario,
      nombre: "",
      descripsion: "",
      fecha: "",
      categoria:"herramienta"
  });
  const [urlmas, setUrl] = useState("https://www.ing.uc.cl/transporte-y-logistica/wp-content/uploads/2018/04/foto-incognito.jpg");

  const obtenerproductos = useCallback(
    async() => {
      const ordenes = await fetchCToken('ordenar');
      if(!ordenes.ok){
      return ;
      }
      dispatch(cargarordenes(ordenes.producto))
    }, [dispatch],
  )
 useEffect( ()=>{
  obtenerproductos()
 },[obtenerproductos])

  const onSubmit = async(e) => {
    console.log(solicitud)
    e.preventDefault();

    if(solicitud.nombre.length === 0 || solicitud.descripsion.length === 0 || solicitud.fecha.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'error...',
        text: 'llene todos los campos por favor'
            })
            return ;
  }

  try{
    const url = (urlmas !== "https://www.ing.uc.cl/transporte-y-logistica/wp-content/uploads/2018/04/foto-incognito.jpg")? await UploadPhoto(urlmas):urlmas;
    console.log(url)
    socket.emit('orden',{
      solicitud,
      url: url
      })
    setSolicitud({
      de: miusuario,
      nombre: "",
      descripsion: "",
      fecha: "",
      categoria:"herramienta"
  });
  setUrl("https://www.ing.uc.cl/transporte-y-logistica/wp-content/uploads/2018/04/foto-incognito.jpg");
}catch(err){
  console.log(err)
}
  };
  const onFilesave  = async(e) =>{
    const file = e.target.files[0];
    console.log(file)
    setUrl(file);
  }

  const onFile  = () =>{
    document.querySelector('#fileordenar').click();
  }


  useEffect(() => {
    const chatscrollabajo = document.querySelector(".initialchatscroll");
    chatscrollabajo.scrollIntoView({
      behavior: "smooth",
    });
  });

  const onChangeMensaje = (e) => {
    const { name, value } = e.target;
    setSolicitud({
      ...solicitud,
      [name]: value,
    });
  };
  
 

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
            <div className="initialchatscroll"></div>
            {(ordenes.length > 0)?
              ordenes.map((producto) =>(
                <Cajasolicitud key={producto.oid} oid={producto.oid} producto={producto.nombre}  descripsion={producto.descripsion} urlfoto={producto.urlfoto}></Cajasolicitud>
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
