
function FilterCard() {
  return (
    <>
    <form className='formi' method='POST'>
        <h4 className='i'>Iniciar Sesion</h4>
        <h3 className='ajus'>Correo</h3>
   <input className='inputl' type='email' placeholder='ingrese correo'/>
   <h3 className='ajus'>Contraseña</h3>
   <input className='inputl' type='password' placeholder='ingrese contraseña'/>
   <button type='submit'> ingresar</button>
   <h3 className='ajus'>no tienes cuenta?</h3>
   <a href='/register' className='am' >Registrarme</a>
    </form>
    </>
  );
}

export default FilterCard;
