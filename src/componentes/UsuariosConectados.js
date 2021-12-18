
function UsuariosConectados({user}) {
  console.log(user)
/*   ultmensaje = ultmensaje.trim().slice(0,35);*/  
   const nombre = user.nombre.trim().toLowerCase().slice(0,15);
    return (
            <>
        <div className='usuariochatperfil'>
            <div className='flexusuariochat'>
          <img className='fotousuario' alt='' src='https://cdn.wallpapersafari.com/0/71/zFUkST.jpg'>
          </img>
          <div className='perfilyultimo'>
           <span>{ nombre }</span>
           {
             (user.online === true )?
           <span className="userconect">online</span>: <span className="userdisconnect">offline</span>
           }
          </div>
          </div>
          </div>
          <div className='hrdivchat'></div>
            </>
          );

}
export default UsuariosConectados;


