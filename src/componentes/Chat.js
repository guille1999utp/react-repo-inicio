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
          <div className='iconoschatfondo'>
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
          
          <div className='hrdivchat'></div>
          <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>
       
          <div className='hrdivchat'></div>
            <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>
        
          <div className='hrdivchat'></div>
            <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>  
          <div className='hrdivchat'></div>

        </div>
        <div className='mensajesusuarios'>
          <div className='paletacomandochat'>
            <div className='correcionpaletachat'>
              <div className='fotousuariouser'>
              </div>
              <p className='nombrechat'>nicolas pinga</p>
          </div>
          <i class='bx bx-dots-vertical-rounded menuchat'></i>
          </div>
          <img className='chatuses' src='https://static.vecteezy.com/system/resources/previews/002/218/678/non_2x/blue-wallpaper-with-modern-smartphones-social-media-message-background-copy-space-for-a-text-vector.jpg' alt=''>

          </img>
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
