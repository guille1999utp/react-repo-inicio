import './Chat.css';

function Chat() {
  return (
    <>
    <div className='fondochat'>
    <div className='fondonegrochat'></div>
    <div className='cajachat'>
        <div className='usuariosactivos'>
          <div className='chatperfil'>
          <i class='bx bx-user' ></i>
          <div>
          <i class='bx bxs-chat chaticon'></i>
          <i class='bx bx-dots-vertical-rounded menuchat'></i>
          </div>
          </div>
          <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>
          <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>  <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>  <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>


        </div>
        <div className='mensajesusuarios'>
          <div className='paletacomandochat'>
         
          </div>
          <div className='chatuses'>

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
