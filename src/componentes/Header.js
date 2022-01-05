import './Header.scss';
import React, {useState,useEffect} from 'react'
import { Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [Width, setWidth] = useState(window.innerWidth);  
  const [busqueda, setbusqueda] = useState('')
  const onChangeMensaje = (e) => {
    setbusqueda(e.target.value);
  };

  const cambiarTamaño=()=>{ 
     setWidth(window.innerWidth);
  }

   useEffect(()=>{
     window.addEventListener('resize',cambiarTamaño);
     return ()=>{
       window.removeEventListener('resize', cambiarTamaño)
     }

   })

   const redirect = () => {
  document.querySelector('#oprimirbusqueda').click();
  }

  const [bar, setbar] = useState({
    valid: false
    });
    const [position, setpos] = useState( 0 );
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


    const onhandledmenuback = (num) =>{
      setpos(num);
      if(bar.valid === true){
      setbar({
      valid : false
      })
      }
    }
 const state =  useSelector(user => user.infoUsuario);
  return (
    <>
    <div className="nav-1">
    <nav className='menu'>
      <label className='logo'><Link to='/' onClick={ ()=> onhandledmenuback(9) }>{ (Width > 488)?'CompraRepuestos':'CR'}</Link></label>
      <div className='formbusqueda'>
      <form onSubmit={redirect}>
      <Link id='oprimirbusqueda' to={`/busqueda/${busqueda}`}> </Link>
        <div className='formbus'>
          <input type='text' placeholder='Buscar' className='inputbusqueda' value={busqueda} onChange={onChangeMensaje}></input>
          <button type='submit' className='botonbusqueda' ><i className='bx bx-search-alt-2'></i></button>
        </div>
          </form>
      </div>
      <ul className={(bar.valid === true)?'items show wraper':'items wraper'}>

       {(state.online === true)?<li><Link className={(position === 0)?'active':null} to='/crearproducto' onClick={ ()=> onhandledmenuback(0) } >Productos</Link></li>: null}
       {(state.online === true)?<li><Link className={(position === 1)?'active':null} to='/ordenar' onClick={ ()=> onhandledmenuback(1) }>Ordenar</Link></li>: null}
       {(state.online === true)?<li><Link className={(position === 2)?'active':null} to='/chat' onClick={ ()=> onhandledmenuback(2) }>Chats</Link></li>: null}
       {(state.online === true)?<li><Link className={(position === 3)?'active':null} to='/solicitudes' onClick={ ()=> onhandledmenuback(3) }>Solicitudes</Link></li>: null}
       {(state.online === true)? <li><Link className={(position === 4)?'active':null} to='/carrito' onClick={ ()=> onhandledmenuback(4) }>Carrito</Link></li>: null}
       {(state.online === true)?<li><Link className={(position === 5)?'active':null} to='/ajustes' onClick={ ()=> onhandledmenuback(5) }>Perfil</Link></li>: null}
       {(state.online === false)?<li><Link className={(position === 6)?'active':null} to='/login' onClick={ ()=> onhandledmenuback(6) }>Login</Link></li> : null}
       {(state.online === false)?<li><Link className={(position === 7)?'active':null} to='/register' onClick={ ()=> onhandledmenuback(7) }>Register</Link></li> : null}
     
      </ul>
    <button className='btnmenu' onClick={ ()=> onhandledclick() } >
    <i className='bx bx-menu' ></i>
    </button>
    </nav>
</div>
    
    </>
  );
}
export default Header;
