import './Chat.css';
import CajaChat from './CajaChat';
import UsuariosConectados from './UsuariosConectados';

function Chat() {
    const mensajes = [
        {
            mensaje: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            fecha: "5 minutos" ,
            enviado: 1,
        },
        {
            mensaje: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            fecha: "5 minutos" ,
            enviado: 0
        },
        {
            mensaje: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            fecha: "5 minutos" ,
            enviado: 0
        },
        {
            mensaje: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            fecha: "5 minutos" ,
            enviado: 1
        },
        {
            mensaje: "Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ",
            fecha: "5 minutos" ,
            enviado: 0
        },
    ]
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
    <div className='fondochat'>
    <div className='fondonegrochat'></div>
    <div className='cajachat'>
        <div className='usuariosactivos'>
          <div className='chatperfil'>
          <i class='bx bx-user' ></i>
          <div className='iconoschatfondo'>
          <i class='bx bxs-chat chaticon'></i>
          <i class='bx bx-dots-vertical-rounded menuchat'></i>
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
          <CajaChat mensaje={e.mensaje} fecha={e.fecha} enviado={e.enviado}></CajaChat>
          ))}

          </div>
          <div className='paletachat'>
          <i class='bx bx-paperclip'></i>
          <input type='text' className='decorationpaleta' placeholder='Escribir Mensaje'></input>
          <i className='bx bxs-send'></i>
          </div>
        </div>
    </div>
    
   
    </div>
    </>
  );
}

export default Chat;
