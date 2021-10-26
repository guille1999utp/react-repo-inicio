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

          </div>
          <div className='usuariochatperfil'>

          </div>
          <div className='usuariochatperfil'>

          </div>
          <div className='usuariochatperfil'>

          </div>


        </div>
        <div className='mensajesusuarios'>
          <div className='paletacomandochat'>
         
          </div>
          <div className='chatuses'>

          </div>
          <div className='paletachat'>

          </div>
        </div>
    </div>
    
   
    </div>
    </>
  );
}

export default Chat;
