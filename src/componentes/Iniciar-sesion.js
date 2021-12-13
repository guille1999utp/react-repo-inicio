import './Iniciar-sesion.scss';
import { useDispatch } from 'react-redux';
import React,{useState} from 'react'
import { fetchstoken } from '../helpers/fetchmetod';
import { loginstate } from '../redux/actions/auth';

function Iniciarsesion() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
   correo:'pass@gmail.com',
   password: 'transformers'
});

const onChangeMensaje = (e) => {
  const { name, value } = e.target;
  setLogin({
    ...login,
    [name]: value,
  });
};

  const onSubmit = async(e) => {
    e.preventDefault();
    if(login.correo.length  !== 0 && login.password.length !== 0){
    const resultlogin = await fetchstoken('login', login , 'POST');
    if(resultlogin.ok){
      console.log(resultlogin.usuarioBd)
     dispatch(loginstate(resultlogin.usuarioBd));
    }else{
      console.log(resultlogin)
    }
  
  }};

  return (
    <div className='fondologin'>
    <form className='formi' onSubmit={onSubmit}>
        <h4 className='i'>Iniciar Sesion</h4>
        <label className='ajus'for='correo'  >Correo</label>
   <input className='inputl'  id='correo'  type='email' placeholder='ingrese correo' name='correo' value={login.correo} onChange={onChangeMensaje}/>
   <label className='ajus'   for='contraseña'>Contraseña</label>
   <input className='inputl' id='contraseña' type='password' name='password' placeholder='ingrese contraseña' value={login.password} onChange={onChangeMensaje}/>
   <button type='submit' className='buttoningresar'> ingresar</button>
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
