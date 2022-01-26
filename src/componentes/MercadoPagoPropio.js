import React, { useEffect, useCallback} from 'react';
import { fetchCToken } from "../helpers/fetchmetod";
import { useSelector} from 'react-redux';

const MercadoPagoPropio = ( ) =>{
  const miusuario =  useSelector(yo => yo.infoUsuario.uid);
  const FORM_ID = 'payment-form';
  const obtenerpreference = useCallback(
    async() => {
        const res = await fetchCToken(`pagar`);
        if (res.global) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src ='https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js';
            script.setAttribute('data-preference-id', res.global);
            const form = document.getElementById(FORM_ID);
            form.appendChild(script);
          } },[miusuario]
          )
          useEffect( ()=>{
            obtenerpreference()
           },[obtenerpreference])
        
  return (
    <form className='buttondineropagar' id={FORM_ID} method="GET" />
  );
}

export default MercadoPagoPropio;