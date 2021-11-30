import "./FilterCard.css";
import React, { useState, useEffect } from "react";
function FilterCard() {
  const [Width, setWidth] = useState(window.innerWidth);
  const [alertfilter, setAlertFilter] = useState(false);
  const [ordenarfilter, setOrdenarFilter] = useState(false);
  const cambiarTamaño = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", cambiarTamaño);
    return () => {
      window.removeEventListener("resize", cambiarTamaño);
    };
  });
const filter = () =>{
  const tr = alertfilter?false:true;
  setOrdenarFilter(false);
  setAlertFilter(tr)
}

const ordenar = () =>{
  const tr = ordenarfilter?false:true;
  setAlertFilter(false);
  setOrdenarFilter(tr);
}

  if (Width > 540) {
    return (
      <div className="divfilterflex">
        <form className="formfilter">
          <h3 className="tamaño colorf">Busqueda</h3>
          <h4 className="hdeproduc colorf">Estado del Producto</h4>
          <div className="flexche">
            <div className="flexche">
              <p className="mr-5">nuevo</p>
              <input type="checkbox" className="checkbox" />
            </div>
            <div className="flexche">
              <p className="mr-5">usado</p>
              <input type="checkbox" className="checkbox" />
            </div>
          </div>
          <div className="flexche">
            <h4 className="hdeproduc colorf">Modelo</h4>
            <select name="select" className="select">
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <div className="flexche">
            <h4 className="hdeproduc colorf">Ubicacion</h4>
            <select name="select" className="select">
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <h4 className="hdeproduc colorf">Vendedor</h4>
          <div className="flexche">
            <div className="flexche">
              <p className="mr-5">Local</p>
              <input type="checkbox" className="checkbox" />
            </div>
            <div className="flexche">
              <p className="mr-5">corriente</p>
              <input type="checkbox" className="checkbox" />
            </div>
          </div>
          <h4 className="hdeproduc colorf">Precio</h4>
          <div className="flexche">
            <input className="inputf" placeholder="minimo" name="minimo" />
            -
            <input className="inputf" placeholder="maximo" name="maximo" />
          </div>
          <div className="flexche">
            <h4 className="hdeproduc colorf">Categoria</h4>
            <select name="select" className="select">
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <h4 className="hdeproduc colorf">Costo de envio</h4>
          <div className="flexche">
            <p className="mr-5">Gratis</p>
            <input type="checkbox" className="checkbox" />
          </div>

          <button className='botonbusquedafilter'>buscar</button>
        </form>
        <hr></hr>
      </div>
    );
  } else {
    return (
      <>
        <div className="filtercelular">
          <div className="flexbotonfil" onClick={()=>filter()}>
            <i className="bx bxs-filter-alt iconfilter"></i>
            <p>Filtrar</p>
          </div>
          <hr></hr>
          <div className="flexbotonfil" onClick={()=>ordenar()}>
            <i className="bx bx-sort iconfilter"></i>
            <p>Ordenar</p>
          </div>
        </div>

        {(alertfilter === true)?
        
         <form className="formfilter">
         
         <h3 className="tamaño colorf">Filtro</h3>
         <div className="flexche">
         <h4 className="hdeproduc colorf">Estado del Producto</h4>
           <div className="flexcher">
             <p >nuevo</p>
             <input type="checkbox" className="checkbox" />
           </div>
           <div className="flexcher">
             <p >usado</p>
             <input type="checkbox" className="checkbox" />
           </div>
         </div>
         <div className="flexche">
           <h4 className="hdeproduc colorf">Modelo</h4>
           <select name="select" className="select">
             <option value="value1">Value 1</option>
             <option value="value2">Value 2</option>
             <option value="value3">Value 3</option>
           </select>
         </div>
         <div className="flexche">
           <h4 className="hdeproduc colorf">Ubicacion</h4>
           <select name="select" className="select">
             <option value="value1">Value 1</option>
             <option value="value2">Value 2</option>
             <option value="value3">Value 3</option>
           </select>
         </div>
         <div className="flexche">
         <h4 className="hdeproduc colorf">Vendedor</h4>
           <div className="flexcher">
             <p >Local</p>
             <input type="checkbox" className="checkbox" />
           </div>
           <div className="flexcher">
             <p>corriente</p>
             <input type="checkbox" className="checkbox" />
           </div>
         </div>
         <div className="flexche">
         <h4 className=" ta-center">Precio</h4>
           <input className="inputf" placeholder="minimo" name="minimo" />
           - 
           <input className="inputf" placeholder="maximo" name="maximo" />
         </div>
         <div className="flexche">
           <h4 className=" ta-center" >Categoria</h4>
           <select name="select" className="select">
             <option value="value1">Value 1</option>
             <option value="value2">Value 2</option>
             <option value="value3">Value 3</option>
           </select>
         </div>
         <div className="flexche">
         <h4 className="hdeproduc colorf">Costo de envio</h4>
           <p>Gratis</p>
           <input type="checkbox" className="checkbox" />
         </div>
         <button className='botonbusquedafilter'>buscar</button>
       </form>
        : null}



{(ordenarfilter === true)?
        
        <form className="formfilter">
        
        <h3 className="tamaño colorf">Ordenar</h3>
        <div className="flexche">
        <h4 className="hdeproduc colorf">Precio</h4>
          <div className="flexcher">
            <p >Mayor+</p>
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="flexcher">
            <p >Menor -</p>
            <input type="checkbox" className="checkbox" />
          </div>
        </div>
    
      
        <div className="flexche">
        <h4 className="hdeproduc colorf">Fecha De Subida</h4>
          <div className="flexcher">
            <p >Actuales</p>
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="flexcher">
            <p>Antiguos</p>
            <input type="checkbox" className="checkbox" />
          </div>
        </div>
   
        <button className='botonbusquedafilter'>buscar</button>
      </form>
       : null}

        
      </>
    );
  }
}

export default FilterCard;
