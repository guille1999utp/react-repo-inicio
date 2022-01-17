import './Pagepagos.scss'
import React, {useState,useCallback,useEffect,useContext} from 'react'
import { fetchCToken } from '../helpers/fetchmetod';
import { SocketContext } from '../redux/context/contextchat'
import { useParams } from 'react-router-dom'

const Pagepagos = ({location}) => {
    const {socket} = useContext(SocketContext);
    let { id } = useParams();
  
      
    const [carga, setCarga] = useState('');

    const MostaResultados = useCallback(
      async() => {
          const res = await fetchCToken(`feedback/${location.search}`);
          if (res.ok) {
              setCarga(res)
            const verificacion = await fetchCToken(`consultarpago/${res.Payment}`);
              console.log(verificacion)
           if(!verificacion?.ok){
               return true
           }
           if(verificacion?.ok){
              setTimeout(()=> socket?.emit('anadircompra',{
                codigo:res.Payment,
                id,
                status:res.Status
                }), 
                3000);
            
        }
            
        }
      }, [location.search,socket,id],
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