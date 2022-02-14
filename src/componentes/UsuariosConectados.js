import { useDispatch,useSelector} from 'react-redux';
import { fetchCToken } from '../helpers/fetchmetod';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { activarchat , Cargarmensajeschat} from '../redux/actions/chat';

function UsuariosConectados({user,funChulo,funcpendiente}) {
  const dispatch = useDispatch();
  const {chatActivo} =  useSelector(chat => chat.chat);
  const onClick = async() =>{
    dispatch(activarchat({
     iduser: user.uid,
     name: user.nombre,
     urlfoto: user.urlfoto
    }))
    const res = await fetchCToken(`chat/${user.uid}`);
    const orden = await fetchCToken('ordenconsulta',{oid:res.mensajes[0].productorden},'POST');

    if(orden.ok && orden.producto === 0){
      funChulo(true);
      funcpendiente(res.mensajes[0].condicion)
      }
    dispatch(Cargarmensajeschat(res.mensajes));
    scrollToBottom('mensajes');

  }
   const nombre = user.nombre.trim().toLowerCase().slice(0,15);
    return (
            <>
        <div className={`usuariochatperfil ${(user.uid === chatActivo) && 'chatactivo'} `} onClick={onClick}>
            <div className='flexusuariochat'>
          <img className='imagenchatuser' alt='' src={user.urlfoto}>
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


