import './App.css';
import React, {useState} from 'react'
import { Link  } from 'react-router-dom';

function App() {

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
      <label className='logo'><Link to='/inicio' >CompraRepuestos</Link></label>
      <ul className={(bar.valid === true)?'items show':'items'}>
      <li><Link className='menubari' to='/productover' >Productos</Link></li>
      <li><Link className='menubari' to='/'>Ordenar</Link></li>
      <li><Link className='menubari' to='/'>Chats</Link></li>
      <li><Link className='menubari' to='/'>Notificaciones</Link></li>
      <li><Link className='menubari' to='/'>Ajustes</Link></li>
      <li><Link className='menubari' to='/'>Informacion</Link></li>
      <li><Link className='menubari' to='/login'>Login</Link></li>
      <li><Link className='menubari' to='/register'>Register</Link></li>
      </ul>
    <button className='btnmenu' onClick={ ()=> onhandledclick() } >
    <i className='bx bx-menu' ></i>
    </button>
    </nav>

    </>
  );
}

export default App;
