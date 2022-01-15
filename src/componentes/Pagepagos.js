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
            const verificacion = await fetch(`https://api.mercadopago.com/v1/payments/${res.Payment}/?access_token=TEST-5055770355930459-011316-ccaea0a91c4691f54f9b459f1e29715e-1056242334`,{
                method: "GET"
              });
           if(verificacion?.status === 404){
               return true
           }
           if(verificacion?.ok){
               console.log('emtrp');
              setTimeout(()=> socket?.emit('anadircompra',{
                codigo:res.Payment,
                id
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