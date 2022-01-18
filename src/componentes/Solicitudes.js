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

export default function Solicitudes({history}) {
  const state = useSelector(state => state.infoUsuario.uid);
  const {socket} = useContext(SocketContext);
  const [carga, setCarga] = useState(true);
  const [cantidad, setCantidad] = useState(1);
  const [Categoria, setCategoria] = useState({Categoria:'todos'});
  const dispatch = useDispatch();
  const solicitudes = useSelector(solicitudes => solicitudes.ordenar.solicitudes);
  const solicitud = useCallback(
    async() => {
      const solicitude = await fetchCToken('solicitudes',Categoria,'POST',cantidad);
      if(!solicitude.ok){
      return ;
      }
      setCarga(false);
      dispatch(cargarsolicitudes(solicitude.solicitudes))
    }, [dispatch,cantidad,Categoria],
  )
  useEffect( ()=>{
    solicitud()
   },[solicitud,cantidad])

   const cantidadmas =() =>{
    setCantidad(cantidad+1)
   }


   useEffect(() => {
    socket?.on( 'orden', (orden) => {
        const desicion = orden.categoria === Categoria.Categoria;
        if(desicion){
          if(orden.de !== state){
            console.log(desicion)
            dispatch(recibirsolicitud(orden));
        }
        }
    })
}, [ socket , dispatch, state,Categoria]);
  

   const onChangeMensaje = (e) => {
    setCantidad(1)
    setCategoria({Categoria:e.target.value});
  };
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
          <select name="Categoria" className='selectsolicitud' onChange={onChangeMensaje} value={Categoria.Categoria}>
          <option>todos</option>
          <option>Repuestos</option>
          <option>Mascotas</option>
          <option>Maquillaje</option>
          <option>Electrodomesticos</option>
          <option>Tecnologia</option>
          </select>
          </div>
    </div>
        <hr></hr>
      {solicitudes.map((solicitud) =>(
      <Cajasolicitudes key={solicitud.oid} history={history} de={solicitud.de} producto={solicitud.nombre} descripsion={solicitud.descripsion} urlfoto={solicitud.urlfoto}></Cajasolicitudes>
      ))}
      {(solicitudes.length === 0)?
      <>
      <div className='comprarbotoncarrito'>No Hay Productos Solicitados <Link to="/inicio" className="botoncarrito">
          Ver productos 
        </Link></div>
      
      </>
      : null}
      {(solicitudes.length > 0)?
      <button className='comprarbotoncarrito' onClick={cantidadmas}>Ver mas</button>
      : null}
      </div>
      <Footer/>

  </div>
  </>}
        </>
    )
}
