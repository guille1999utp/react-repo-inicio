import './Configuracion.scss';

function Configuracion() {
  return (
    <>
    <div className='estructuraconfig'>
       <div className='herramientasconfig'>
        <h3><i class='bx bxs-user-circle'></i> Perfil</h3>
        <div className='scrollconfiguracino'><div><i class='bx bxs-cog'></i><p>Configuracion</p></div> <i class='bx bxs-down-arrow'></i></div>
            <ul>
                <li><p><i class='bx bxs-user'></i> General</p></li>
                <li><p><i class='bx bxs-shield-alt-2' ></i> Privacidad</p></li>
                <li><p><i class='bx bx-map' ></i> Ubicaciones</p></li>
                <li><p><i class='bx bx-bell'></i> Notificaciones</p></li>
               <li><p><i class='bx bx-clipboard'></i> Administrar Productos</p></li>
               <li><p><i class='bx bx-credit-card' ></i> Pagos en la web</p></li>
                <li><p><i class='bx bx-block' ></i> Bloquear</p></li>
                <li><p><i class='bx bx-detail' ></i> Credenciales</p></li>
                <li><p><i class='bx bx-trash' ></i> Eliminar cuenta</p></li>
            </ul>
        </div>
        <div className='resultadoconfig'>

      </div>
    </div>
    </>
  );
}

export default Configuracion;
