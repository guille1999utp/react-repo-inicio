import './AppBar.css';
import React , {useState, useEffect} from 'react'
import { Link  } from 'react-router-dom';

function AppBar() {
 
    const [appbar, setappbar] = useState({
        appbar: true
        });
        const clickmenu = () =>{
            if(appbar.appbar === false){
                setappbar({
                appbar : true
            })
          }else{
            setappbar({
                appbar : false
              })
          }
          }
        
    useEffect(()=>{
        console.log('hey')
    
    },[appbar])

  return (
    
    <>
   <div className={(appbar.appbar === true )? "sidebar open":'sidebar'}>
    <div className="logo-details">
        <div className="logo_name">Menú </div>
        <i onClick={clickmenu} className={(appbar.appbar === true )? 'bx bx-menu-alt-right':'bx bx-menu'}></i>
    </div>
    <ul className="nav-list">
      <li>
        <Link className="ac" to="#">
            <i className='bx bxs-tag-alt'></i>
          <span className="links_name">Listado Heroes</span>
        </Link >
         <span className="tooltip">Listado Heroes</span>
      </li>
      <li>
       <Link className="ac" to="#">
        <i className='bx bx-plus'></i>
         <span className="links_name">Añadir Heroes</span>
       </Link >
       <span className="tooltip">Añadir Heroes</span>
     </li>
     <li>
       <Link className="ac" to="#">
        <i className='bx bx-search' ></i>
         <span className="links_name">Buscar Heroes</span>
       </Link >
       <span className="tooltip">Buscar Heroes</span>
     </li>
    </ul>
  </div>
    </>
  );
}

export default AppBar;