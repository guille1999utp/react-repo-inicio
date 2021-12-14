import './Configuracion.scss';

function Configuracion() {
  return (
    <>
    <div className='estructuraconfig'>
       <div className='herramientasconfig'>
        <h3><i className='bx bxs-user-circle'></i> Perfil</h3>
        <div className='scrollconfiguracino'><div><i className='bx bxs-cog'></i><p>Configuracion</p></div> <i className='bx bxs-down-arrow'></i></div>
            <ul>
                <li><p><i className='bx bxs-user'></i> General</p></li>
                <li><p><i className='bx bxs-shield-alt-2' ></i> Privacidad</p></li>
                <li><p><i className='bx bx-map' ></i> Ubicaciones</p></li>
                <li><p><i className='bx bx-bell'></i> Notificaciones</p></li>
               <li><p><i className='bx bx-clipboard'></i> Administrar Productos</p></li>
               <li><p><i className='bx bx-credit-card' ></i> Pagos en la web</p></li>
                <li><p><i className='bx bx-block' ></i> Bloquear</p></li>
                <li><p><i className='bx bx-detail' ></i> Credenciales</p></li>
                <li><p><i className='bx bx-trash' ></i> Eliminar cuenta</p></li>
            </ul>
        </div>
        <div className='resultadoconfig'>

      </div>
    </div>
    </>
  );
}

export default Configuracion;
