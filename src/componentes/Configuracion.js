import './Configuracion.scss';
import Footer from "./Footer";
import { UploadPhoto } from "../helpers/cloudinaryUpload";
import React, {useState, useContext} from 'react'
import { SocketContext } from '../redux/context/contextchat'
import { useSelector} from 'react-redux';
import Swal from 'sweetalert2'
import { fetchCToken } from '../helpers/fetchmetod';


function Configuracion() {
  const miusuario =  useSelector(yo => yo.infoUsuario);
  const {socket} = useContext(SocketContext);
  const [guardarboton, setguardar] = useState(false);

  const [state, setState] = useState({
Direccion:'',
Barrio:'',
Nit:'',
Privado:'',
celular:'',
telefono:'',
Servicio:'',
Atencion:'',
Venta:'',
Funcionamiento:'',
Gerente:'',
cedulaGerente:'',
Representantelegal:''
    });

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

  const onChangeMensaje = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
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
  const guardar = async() =>{
    if (guardarboton === true) {
        const resmodi = await fetchCToken('perfil',state,'POST', null);
        if(resmodi.ok){
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Informacion Guardada'
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: resmodi.msg,
          })
        }
      setguardar(!guardarboton)
    }  
    setguardar(!guardarboton)
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
      <form className='containerinfousuario'>
        <button type='button'  onClick={guardar}>{ (guardarboton === false) ? <i className='bx bxs-pencil'></i>: <i className='bx bx-save'></i>}</button>
      <div className='detallesusuario'>
         <h2>Detalles</h2>
         <ul>
           <li><b><i className='bx bx-home'></i> Direccion:</b> { (guardarboton === false) ? ' carrera 5 #6-54': <input type='text' placeholder='Direccion'  name='Direccion'  onChange={onChangeMensaje}></input>}</li>
           <li><b><i className='bx bx-buildings'></i> Barrio:</b>{ (guardarboton === false) ? ' alamos': <input type='text' placeholder='Barrio' name='Barrio'  onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bx-barcode' ></i> Codigo Nit:</b>{ (guardarboton === false) ? ' 654654152156': <input type='number' placeholder='Codigo Nit' name='Nit'  onChange={onChangeMensaje}></input>}</li>
           <li><b><i className='bx bx-car'></i> Domicilio Privado:</b>{ (guardarboton === false) ? ' Si': <input type='text' placeholder='Domicilio Privado' name='Privado'  onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bx-mobile-alt' ></i> celular:</b>{ (guardarboton === false) ? ' 3186975663': <input type='number' placeholder='celular'  name='celular' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bx-phone' ></i> Telefono:</b>{ (guardarboton === false) ? ' 2107107': <input type='number' placeholder='Telefono' name='telefono' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bxs-map' ></i> Ciudades Con Servicio:</b>{ (guardarboton === false) ? ' cartago, valle del cauca': <input type='number'  name='Servicio' placeholder='Ciudades Con Servicio' onChange={onChangeMensaje}></input>} </li>
         </ul>
      </div>
      <div className='detallesusuario'>
         <h2>Informacion Adicional</h2>
         <ul>
           <li><b><i className='bx bx-time-five' ></i> Horarios Atencion:</b>{ (guardarboton === false) ? ' 8am - 6pm': <input type='time' placeholder='Horarios Atencion'  name='Atencion' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bxs-category' ></i> Categoria de Venta:</b>{ (guardarboton === false) ? ' Herramientas': <input type='text' placeholder='Categoria de Venta' name='Venta'  onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bx-timer' ></i> Funcionamiento:</b>{ (guardarboton === false) ? ' 5 años': <input type='number' placeholder='Funcionamiento'  name='Funcionamiento' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bxs-user-pin'></i> Gerente:</b>{ (guardarboton === false) ? ' Guillermo Peñaranda Hernandez': <input type='text' placeholder='Gerente'  name='Gerente' onChange={onChangeMensaje}></input>}</li>
           <li><b><i className='bx bx-id-card'></i> Cedula Gerente:</b>{ (guardarboton === false) ? ' 1193213491': <input type='number' placeholder='Cedula Gerente'  name='cedulaGerente' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bxs-user-check' ></i> Representante Legal:</b>{ (guardarboton === false) ? ' Yuliana Peñaranda Hernandez': <input type='text' name='Representantelegal'  placeholder='Representante Legal' onChange={onChangeMensaje}></input>} </li>
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
      </form>

      <Footer/>
    </div>
  
    
    </>
  );
}

export default Configuracion;
