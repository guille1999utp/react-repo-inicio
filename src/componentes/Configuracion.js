import './Configuracion.scss';
import Footer from "./Footer";

function Configuracion() {
  return (
    <>
    <div className='estructuraconfig'>
      <div className='imageavatar'>
       <img src='https://st.depositphotos.com/2218212/2938/i/600/depositphotos_29387653-stock-photo-facebook-profile.jpg' alt='imageavatar'></img>
      </div>
      <h1>Guillermo Peñaranda Hernandez</h1>
      <div className='containerinfousuario'>
      <div className='detallesusuario'>
         <h2>Detalles</h2>
         <ul>
           <li><b><i className='bx bx-home'></i> Direccion:</b> carrera 5 #6-54</li>
           <li><b><i className='bx bx-buildings'></i> Barrio:</b> alamos</li>
           <li><b><i className='bx bx-barcode' ></i> Codigo Nit:</b> 654654152156</li>
           <li><b><i className='bx bx-car'></i> Domicilio Privado:</b> Si</li>
           <li><b><i className='bx bx-mobile-alt' ></i> celular:</b> 3186975663</li>
           <li><b><i className='bx bx-phone' ></i> Telefono:</b> 2107107</li>
           <li><b><i className='bx bxs-map' ></i> Ciudades Con Servicio:</b> cartago, valle del cauca</li>
         </ul>
      </div>
      <div className='detallesusuario'>
         <h2>Informacion Adicional</h2>
         <ul>
           <li><b><i className='bx bx-time-five' ></i> Horarios Atencion:</b> 8am - 6pm</li>
           <li><b><i className='bx bxs-category' ></i> Categoria de Venta:</b> Herramientas</li>
           <li><b><i className='bx bx-timer' ></i> Funcionamiento:</b> 5 años</li>
           <li><b><i className='bx bxs-user-pin'></i> Gerente:</b> Guillermo Peñaranda Hernandez</li>
           <li><b><i className='bx bx-id-card'></i> Cedula Gerente:</b> 1193213491</li>
           <li><b><i className='bx bxs-user-check' ></i> Representante Legal:</b> Yuliana Peñaranda Hernandez</li>
         </ul>
      </div>
      </div>

      <Footer/>
    </div>
    </>
  );
}

export default Configuracion;
