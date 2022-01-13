import React, { useEffect, useCallback, useState} from 'react'
import { Link } from "react-router-dom";
import Cajasolicitudes from "./Cajasolicitudes";
import './Solicitudes.scss';
import { useDispatch,useSelector } from 'react-redux';
import { fetchCToken } from "../helpers/fetchmetod";
import { cargarsolicitudes } from "../redux/actions/ordenar";
import Footer from "./Footer";
import CircularProgress from "./CircularProgress";

export default function Solicitudes({history}) {
  const [carga, setCarga] = useState(true);

  const dispatch = useDispatch();
  const solicitudes = useSelector(solicitudes => solicitudes.ordenar.solicitudes);
  const solicitud = useCallback(
    async() => {
      const solicitude = await fetchCToken('solicitudes',null,'GET',1);
      if(!solicitude.ok){
      return ;
      }
      setCarga(false);
      dispatch(cargarsolicitudes(solicitude.solicitudes))
    }, [dispatch],
  )
  useEffect( ()=>{
    solicitud()
   },[solicitud])

      return (
        <>
     {(carga)? <CircularProgress/> : <>
    <div className="fondocarrito">
    <div className="conteinerproductoseleccionado">
    <div className="flexro">
          <p className="botoncarrito">
            Ultimas Solicitudes ({solicitudes.length})
          </p>
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
      <button className='comprarbotoncarrito'>Ver mas</button>
      : null}
      </div>
      <Footer/>

  </div>
  </>}
        </>
    )
}
