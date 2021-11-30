import './Iniciar-sesion.css';

function Iniciarsesion() {
  return (
    <div className='fondologin'>
    <form className='formi' method='POST'>
        <h4 className='i'>Iniciar Sesion</h4>
        <label className='ajus'for='correo' >Correo</label>
   <input className='inputl'  id='correo'  type='email' placeholder='ingrese correo'/>
   <label className='ajus'   for='contraseña'>Contraseña</label>
   <input className='inputl' id='contraseña' type='password' placeholder='ingrese contraseña'/>
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
