import React, { useEffect, useCallback, useState,useContext} from 'react'
import { Link } from "react-router-dom";
import Cajasolicitudes from "./Cajasolicitudes";
import './Solicitudes.scss';
import { useDispatch,useSelector } from 'react-redux';
import { fetchCToken } from "../helpers/fetchmetod";
import { cargarsolicitudes } from "../redux/actions/ordenar";
import Footer from "./Footer";
import CircularProgress from "./CircularProgress";
import { recibirsolicitud} from '../redux/actions/ordenar';
import { SocketContext } from '../redux/context/contextchat'

const Solicitudes = ({history}) =>{
  const dispatch = useDispatch();
  const state = useSelector(state => state.infoUsuario.uid);
  const {socket} = useContext(SocketContext);
  const [Categoria, setCategoria] = useState({Categoria:'todos'});
  const [cantidad, setCantidad] = useState(1);
  const [carga, setCarga] = useState(true);
  const solicitudes = useSelector(solicitudes => solicitudes.ordenar.solicitudes);
  const solicitud = useCallback(
    async() => {
      console.log('entro')
      const solicitude = await fetchCToken('solicitudes',Categoria,'POST',cantidad);
      if(!solicitude.ok){
      return ;
      }
      setCarga(false);
      dispatch(cargarsolicitudes(solicitude.solicitudes))
    }, [dispatch,cantidad]
  )
  useEffect( ()=>{
    solicitud()
   },[solicitud,cantidad])

   const cantidadmas =() =>{
    setCantidad(cantidad+1)
   }

   console.log(Categoria)
   useEffect(() => {
    socket?.on( 'ordenagregarsolicitud', (orden) => {
        const desicion = orden.categoria === Categoria.Categoria;
        console.log(desicion)
        console.log(orden.categoria, Categoria.Categoria)
        if(desicion){
          if(orden.de !== state){
            dispatch(recibirsolicitud(orden));
        }
        }
    })
}, [ socket , dispatch,state,Categoria]);

const onChangeMensaje = (e) => {
  setCantidad(1)
  setCategoria({Categoria:e.target.value});
};

const onSubmit = async(e)=>{
  e.preventDefault();
  try {
    const solicitude = await fetchCToken('solicitudes',Categoria,'POST',cantidad);
        if(!solicitude.ok){
        return ;
        }
        setCarga(false);
        dispatch(cargarsolicitudes(solicitude.solicitudes))
  } catch (error) {
    console.log(error);
  }
}
    return (
        <>
     {(carga)? <CircularProgress/> : <>
    <div className="fondocarrito">
    <div className="conteinerproductoseleccionado">
    <div className="flexro">
          <p className="botoncarrito">
          Solicitudes ({solicitudes.length})
          </p>
          <div className="flexro">
          <p className="botoncarrito">
           Categorias
          </p>
          <form onSubmit={onSubmit}>
            <label>
          <select name="categoria" className='selectsolicitud' onChange={onChangeMensaje} value={Categoria.Categoria}>
          <option value={'todos'}>todos</option>
          <option value={'Repuestos'}>Repuestos</option>
          <option value={'Mascotas'}>Mascotas</option>
          <option value={'Farmacias'}>Farmacias</option>
          <option value={'Estanquillos'}>Estanquillos</option>
          </select>
          </label>
          </form>
          </div>
    </div>
        <hr></hr>
      {solicitudes.map((solicitud,count) =>(
      <Cajasolicitudes key={solicitud.oid + count} productorden={solicitud.oid} history={history} de={solicitud.de} producto={solicitud.nombre} descripsion={solicitud.descripsion} urlfoto={solicitud.urlfoto}></Cajasolicitudes>
      ))}
      {(solicitudes.length === 0)?
      <>
      <div className='comprarbotoncarrito'>No Hay Productos Solicitados <Link to="/inicio" className="botoncarrito">
          Ver productos 
        </Link></div>
      
      </>
      : null}
      {(solicitudes.length > 0)?
      <form onSubmit={onSubmit}>
      <button type='submit'className='comprarbotoncarrito' onClick={cantidadmas}>Ver mas</button>
      </form>
      : null}
      </div>
      <Footer/>

  </div>
  </>}
        </>
    )
}
export default Solicitudes;