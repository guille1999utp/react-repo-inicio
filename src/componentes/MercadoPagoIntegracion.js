import React, { useEffect, useCallback} from 'react';
import { useParams } from "react-router-dom";
import { fetchCToken } from "../helpers/fetchmetod";

const FORM_ID = 'payment-form';

export default function Product( {items }) {
  const { id } = useParams(); // id de producto

  const obtenerpreference = useCallback(
    async() => {
      
        const res = await fetchCToken(`comprar/${id}`, { items }, 'POST');
        console.log(res);
        if (res.global) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src ='https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js';
            script.setAttribute('data-preference-id', res.global);
            const form = document.getElementById(FORM_ID);
            form.appendChild(script);
          }
    }, [id,items],
  )
  useEffect( ()=>{
    obtenerpreference()
   },[obtenerpreference])

 
  return (
    <form id={FORM_ID} method="GET" />
  );
}