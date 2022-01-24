import React, { useEffect, useCallback} from 'react';
import { fetchCToken } from "../helpers/fetchmetod";
const MercadoPagoPropio = ( ) =>{
  const FORM_ID = 'payment-form';
  const obtenerpreference = useCallback(
    async() => {
        const res = await fetchCToken(`pagar`);
        console.log(res);
        if (res.global) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src ='https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js';
            script.setAttribute('data-preference-id', res.global);
            const form = document.getElementById(FORM_ID);
            form.appendChild(script);
          } }
          )
          useEffect( ()=>{
            obtenerpreference()
           },[obtenerpreference])
        
  return (
    <form className='buttondineropagar' id={FORM_ID} method="GET" />
  );
}

export default MercadoPagoPropio;