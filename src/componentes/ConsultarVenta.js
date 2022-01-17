import React, {useCallback,useEffect,useState} from "react";
import './ConsultarVenta.scss';
import CircularProgress from "./CircularProgress";
import { fetchCToken } from '../helpers/fetchmetod';
import Footer from "./Footer";
import { useParams } from 'react-router-dom'

const ConsultarVenta = () => {
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
        { (carga)? <CircularProgress/>: <> 
            <div className="containerfooterventa">
        <div className="containerventas">
            <div className={(state.status ==="approved")?" estaodproducto aprobado":(state.status ==="pending")?" estaodproducto pendiente":(state.status ==="reject")?"rechazada":"no encontrado"}>{(state.status ==="approved")?"Pagado":(state.status ==="pending")?"Pendiente":(state.status ==="reject")?"Pago rechazado":"no encontrado"}</div>
            <div className="Precioproducto">$ {parseInt(state.transaction_amount/1.15+1)}</div>
         {
            (state.additional_info?.items[0].picture_url)?<img id="fotoOver" className='fotoproductocomprado' src={state.additional_info?.items[0].picture_url} alt='producto'/>
            :<img id="fotoOver" className='fotoproductocomprado' src="https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg" alt='producto'/>
         }
        <h1>{state.additional_info?.items[0].title}</h1>
        <p className="parrafocompra">{state.additional_info?.items[0].description}</p>
        <ul>
        <li className="titulocardconsulta">Datos del Comprador</li>
        <li className="parrafocardconsulta"> <b>Vendedor:</b> {state.payer?.first_name}</li>
        <li className="parrafocardconsulta"> <b>Identificacion:</b> {state.payer?.identification.number}</li>
        <li className="parrafocardconsulta"> <b>Email:</b> {state.payer?.email}</li>
        <hr></hr>
        <li className="titulocardconsulta">Lugar de Entrega</li>
        <li className="parrafocardconsulta"> <b>Departamento:</b> {state.additional_info?.shipments.receiver_address.state_name}</li>
        <li className="parrafocardconsulta"> <b>Ciudad de Entrega: </b>{state.additional_info?.shipments.receiver_address.city_name}</li>
        <li className="parrafocardconsulta"> <b>Codigo Postal:</b> {state.additional_info?.shipments.receiver_address.zip_code}</li>
        <li className="parrafocardconsulta"><b> Direccion:</b> {state.additional_info?.shipments.receiver_address.street_number}</li>
        <li className="parrafocardconsulta"><b> Barrio:</b> {state.additional_info?.shipments.receiver_address.street_name}</li>
        <li className="parrafocardconsulta"> <b>Cantidad: </b>{state.additional_info?.items[0].quantity}</li>
        </ul>
        </div>
        <Footer/>
        </div>
       </>}
       </>
    )
}

export default ConsultarVenta;