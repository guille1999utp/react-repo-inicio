
function UsuariosConectados({name, ultmensaje, horault}) {
  ultmensaje = ultmensaje.trim().slice(0,35);
  name = name.trim().toLowerCase().slice(0,15);
    return (
            <>
        <div className='usuariochatperfil'>
            <div className='flexusuariochat'>
          <img className='fotousuario' alt='' src='https://cdn.wallpapersafari.com/0/71/zFUkST.jpg'>
          </img>
          <div className='perfilyultimo'>
           <span>{ name }</span>
           <p> <i class='bx bx-check-double'></i>{ ultmensaje } ...</p>
          </div>
          </div>
          <p className='horachat'>{ horault }</p>
          </div>
          <div className='hrdivchat'></div>
            </>
          );

}
export default UsuariosConectados;


