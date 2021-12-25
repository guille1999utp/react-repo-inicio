import React from 'react'
import './Footer.scss'
import { Link  } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
        <div className="footer">
        <div className="row">
        <Link to='/'><i className='bx bxl-facebook-circle'></i></Link>
        <Link to='/'><i className='bx bxl-instagram' ></i></Link>
        <Link to='/'><i className='bx bxl-twitter' ></i></Link>
        </div>
        
        <div className="row">
        <ul>
        <li><Link to='/'>Contactanos</Link></li>
        <li><Link to='/'>Nuestros Servicios</Link></li>
        <li><Link to='/'>Politicas de Privacidad</Link></li>
        <li><Link to='/'>Terminos y Condiciones</Link></li>
        <li><Link to='/'>Carreras</Link></li>
        </ul>
        </div>
        
        <div class="row">
        CompraRepuestos Copyright © 2021 CompraRepuestos - Todos Los Derechos Reservados || Designed By: Mahesh 
        </div>
        </div>
        </footer>
    )
}
export default Footer;