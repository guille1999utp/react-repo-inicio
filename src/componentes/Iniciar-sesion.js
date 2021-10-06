import './Iniciar-sesion.css';

function Iniciarsesion() {
  return (
    <>
    <form method='POST'>
        <h4 className='i'>Iniciar Sesion</h4>
        <h3 className='ajust'>Correo</h3>
   <input type='email' placeholder='ingrese correo'/>
   <h3 className='ajust'>Contraseña</h3>
   <input type='password' placeholder='ingrese contraseña'/>
   <button type='submit'> ingresar</button>
   <h3 className='ajust'>no tienes cuenta?</h3>
   <a href='https://www.youtube.com/' className='as' >Ingresar</a>
    </form>
    </>
  );
}

export default Iniciarsesion;
