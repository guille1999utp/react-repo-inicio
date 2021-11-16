import './Chat.css';
import CajaChat from './CajaChat';
import UsuariosConectados from './UsuariosConectados';
import React, {useState, useEffect} from 'react'

function Chat() {
    let mensajesArray = [
        {
            mensaj: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            fecha: "5 minutos" ,
            enviado: 1,
        },
        {
            mensaj: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            fecha: "5 minutos" ,
            enviado: 0
        },
        {
            mensaj: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            fecha: "5 minutos" ,
            enviado: 0
        },
        {
            mensaj: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            fecha: "5 minutos" ,
            enviado: 1
        }
    ]
 
   
    const [mensajes, setMensajes] = useState(mensajesArray)
const [mensaje, setmensaje] = useState({
    mensaj: " ",
    fecha: "5 minutos" ,
    enviado: 1
})

useEffect(()=>{
    const chatscrollabajo = document.querySelector('.finalchatscroll');
    chatscrollabajo.scrollIntoView({
        behavior: 'smooth'
    })
 })


        const onSubmit = (e) =>{
            e.preventDefault()
                setMensajes([...mensajes, mensaje])
                setmensaje({
                    mensaj: "",
                    fecha: "5 minutos" ,
                    enviado: 1
                })
                console.log(mensajes)
            
        }


    const  onChangeMensaje =(e)=>{
        const {name, value} = e.target;
        setmensaje({
      ...mensaje, [name] : value
      });
           }

    
    const usuariosconectados = [
        {
            name: "Nicolas giraldo",
            horault: "10:40" ,
            ultmensaje: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            userid: 1
        },
        {
            name: "Santiago Correa",
            horault: "10:40" ,
            ultmensaje: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje " ,
            userid: 2
        },
        {
            name: "Andres felipe mendoza",
            horault: "10:40" ,
            ultmensaje: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            userid: 3
        },
        {
            name: "Estefano hernandez",
            horault: "10:40" ,
            ultmensaje: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            userid: 4
        },
        {
            name: "Santiago martinez",
            horault: "10:40" ,
            ultmensaje: "erie jeje ",
            userid: 5
        },
    ]
  return (
    <>
    <div className='fondonegrochat'></div>
    <div className='cajachat'>
        <div className='usuariosactivos'>
          <div className='chatperfil'>
          <i className='bx bx-user' ></i>
          <div className='iconoschatfondo'>
          <i className='bx bxs-chat chaticon'></i>
          <i className='bx bx-dots-vertical-rounded menuchat'></i>
          </div>
          </div>
          
          {usuariosconectados.map( conectado => (
              <UsuariosConectados name={conectado.name} ultmensaje={conectado.ultmensaje} horault={conectado.horault}></UsuariosConectados>
          ))}

        </div>
        <div className='mensajesusuarios'>
          <div className='paletacomandochat'>
            <div className='correcionpaletachat'>
            <img className='fotousuariouser' alt='' src='https://www.fondosdepantalla.top/wp-content/uploads/2017/02/Imagenes-de-Planetas-en-4K-fondosdepantalla-5.jpg'>
          </img>
              <p className='nombrechat'>nicolas pinga</p>
          </div>
          <i className='bx bx-dots-vertical-rounded menuchat'></i>
          </div>
          <div className='chatuses'>
        
          { mensajes.map( (e) =>(
          <CajaChat mensaje={e.mensaj} fecha={e.fecha} enviado={e.enviado}></CajaChat>
          ))}
<div className='finalchatscroll'></div>
          </div>
          <form className='paletachat' onSubmit={onSubmit}>
          <i className='bx bx-paperclip'></i>
          <input type='text' className='decorationpaleta' value={ mensaje.mensaj}  placeholder='Escribir Mensaje' onChange={onChangeMensaje} name='mensaj'></input>
          <button type='submit' className='botonsend'><i className='bx bxs-send'></i></button>
          </form>
        </div>
    </div>
    </>
  );
}

export default Chat;
