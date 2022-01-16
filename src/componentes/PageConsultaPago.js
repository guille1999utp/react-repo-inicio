import React, {useCallback,useEffect,useState} from "react";
import './PageConsultaPago.scss';
import CircularProgress from "./CircularProgress";
import { fetchCToken } from '../helpers/fetchmetod';
import Footer from "./Footer";
import { useParams } from 'react-router-dom'

const PageConsultaPago = () => {
    let { id } = useParams();
  const [state, setstate] = useState([])
  const [carga, setCarga] = useState(true)
  const cargarConsulta = useCallback(
    async() => {
      const producto = await fetchCToken(`consultarpago/${id}`);
      if(producto.ok){
        setstate(producto.res); 
        setCarga(false);
        return  true;
      }else{
        return  false;
      }
    }, [setstate,id],
  )
 console.log(state)
  useEffect(() => {
    cargarConsulta();
  }, [cargarConsulta])
    return (
        <>
        <div className="containerfooterconsulta">
        <div className="containerpagos">
            <div className="estaodproducto">Aprobado</div>
            <div className="Precioproducto">$ {state.transaction_amount}</div>
         {
            (state.additional_info?.items[0].picture_url)?<img id="fotoOver" className='fotoproductocomprado' src={state.additional_info?.items[0].picture_url} alt='producto'/>
            :<img id="fotoOver" className='fotoproductocomprado' src="https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg" alt='producto'/>
         }
        <h1>{state.additional_info?.items[0].title}</h1>
        <p className="parrafocompra">{state.additional_info?.items[0].description}</p>
        <ul>
        <li> <b>Comprador:</b> {state.payer?.first_name}</li>
        <li> <b>Identificacion:</b> {state.payer?.identification.number}</li>
        <li> <b>Email:</b> {state.payer?.email}</li>
        <li> <b>Departamento:</b> {state.additional_info?.shipments.receiver_address.state_name}</li>
        <li> <b>Ciudad de Entrega: </b>{state.additional_info?.shipments.receiver_address.city_name}</li>
        <li> <b>Codigo Postal:</b> {state.additional_info?.shipments.receiver_address.zip_code}</li>
        <li><b> Direccion:</b> {state.additional_info?.shipments.receiver_address.street_number}</li>
        <li><b> Barrio:</b> {state.additional_info?.shipments.receiver_address.street_name}</li>
        <li> <b>Cantidad: </b>{state.additional_info?.items[0].quantity}</li>
        </ul>
        </div>
        <Footer/>
        </div>
        </>
    )
}
export default PageConsultaPago;