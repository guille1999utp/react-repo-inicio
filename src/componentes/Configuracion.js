import './Configuracion.scss';
import Footer from "./Footer";
import { UploadPhoto } from "../helpers/cloudinaryUpload";
import React, {useState, useContext,useCallback,useEffect} from 'react'
import { SocketContext } from '../redux/context/contextchat'
import { useSelector} from 'react-redux';
import Swal from 'sweetalert2'
import { fetchCToken } from '../helpers/fetchmetod';
import { Fotorusuario } from './Fotorusuario';

function Configuracion() {
  const miusuario =  useSelector(yo => yo.infoUsuario);
  const {socket} = useContext(SocketContext);
  const [guardarboton, setguardar] = useState(false);
  const [guardarfoto, setguardarfoto] = useState(false);

  const [fotos, setfotos] = useState([]);
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

    
    const cargarUsuario = useCallback(
      async() => {
        const infousuario = await fetchCToken('perfil');
        console.log(infousuario);
        if(infousuario.ok){
          setState(infousuario.infoadicional);
          setfotos(infousuario.fotosdescripsion);
          return  true;
        }else{
          return  false;
        }
      }, [setState,setfotos],
    )
      useEffect(() => {
        cargarUsuario();
      }, [cargarUsuario])






  const [urlmas, setUrl] = useState({
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
    public_id: 0
  });
  const [urlfotos, setUrlfotos] = useState({
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
  const onFilesavefoto  = async(e) =>{
    const file = e.target.files[0];
    setUrlfotos(file);
  }
  const onFile  = () =>{
    document.querySelector('#fileperfil').click();
  }
  const onFilefoto  = () =>{
    document.querySelector('#filedes').click();
    setguardarfoto(true);
  }
  const reset  = () =>{
  setUrl({
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
    public_id: 0
  })
  }
  const cancelar = () =>{
    setguardar(false);
    setguardarfoto(false);
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
  const guardarfotosync = async() =>{
    console.log(guardarfoto)
    if (guardarfoto === true) {
      try{
        console.log('hola')
      const url = (urlfotos.secure_url !== "https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp")? await UploadPhoto(urlfotos):null;
      if(url === null){
        return
      }
      socket.emit('fotouseradicional',{
        url,
        uid: miusuario.uid
        })
      setUrlfotos(
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
 setguardarfoto(!guardarfoto)
    }  
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
      <input type="file" id="filedes" aria-label="File browser example" onChange={onFilesavefoto} ></input>

        <button type='button'  className='buttonr' onClick={guardar}>{ (guardarboton === false) ? <i className='bx bxs-pencil'></i>: <i className='bx bx-save'></i>}</button>
      {(guardarboton === true || guardarfoto ===true)?<button type='button' className='buttonr buttontop' onClick={cancelar} ><i className='bx bx-x'></i></button>:null}
        <button type='button'  className='buttonr buttonfoto' onClick={guardarfotosync}>{ (guardarfoto === false) ? <i class='bx bxs-camera' onClick={onFilefoto}></i>: <i className='bx bx-save'></i>}</button>
      <div className='detallesusuario'>
         <h2>Detalles</h2>
         <ul>
           <li><b><i className='bx bx-home'></i> Direccion: </b> { (guardarboton === false) ? state.Direccion: <input type='text' placeholder={state.Direccion}  name='Direccion'  onChange={onChangeMensaje}></input>}</li>
           <li><b><i className='bx bx-buildings'></i> Barrio: </b>{ (guardarboton === false) ? state.Barrio: <input type='text' placeholder={state.Barrio} name='Barrio'  onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bx-barcode' ></i> Codigo Nit: </b>{ (guardarboton === false) ? state.Nit: <input type='number' placeholder={state.Nit} name='Nit'  onChange={onChangeMensaje}></input>}</li>
           <li><b><i className='bx bx-car'></i> Domicilio Privado: </b>{ (guardarboton === false) ? state.Privado: <input type='text' placeholder={state.Privado} name='Privado'  onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bx-mobile-alt' ></i> celular: </b>{ (guardarboton === false) ? state.celular: <input type='number' placeholder={state.celular}  name='celular' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bx-phone' ></i> Telefono: </b>{ (guardarboton === false) ? state.telefono: <input type='number' placeholder={state.telefono} name='telefono' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bxs-map' ></i> Ciudades Con Servicio: </b>{ (guardarboton === false) ? state.Servicio: <input type='number' name='Servicio' placeholder={state.Servicio} onChange={onChangeMensaje}></input>} </li>
         </ul>
      </div>
      <div className='detallesusuario'>
         <h2>Informacion Adicional</h2>
         <ul>
           <li><b><i className='bx bx-time-five' ></i> Horarios Atencion: </b>{ (guardarboton === false) ? state.Atencion: <input type='time' placeholder={state.Atencion} name='Atencion' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bxs-category' ></i> Categoria de Venta: </b>{ (guardarboton === false) ? state.Venta: <input type='text' placeholder={state.Venta} name='Venta'  onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bx-timer' ></i> Funcionamiento: </b>{ (guardarboton === false) ? state.Funcionamiento +' años': <input type='number' placeholder={state.Funcionamiento} name='Funcionamiento' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bxs-user-pin'></i> Gerente: </b>{ (guardarboton === false) ? state.Gerente: <input type='text' name='Gerente'  placeholder={state.Gerente} onChange={onChangeMensaje}></input>}</li>
           <li><b><i className='bx bx-id-card'></i> Cedula Gerente: </b>{ (guardarboton === false) ? state.cedulaGerente: <input type='number' placeholder={state.cedulaGerente}  name='cedulaGerente' onChange={onChangeMensaje}></input>} </li>
           <li><b><i className='bx bxs-user-check' ></i> Representante Legal: </b>{ (guardarboton === false) ? state.Representantelegal: <input type='text' name='Representantelegal'  placeholder={state.Representantelegal} onChange={onChangeMensaje}></input>} </li>
         </ul>
      </div>
      <div className='fotoslocales'> 

      { fotos.map((fotolocal)=>(
                <Fotorusuario urlfoto={fotolocal.urlfoto} uidfoto={fotolocal.uidfoto}></Fotorusuario>
      )
) }
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
