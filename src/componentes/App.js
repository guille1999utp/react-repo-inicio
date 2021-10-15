import './App.css';
import React, {useState} from 'react'

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
      <label className='logo'>CompraRepuestos</label>
      <ul className={(bar.valid === true)?'items show':'items'}>
      <li><a className='menubari' href='/inicio' >Productos</a></li>
      <li><a className='menubari' href='/'>Ordenar</a></li>
      <li><a className='menubari' href='/'>Chats</a></li>
      <li><a className='menubari' href='/'>Notificaciones</a></li>
      <li><a className='menubari' href='/'>Ajustes</a></li>
      <li><a className='menubari' href='/'>Informacion</a></li>
      <li><a className='menubari' href='/login'>Login</a></li>
      <li><a className='menubari' href='/register'>Register</a></li>
      </ul>
    <button className='btnmenu' onClick={ ()=> onhandledclick() } >
    <i className='bx bx-menu' ></i>
    </button>
    </nav>

    </>
  );
}

export default App;
