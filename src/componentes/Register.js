import React, {useState} from 'react'
import './Register.scss';
import { useDispatch } from 'react-redux';
import { fetchstoken } from '../helpers/fetchmetod';
import { loginstate } from '../redux/actions/auth';
import Swal from 'sweetalert2'
function Register() {

  const dispatch = useDispatch();
  const [state, setState] = useState({
    nombre: '',
    apellidos:'',
    correo:'',
    password:'',
    passwordrepetida:'',
    fechnacimiento:'',
    });
const Registert= ()=>{
  return (state.correo.length > 0 && state.password.length > 0 && state.nombre.length > 0 && state.apellidos.length > 0 && state.passwordrepetida.length > 0 && state.fechnacimiento.length > 0) ? true: false;
}
const onChangeMensaje = (e) => {
  const { name, value } = e.target;
  setState({
    ...state,
    [name]: value,
  });
};

  const onSubmit = async(e) => {
    e.preventDefault();
    if(state.password === state.passwordrepetida){
    const resultregister = await fetchstoken('register', state , 'POST');
    if(resultregister.ok){
     const {__v,...state} = resultregister.newuser;
     localStorage.setItem('token',resultregister.token);
     dispatch(loginstate(state));
    }else{
      Swal.fire({
        icon: 'error',
        title: 'error...',
        text: resultregister.msg
            })
      console.log(resultregister)
    }
  }else{
    Swal.fire({
      icon: 'error',
      title: 'error...',
      text: 'las contraseñas deben coincidir'
          })
  }
  
  };


  return (
    <div className='fondologin'>
  <form className='formre' onSubmit={ onSubmit } >
        <h4 className='i'>Registro</h4>
   <div>
   <label className='ajust' >Nombres</label>
   <input autoComplete={'off'} id='nombre' className='inputr' placeholder='ingrese nombres' onChange={ onChangeMensaje} name='nombre' required/>
   </div>
   <div className='gridform'>
   <label className='ajust' >Apellidos</label>
   <input autoComplete={'off'} id='apellidos' className='inputr' placeholder='ingrese apellidos' onChange={ onChangeMensaje} name='apellidos' required/>
   </div>
   <div className='divmarginregister'>
   <label className='ajust' >Fecha De Nacimiento</label>
   <input className='inputr' id='fechanacimiento' type='date' name='fechnacimiento' onChange={ onChangeMensaje } required/>
   </div>
   <div className='gridform divmarginregister'>
   <label  className='ajust'  >Correo</label>
  <input autoComplete={'off'} id='correo' className='inputr' type='email' placeholder='ingrese correo' onChange={ onChangeMensaje} name='correo' required/>
  </div>
  <div className='divmarginregister'>
   <label className='ajust' >Contraseña</label>
   <input autoComplete={'off'} id='contraseña' className='inputr' type='password' placeholder='ingrese contraseña' onChange={ onChangeMensaje} name='password' required/>
   </div>
   <div className='gridform divmarginregister'>
   <label className='ajust' >Verificar Contraseña</label>
   <input autoComplete={'off'} id='verificacion' className='inputr' type='password' placeholder='Repite la contraseña' onChange={ onChangeMensaje} name='passwordrepetida' required/>
   </div>

   <button className={Registert()?'buttonregi':'buttonregidisable'} type='submit' disabled={!Registert()}>Registrarme</button>


   <h3 className='ya'>ya tienes cuenta?</h3>
   <a href='/login' className='as' >Ingresar</a>
    </form>
    </div>
  );
}

export default Register;
