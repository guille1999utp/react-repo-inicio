import React, { useEffect, useCallback, useState,useContext} from 'react'
import { Link } from "react-router-dom";
import Cajasolicitudes from "./Cajasolicitudes";
import './Solicitudes.scss';
import { useDispatch,useSelector } from 'react-redux';
import { fetchCToken } from "../helpers/fetchmetod";
import { cargarsolicitudes } from "../redux/actions/ordenar";
import Footer from "./Footer";
import CircularProgress from "./CircularProgress";
import { recibirsolicitud,categoriaseleccionada} from '../redux/actions/ordenar';
import { SocketContext } from '../redux/context/contextchat'

const Solicitudes = ({history}) =>{
  const state = useSelector(state => state.infoUsuario);
  const {socket} = useContext(SocketContext);
  const [Categoria, setCategoria] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [carga, setCarga] = useState(true);
  const dispatch = useDispatch();
  const solicitudes = useSelector(solicitudes => solicitudes.ordenar.solicitudes);
  const solicitud = useCallback(
    async() => {
      console.log('entro')
      const solicitude = await fetchCToken('solicitudes',{Categoria},'POST',cantidad);
      setCarga(false);
      dispatch(cargarsolicitudes(solicitude.solicitudes))
      setCategoria(state.Categoria);
    }, [dispatch,cantidad,Categoria]
  )
  useEffect( ()=>{
    solicitud()
   },[solicitud,cantidad])

   const cantidadmas =() =>{
    setCantidad(cantidad+1)
   }

console.log(Categoria);
   useEffect(() => {
    socket.on( 'ordenagregarsolicitud', (orden) => {
      console.log(orden)
        const desicion = orden.categoria === Categoria;
        console.log(orden.categoria,Categoria)
        if(desicion){
          if(orden.de !== state.uid){
            dispatch(recibirsolicitud(orden));
        }
        }
    })
}, [ socket ]);
  

   const onChangeMensaje = (e) => {
    setCantidad(1)
    dispatch(categoriaseleccionada(e.target.value));
    socket.emit('solicitud',{
      Categoria:e.target.value
      })  
      socket.on('solicitud',(Categoria)=>{
        setCategoria(Categoria)
      })  
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
          <select name="Categoria" className='selectsolicitud' onChange={onChangeMensaje} value={Categoria}>
          <option value={'todos'}>todos</option>
          <option value={'Repuestos'}>Repuestos</option>
          <option value={'Mascotas'}>Mascotas</option>
          <option value={'Farmacias'}>Farmacias</option>
          <option value={'Estanquillos'}>Estanquillos</option>
          </select>
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
      <button className='comprarbotoncarrito' onClick={cantidadmas}>Ver mas</button>
      : null}
      </div>
      <Footer/>

  </div>
  </>}
        </>
    )
}
export default Solicitudes;