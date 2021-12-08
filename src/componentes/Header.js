import './Header.scss';
import React, {useState,useEffect} from 'react'
import { Link  } from 'react-router-dom';

function Header() {

  const [Width, setWidth] = useState(window.innerWidth);  
  const Verificado=true;  

  const cambiarTamaño=()=>{ 
     setWidth(window.innerWidth);
  }

   useEffect(()=>{
     window.addEventListener('resize',cambiarTamaño);
     return ()=>{
       window.removeEventListener('resize', cambiarTamaño)
     }

   })


  const [bar, setbar] = useState({
    valid: false
    });
    
    const onhandledclick = () =>{
      if(bar.valid === false){
      setbar({
      valid : true
      })
    }else{
      setbar({
        valid : false
        })
    }
    }


    const onhandledmenuback = () =>{
      if(bar.valid === true){
      setbar({
      valid : false
      })
      }
    }

 
  return (
    
    <>
    <nav className='menu'>
      <label className='logo'><Link to='/inicio' >{ (Width > 488)?'CompraRepuestos':'CR'}</Link></label>
      <div className='formbusqueda'>
      <form >
        <div className='formbus'>
          <input type='text' placeholder='Buscar' className='inputbusqueda' ></input>
          <button type='submit' className='botonbusqueda'><i className='bx bx-search-alt-2'></i></button>
        </div>
          </form>
      </div>
      <ul className={(bar.valid === true)?'items show':'items'}>

       <li><Link className='menubari' to='/productover' onClick={ ()=> onhandledmenuback() } >Productos</Link></li>
       {(Verificado === true)?<li><Link className='menubari' to='/ordenar' onClick={ ()=> onhandledmenuback() }>Ordenar</Link></li>: null}
       {(Verificado === true)?<li><Link className='menubari' to='/chat' onClick={ ()=> onhandledmenuback() }>Chats</Link></li>: null}
       {(Verificado === true)?<li><Link className='menubari' to='/solicitudes' onClick={ ()=> onhandledmenuback() }>Solicitudes</Link></li>: null}
       {(Verificado === true)? <li><Link className='menubari' to='/carrito' onClick={ ()=> onhandledmenuback() }>Carrito</Link></li>: null}
       {(Verificado === true)?<li><Link className='menubari' to='/ajustes' onClick={ ()=> onhandledmenuback() }>Perfil</Link></li>: null}
       {(Verificado === false)?<li><Link className='menubari' to='/login' onClick={ ()=> onhandledmenuback() }>Login</Link></li> : null}
       {(Verificado === false)?<li><Link className='menubari' to='/register' onClick={ ()=> onhandledmenuback() }>Register</Link></li> : null}
     
      </ul>
    <button className='btnmenu' onClick={ ()=> onhandledclick() } >
    <i className='bx bx-menu' ></i>
    </button>
    </nav>

    </>
  );
}
export default Header;
