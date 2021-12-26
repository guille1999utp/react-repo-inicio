import './Configuracion.scss';
import Footer from "./Footer";
import { UploadPhoto } from "../helpers/cloudinaryUpload";
import React, {useState, useContext} from 'react'
import { SocketContext } from '../redux/context/contextchat'
import { useSelector} from 'react-redux';
import Swal from 'sweetalert2'


function Configuracion() {
  const miusuario =  useSelector(yo => yo.infoUsuario);
  const {socket} = useContext(SocketContext);
  const [urlmas, setUrl] = useState({
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
    public_id: 0
  });

  const onSubmit = async(e) => {
    e.preventDefault();
  try{
    const url = (urlmas.secure_url !== "https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp")? await UploadPhoto(urlmas):urlmas;
    socket.emit('fotouser',{
      url,
      uid: miusuario.uid
      })
  setUrl(
    {
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
    public_id: 0
}
);
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Foto Actualizada',
  showConfirmButton: false,
  timer: 1500
})
}catch(err){
  console.log(err)
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Sucedio un Error',
    showConfirmButton: false,
    timer: 1500
  })
}

  };


  const onFilesave  = async(e) =>{
    const file = e.target.files[0];
    setUrl(file);
  }

  const onFile  = () =>{
    document.querySelector('#fileperfil').click();
  }

  const reset  = () =>{
  setUrl({
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
    public_id: 0
  })
  }

  return (
    <>
    <div className='estructuraconfig'>
    <form onSubmit={onSubmit}>
      <div className='imageavatar' onClick={onFile}>
       <img src={(miusuario.urlfoto !== 'https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp')?miusuario.urlfoto:'https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp'} alt='imageavatar'></img>
      </div>
      <input type="file" id="fileperfil" aria-label="File browser example" onChange={onFilesave} ></input>
      <div className='rowbotonperfil'>
       {(urlmas.public_id !== 0)?<button type='submit' className='botonguardarperfil'>Guardar</button>: null}
       {(urlmas.public_id !== 0)?<button type='button' className='botonguardarperfil' onClick={reset}>Cancelar</button>: null}
       </div>
       </form>
      <h1>Guillermo Peñaranda Hernandez</h1>
      <div className='containerinfousuario'>
      <div className='detallesusuario'>
         <h2>Detalles</h2>
         <ul>
           <li><b><i className='bx bx-home'></i> Direccion:</b> carrera 5 #6-54</li>
           <li><b><i className='bx bx-buildings'></i> Barrio:</b> alamos</li>
           <li><b><i className='bx bx-barcode' ></i> Codigo Nit:</b> 654654152156</li>
           <li><b><i className='bx bx-car'></i> Domicilio Privado:</b> Si</li>
           <li><b><i className='bx bx-mobile-alt' ></i> celular:</b> 3186975663</li>
           <li><b><i className='bx bx-phone' ></i> Telefono:</b> 2107107</li>
           <li><b><i className='bx bxs-map' ></i> Ciudades Con Servicio:</b> cartago, valle del cauca</li>
         </ul>
      </div>
      <div className='detallesusuario'>
         <h2>Informacion Adicional</h2>
         <ul>
           <li><b><i className='bx bx-time-five' ></i> Horarios Atencion:</b> 8am - 6pm</li>
           <li><b><i className='bx bxs-category' ></i> Categoria de Venta:</b> Herramientas</li>
           <li><b><i className='bx bx-timer' ></i> Funcionamiento:</b> 5 años</li>
           <li><b><i className='bx bxs-user-pin'></i> Gerente:</b> Guillermo Peñaranda Hernandez</li>
           <li><b><i className='bx bx-id-card'></i> Cedula Gerente:</b> 1193213491</li>
           <li><b><i className='bx bxs-user-check' ></i> Representante Legal:</b> Yuliana Peñaranda Hernandez</li>
         </ul>
      </div>
      <div className='fotoslocales'>
        <img src='https://i.pinimg.com/550x/94/2c/6c/942c6ce1d5875a44b851b12981f32112.jpg' alt='imagelocal'></img>
        <img src='https://propiedadescom.s3.amazonaws.com/files/292x200/boulebar-pena-flor-0-ciudad-del-sol-queretaro-queretaro-20362346-foto-01.jpg' alt='imagelocal'></img>
        <img src='https://www.oikos.com.co/constructora/images/proyectos/Comerciales-Industriales/Calera-CC/calera-cc-local.jpg' alt='imagelocal'></img>
        <img src='https://imganuncios.mitula.net/se_vende_casa_comercial_con_locales_5130002636567765048.jpg' alt='imagelocal'></img>
      </div>
      <div className='fotolocalizacion'>
        <img src='https://res.cloudinary.com/dmgfep69f/image/upload/v1640455393/yauzhlah5et8sma8yu3z.png' alt='imagelocal'></img>
      </div>
      </div>

      <Footer/>
    </div>
  
    
    </>
  );
}

export default Configuracion;
