import './App.css';
import React, {useState,useEffect} from 'react'
import { Link  } from 'react-router-dom';

function App() {

  const [Width, setWidth] = useState(window.innerWidth);  

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
   
    

   
  return (
    
    <>
    <nav className='menu'>
      <label className='logo'><Link to='/inicio' onClick={ ()=> onhandledclick() } >{ (Width > 488)?'CompraRepuestos':'CR'}</Link></label>
      <div className='formbusqueda'>
      <form >
        <div className='formbus'>
          <input type='text' placeholder='Buscar' className='inputbusqueda' ></input>
          <button type='submit' className='botonbusqueda'><i class='bx bx-search-alt-2'></i></button>
        </div>
          </form>
      </div>
      <ul className={(bar.valid === true)?'items show':'items'}>
      <li><Link className='menubari' to='/productover' onClick={ ()=> onhandledclick() } >Productos</Link></li>
      <li><Link className='menubari' to='/' onClick={ ()=> onhandledclick() }>Ordenar</Link></li>
      <li><Link className='menubari' to='/chat' onClick={ ()=> onhandledclick() }>Chats</Link></li>
      <li><Link className='menubari' to='/' onClick={ ()=> onhandledclick() }>Notificaciones</Link></li>
      <li><Link className='menubari' to='/' onClick={ ()=> onhandledclick() }>Ajustes</Link></li>
      <li><Link className='menubari' to='/' onClick={ ()=> onhandledclick() }>Informacion</Link></li>
      
     
      </ul>
    <button className='btnmenu' onClick={ ()=> onhandledclick() } >
    <i className='bx bx-menu' ></i>
    </button>
    </nav>

    </>
  );
}
// se utilizara a la hora cuando el usuario ya este registrado
//<li><Link className='menubari' to='/login' onClick={ ()=> onhandledclick() }>Login</Link></li>
// <li><Link className='menubari' to='/register' onClick={ ()=> onhandledclick() }>Register</Link></li>

export default App;
