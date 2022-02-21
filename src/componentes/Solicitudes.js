import React, { useEffect, useCallback, useState,useContext} from 'react'
import { Link } from "react-router-dom";
import Cajasolicitudes from "./Cajasolicitudes";
import './Solicitudes.scss';
import { useDispatch,useSelector } from 'react-redux';
import { fetchCToken } from "../helpers/fetchmetod";
import { cargarsolicitudes,categoriaseleccionada } from "../redux/actions/ordenar";
import Footer from "./Footer";
import CircularProgress from "./CircularProgress";
import { SocketContext } from '../redux/context/contextchat'

const Solicitudes = ({history}) =>{
  const [foto, setFoto] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state.infoUsuario);
  const {socket} = useContext(SocketContext);
  const [cantidad, setCantidad] = useState(1);
  const [carga, setCarga] = useState(true);
  const solicitudes = useSelector(solicitudes => solicitudes.ordenar);
  const solicitud = useCallback(
    async() => {
      console.log('entro')
      const solicitude = await fetchCToken('solicitudes',{Categoria: solicitudes.categoria},'POST',cantidad);
      if(!solicitude.ok){
      return ;
      }
      setCarga(false);
      dispatch(cargarsolicitudes(solicitude.solicitudes))
      dispatch(categoriaseleccionada(state.categoria));

    }, [dispatch,cantidad]
  )
  useEffect( ()=>{
    solicitud()
   },[solicitud,cantidad])

   const cantidadmas =() =>{
    setCantidad(cantidad+1)
   }

   useEffect(()=>{
     const hola = async()=>{
       const solicitude = await fetchCToken('solicitudes',{Categoria: solicitudes.categoria},'POST',cantidad);
       dispatch(cargarsolicitudes(solicitude.solicitudes))
     }
     hola()
  },[solicitudes.categoria,dispatch,cantidad])

   useEffect(() => {
    socket?.on( 'ordenagregarsolicitud', async(Categoria) => {
      console.log('entro soliocitudes')
      console.log(Categoria)
      const solicitude = await fetchCToken('solicitudes',{Categoria: Categoria},'POST',cantidad);
      console.log(solicitude)

      dispatch(cargarsolicitudes(solicitude.solicitudes))
    })
}, [ socket , dispatch,state.uid,solicitudes.categoria]);


const onChangeMensaje = (e) => {
  setCantidad(1)
  dispatch(categoriaseleccionada(e.target.value));
  socket.emit('solicitud',{
    Categoria:e.target.value
    })  
};

const onClick = () =>{
    setFoto('');
}


    return (
        <>

     {(carga)? <CircularProgress/> : <>
      {(foto.length > 0)?<div className='mostrarimagenfondo' >
        <img src={foto}
            alt="img"></img>
        <i className='bx bx-x' onClick={onClick}></i>
      </div>:null}


    <div className="fondocarrito">
    <div className="conteinerproductoseleccionado">
    <div className="flexro">
          <p className="botoncarrito">
          Solicitudes ({solicitudes.solicitudes.length})
          </p>
          <div className="flexro">
          <p className="botoncarrito">
           Categorias
          </p>
          <select name="categoria" className='selectsolicitud' onChange={onChangeMensaje} value={solicitudes.categoria}>
          <option value={'Repuestos_Motos'}>Repuestos Motos</option>
          <option value={'Repuestos_Carros'}>Repuestos Carros</option>
          <option value={'Ferreterias'}>Ferreterias | Electricos</option>
          <option value={'Naturistas'}>Tiendas Naturistas</option>
          <option value={'Veterinaria_Mascotas'}>Veterinaria | Productos</option>
          <option value={'Droguerias'}>Droguerias</option>
          <option value={'Estanquillos'}>Estanquillos</option>
          </select>
          </div>
    </div>
        <hr></hr>
      {solicitudes.solicitudes.map((solicitud,count) =>(
      <Cajasolicitudes foto={foto} setFoto={setFoto} key={solicitud.oid + count} productorden={solicitud.oid} history={history} de={solicitud.de} producto={solicitud.nombre} descripsion={solicitud.descripsion} urlfoto={solicitud.urlfoto}></Cajasolicitudes>
      ))}
      {(solicitudes.solicitudes.length === 0)?
      <>
      <div className='comprarbotoncarrito'>No Hay Productos Solicitados <Link to="/inicio" className="botoncarrito">
          Ver productos 
        </Link></div>
      
      </>
      : null}
      {(solicitudes.solicitudes.length > 0)?
      <button type='submit'className='comprarbotoncarrito' onClick={cantidadmas}>Ver mas</button>
      : null}
      </div>
      <Footer/>

  </div>
  </>}
        </>
    )
}
export default Solicitudes;