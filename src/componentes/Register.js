import './Register.css';

function Register() {
  return (
    <>
    <form className='formre' method='POST'>
        <h4 className='i'>Iniciar Sesion</h4>
   <div >
   <h3 className='ajust'>Nombres</h3>
   <input className='inputr' placeholder='ingrese nombres'/>
   </div>
   <div className='gridform'>
   <h3 className='ajust'>Apellidos</h3>
   <input className='inputr' placeholder='ingrese apellidos'/>
   </div>
   <div>
   <h3 className='ajust'>Fecha De Nacimiento</h3>
   <input className='inputr' type='date' placeholder='ingrese apellidos'/>
   </div>
   <div className='gridform'>
   <h3 className='ajust'>Correo</h3>
  <input className='inputr' type='email' placeholder='ingrese correo'/>
  </div>
  <div>
   <h3 className='ajust'>Contraseña</h3>
   <input className='inputr' type='password' placeholder='ingrese contraseña'/>
   </div>
   <div className='gridform'>
   <h3 className='ajust'>Verificar Contraseña</h3>
   <input className='inputr' type='password' placeholder='Repite la contraseña'/>
   </div>
   <button className='buttonregi' type='submit'>Registrarme</button>
   <h3 className='ya'>ya tienes cuenta?</h3>
   <a href='/login' className='as' >Ingresar</a>
    </form>
    </>
  );
}

export default Register;
