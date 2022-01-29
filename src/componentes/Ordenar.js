import "./Ordenar.scss";
import React, { useState, useEffect, useContext , useCallback} from "react";
import Cajasolicitud from "./Cajasolicitud";
import { useDispatch,useSelector} from 'react-redux';
import { SocketContext } from '../redux/context/contextchat'
import Swal from 'sweetalert2'
import { fetchCToken } from "../helpers/fetchmetod";
import { cargarordenes } from "../redux/actions/ordenar";
import { UploadPhoto } from "../helpers/cloudinaryUpload";
import Footer from "./Footer";
import { subirOrden} from '../redux/actions/ordenar';

function Ordenar() {
  const dispatch = useDispatch();
    const {socket} = useContext(SocketContext);
    const ordenes = useSelector(ordenes => ordenes.ordenar.producto);
    const miusuario =  useSelector(yo => yo.infoUsuario);
  const [solicitud, setSolicitud] = useState({
      de: miusuario.uid,
      nombre: "",
      descripsion: "",
      fecha: "",
      categoria:"Repuestos"
  });
  const [urlmas, setUrl] = useState({
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
    public_id: 0
  });

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
    e.preventDefault();

    if(solicitud.nombre.length === 0 || solicitud.descripsion.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'error...',
        text: 'llene todos los campos por favor'
            })
            return ;
  }

  try{
    const url = (urlmas.secure_url !== "https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp")? await UploadPhoto(urlmas):urlmas;
    socket.emit('orden',{
      solicitud,
      url
      })
    setSolicitud({
      de: miusuario.uid,
      nombre: "",
      descripsion: "",
      categoria:"todos"
  });
  setUrl(
    {
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
    public_id: 0
});
}catch(err){
  console.log(err)
}
  };

  useEffect(() => {
    socket?.on( 'orden', (orden) => {
      console.log(orden)
        if(orden.de === miusuario.uid){
            dispatch(subirOrden(orden));
        }
    })
}, [ socket , dispatch, miusuario.uid]);


  const onFilesave  = async(e) =>{
    const file = e.target.files[0];
    setUrl(file);
  }

  const onFile  = () =>{
    document.querySelector('#fileordenar').click();
  }



  const onChangeMensaje = (e) => {
    const { name, value } = e.target;
    setSolicitud({
      ...solicitud,
      [name]: value,
    });
  };
  
 

  return (
    <>
    <div className="correcionfooter"> 
      <div className="agregardenar">
        <div className="formordenar">
          <h3>Busca tu Producto</h3>
          <form className="formingresarproucto" onSubmit={onSubmit}>
            <label  className="flexrow wrapordenar">
              <span>Producto</span>
              <input autoComplete={'off'} type="text" id="titulo" placeholder="nombre" name='nombre' onChange={onChangeMensaje} value={solicitud.nombre}></input>
            </label>

            <label className="flexrow wrapordenar">
              <span>Descripcion</span>
              <br></br>
              <textarea
              className="textareaordenar"
                type="text"
                id="descripsion"
                placeholder="Descripsion"
                name='descripsion'
                onChange={onChangeMensaje}
                value={solicitud.descripsion} ></textarea>
            </label>
            <label  className="flexrow wrapordenar">
              <span>Categoria</span>
              <select name="categoria" onChange={onChangeMensaje} className="categoriaorden" value={solicitud.categoria}>
          <option>todos</option>
          <option>Repuestos</option>
          <option>Mascotas</option>
          <option>Maquillaje</option>
          <option>Electrodomesticos</option>
          <option>Tecnologia</option>
          </select>
            </label>

            <label className="flexrow wrapordenar">
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
          <div className="ordenesenorden">
            <div className="paletacomandoproductos">
              <div className="correcionpaletachat">
                <img
                  className="fotousuariouser"
                  alt=""
                  src={miusuario.urlfoto}
                ></img>
                <p className="solicitante">Productos Solicitados</p>
              </div>
              <i className="bx bx-dots-vertical-rounded menuchat"></i>
            </div>

            <div className="ordenarproductossolicitud">
            {(ordenes.length > 0)?
              ordenes.map((producto) =>(
                <Cajasolicitud key={producto.oid} idfoto={producto.idfoto} oid={producto.oid} producto={producto.nombre}  descripsion={producto.descripsion} urlfoto={producto.urlfoto}></Cajasolicitud>
              ))
            : <div className='ceroordenar'><h2>Solicita tu primer producto</h2></div>}
            
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default Ordenar;
