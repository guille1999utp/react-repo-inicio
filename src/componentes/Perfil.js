import './Perfil.scss';
import Footer from "./Footer";
import React, {useState,useCallback,useEffect} from 'react'
import { fetchstoken } from '../helpers/fetchmetod';
import { useParams } from 'react-router-dom'
function Perfil() {
    let { de } = useParams()

  const [state, setState] = useState({
Cordenadas: '',
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
Representantelegal:'',
verificado:'',
urlfoto: '',
nombre:''
    });
    const [fotos, setfotos] = useState([]);
    const cargarUsuario = useCallback(
      async() => {
        const infousuario = await fetchstoken( `perfil/${de}`);
        if(infousuario.ok){
            console.log(infousuario)
          setState({...infousuario.infoadicional,verificado:infousuario.verificado,fotoperfil : infousuario.urlfoto, nombre:infousuario.nombre});
          setfotos(infousuario.fotosdescripsion);
          return  true;
        }else{
          return  false;
        }
      }, [setState,setfotos,de],
    )
      useEffect(() => {
        cargarUsuario();
      }, [cargarUsuario])

  return (
    <>
    <div className='estructuraconfig'>
    
      <div className='imagenavatarbusqueda'>
       <img src={(state.fotoperfil !== 'https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp')?state.fotoperfil:'https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp'} alt='imageavatar'></img>
      </div>
      <h1>{state.nombre} {(state.verificado === true)?<i className='bx bxs-been-here' ></i>:null}</h1>
      <div className='containerinfousuario'>
      <div className='detallesusuario'>
         <h2>Detalles</h2>
         <ul>
           <li><b><i className='bx bx-home'></i> Direccion: </b>  {state.Direccion}</li>
           <li><b><i className='bx bx-buildings'></i> Barrio: </b> {state.Barrio}</li>
           <li><b><i className='bx bx-barcode' ></i> Codigo Nit: </b> {state.Nit}</li>
           <li><b><i className='bx bx-car'></i> Domicilio Privado: </b> {state.Privado} </li>
           <li><b><i className='bx bx-mobile-alt' ></i> celular: </b> {state.celular}</li>
           <li><b><i className='bx bx-phone' ></i> Telefono: </b> {state.telefono} </li>
           <li><b><i className='bx bxs-map' ></i> Ciudades Con Servicio: </b> {state.Servicio}</li>
           <li><b><i className='bx bx-world' ></i> Coordenadas: </b> <a href={state.Cordenadas}>buscame</a></li>
         </ul>
      </div>
      <div className='detallesusuario'>
         <h2>Informacion Adicional</h2>
         <ul>
           <li><b><i className='bx bx-time-five' ></i> Horarios Atencion: </b>{ state.Atencion }</li>
           <li><b><i className='bx bxs-category' ></i> Categoria de Venta: </b> {state.Venta}</li>
           <li><b><i className='bx bx-timer' ></i> Funcionamiento: </b> {state.Funcionamiento +' años'}</li>
           <li><b><i className='bx bxs-user-pin'></i> Gerente: </b>{ state.Gerente}</li>
           <li><b><i className='bx bx-id-card'></i> Cedula Gerente: </b> {state.cedulaGerente}</li>
           <li><b><i className='bx bxs-user-check' ></i> Representante Legal: </b> {state.Representantelegal}</li>
         </ul>
      </div>
      <div className='fotoslocalesbusqueda'> 
      <h2>Fotos del local:</h2>
      { fotos.map((fotolocal)=>(
             <img key={fotolocal.uidfoto} src={fotolocal.urlfoto} alt='imagelocal'></img>
      )
) }
      </div>
      </div>

      <Footer/>
    </div>
  
    
    </>
  );
}

export default Perfil;