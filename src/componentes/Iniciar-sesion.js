import './Iniciar-sesion.scss';
import { useDispatch } from 'react-redux';
import React,{useState} from 'react'
import { fetchstoken } from '../helpers/fetchmetod';
import { loginstate } from '../redux/actions/auth';
import { useSocket } from "../SocketsConnection/useSocket";


function Iniciarsesion() {
  const dispatch = useDispatch();
  const { conectarSocket } = useSocket('https://www.lbshop.bond');
  const [login, setLogin] = useState({
   correo:'pass@gmail.com',
   password: 'transformers'
});
const loginsesion= ()=>{
  return (login.correo.length > 0 && login.password.length > 0) ? true: false;
}
const onChangeMensaje = (e) => {
  const { name, value } = e.target;
  setLogin({
    ...login,
    [name]: value,
  });
};

  const onSubmit = async(e) => {
    e.preventDefault();
    const resultlogin = await fetchstoken('login', login , 'POST');
    if(resultlogin.ok){
    resultlogin.usuarioBd.online = true;
     const {__v,...state} = resultlogin.usuarioBd;
     localStorage.setItem('token',resultlogin.token);
      conectarSocket();
     dispatch(loginstate(state));
    }else{
      return console.log(resultlogin);
    }
      };

  return (
    <div className='fondologin'>
    <form className='formi' onSubmit={onSubmit}>
        <h4 className='i'>Iniciar Sesion</h4>
        <label className='ajus'  >Correo</label>
   <input className='inputl'  id='correo'  type='email' placeholder='ingrese correo' name='correo' value={login.correo} onChange={onChangeMensaje}/>
   <label className='ajus'>Contraseña</label>
   <input className='inputl' id='contraseña' type='password' name='password' placeholder='ingrese contraseña' value={login.password} onChange={onChangeMensaje}/>
   <button type='submit' className={loginsesion()?'buttoningresar':'buttoningresardisable'} disabled={!loginsesion()}> ingresar</button>
   <div 
    className="google-btn"
>
    <div className="google-icon-wrapper">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
    </div>
    <p className="btn-text">
        <b>Sign in with google</b>
    </p>
</div>
<button className="loginBtn loginBtn--facebook">
  Login with Facebook
</button>

   <h3 className='ajus'>no tienes cuenta?</h3>
   <a href='/register' className='am' >Registrarme</a>
    </form>
    </div>
  );
}

export default Iniciarsesion;
