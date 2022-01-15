import './Pagepagos.scss'
import React, {useState,useCallback,useEffect} from 'react'
import { fetchCToken } from '../helpers/fetchmetod';

const Pagepagos = ({location}) => {
    const [carga, setCarga] = useState('');

    const MostaResultados = useCallback(
      async() => {
          const res = await fetchCToken(`feedback/${location.search}`);
          console.log(res);
          if (res.ok) {
             setCarga(res)
            }
      }, [],
    )
    useEffect( ()=>{
        MostaResultados()
     },[MostaResultados])
  
   
    return (
        <div className={ (carga?.Status === 'approved')?"containerresultadocompra aprobado":(carga?.Status === "pending")? "containerresultadocompra pendiente":"containerresultadocompra rechazado"}>
            <h1>{(carga?.Status === 'approved')?"Compra Aprobada":(carga?.Status === "pending")? "Compra Pendiente por Pagar":"Error a la Hora de Pagar"}</h1>
            <h2>Codigo de Pago: {carga.Payment}</h2>
            <h2>Orden Mercantil: {carga.MerchantOrder}</h2>
            <h2>Tipo de Pago : {carga.Typepago}</h2>

        </div>
    )
}
export default Pagepagos;