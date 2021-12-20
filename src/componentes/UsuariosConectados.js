import { useDispatch,useSelector} from 'react-redux';
import { fetchCToken } from '../helpers/fetchmetod';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { activarchat } from '../redux/actions/chat';
import { Cargarmensajeschat } from '../redux/actions/chat';



function UsuariosConectados({user}) {
  const dispatch = useDispatch();
  const {chatActivo} =  useSelector(chat => chat.chat);
  const onClick = async() =>{
    dispatch(activarchat(user.uid))
    const res = await fetchCToken(`chat/${user.uid}`);
    console.log(res);
    dispatch(Cargarmensajeschat(res.mensajes));
    scrollToBottom('mensajes');

  }
   const nombre = user.nombre.trim().toLowerCase().slice(0,15);
    return (
            <>
        <div className={`usuariochatperfil ${(user.uid === chatActivo) && 'chatactivo'} `} onClick={onClick}>
            <div className='flexusuariochat'>
          <img className='fotousuario' alt='' src='https://cdn.wallpapersafari.com/0/71/zFUkST.jpg'>
          </img>
          <div className='perfilyultimo'>
           <span className="namechatperfil">{ nombre }</span>
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


