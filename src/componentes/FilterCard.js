import "./FilterCard.scss";
import React, { useState, useEffect } from "react";

function FilterCard({history,opciones}) {
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
const [filtered, setFilter] = useState({
  nuevo:false,
  usado:false,
  modelo:'',
  ubicacion: '',
  Garantia:false,
  min:0,
  max: 10000000000,
  categoria:'',
  enviogratis:false,
  mayor:false,
  menor:false
});

const onChangeMensaje = (e) => {
  const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  setFilter({
    ...filtered,
    [name]: value,
  });
};



 const redirect = () => {
  history.push(`/busqueda/${opciones}?${(filtered.modelo.length  !== 0 )?'modelo='+filtered.modelo:''}${(filtered.ubicacion.length !== 0 )?'&ubicacion='+filtered.ubicacion:''}${(filtered.min !==0 )?'&min='+filtered.min:''}${(filtered.max!==10000000000 )?'&max='+filtered.max:''}${(filtered.categoria.length !==0 )?'&categoria='+filtered.categoria:''}${(filtered.enviogratis!== false )?'&enviogratis='+filtered.enviogratis:''}${(filtered.nuevo!== false )?'&nuevo='+filtered.nuevo:''}${(filtered.usado!== false)?'&usado='+filtered.usado:''}${(filtered.mayor!==false )?'&mayor='+filtered.mayor:''}${(filtered.menor!==false )?'&menor='+filtered.menor:''}`);
}; 
const limpiar = () =>{
  setFilter({
    nuevo:false,
    usado:false,
    modelo:'',
    ubicacion: '',
    Garantia:false,
    min:0,
    max: 10000000000,
    categoria:'',
    enviogratis:false,
    mayor:false,
    menor:false
  });
  history.push(`/busqueda/${opciones}?`);

}
  if (Width > 545) {
    return (
      <div className="divfilterflex">
        <form className="formfilter">
          <h3 className="tamaño colorf">Busqueda</h3>
          <h4 className="hdeproduc colorf">Estado del Producto</h4>
          <div className="flexche">
            <div className="flexche">
              <p className="mr-5">nuevo</p>
              <input type="checkbox" className="checkbox" name='nuevo' value={filtered.nuevo} onChange={onChangeMensaje}/>
            </div>
            <div className="flexche">
              <p className="mr-5">usado</p>
              <input type="checkbox" className="checkbox" name='usado'  value={filtered.usado} onChange={onChangeMensaje}/>
            </div>
          </div>
          <div className="flexche">
            <h4 className="hdeproduc colorf">Modelo</h4>
            <select  className="select" name='modelo'  value={filtered.modelo} onChange={onChangeMensaje}>
            <option value=""></option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="flexche">
            <h4 className="hdeproduc colorf">Ubicacion</h4>
            <select name="ubicacion" className="select" value={filtered.ubicacion} onChange={onChangeMensaje}>
            <option value=""></option>
              <option value="Cartago">Cartago</option>
              <option value="Pereira">Pereira</option>
              <option value="Armenia">Armenia</option>
            </select>
          </div>
            <div className="flexche">
          <h4 className="hdeproduc colorf">Garantia</h4>
              <input type="checkbox" className="checkbox" name='Garantia' value={filtered.Garantia} onChange={onChangeMensaje} />
            </div>
           
          <h4 className="hdeproduc colorf">Precio</h4>
          <div className="flexche">
            <input className="inputf" placeholder="minimo"  name="min" value={filtered.min} onChange={onChangeMensaje}/>
            -
            <input className="inputf" placeholder="maximo" name="max" value={filtered.max} onChange={onChangeMensaje}/>
          </div>
          <div className="flexche">
            <h4 className="hdeproduc colorf">Categoria</h4>
            <select name="categoria" className="select"   value={filtered.categoria} onChange={onChangeMensaje}>
            <option value=""></option>
              <option value="Electrodomesticos">Electrodomesticos</option>
              <option value="Mascotas">Mascotas</option>
              <option value="Repuestos">Repuestos</option>
              <option value="Implementos">Implementos</option>
              <option value="Maquillaje">Maquillaje</option>

            </select>
          </div>
          <h4 className="hdeproduc colorf">Costo de envio</h4>
          <div className="flexche">
            <p className="mr-5">Gratis</p>
            <input type="checkbox" className="checkbox" name='enviogratis' value={filtered.enviogratis} onChange={onChangeMensaje}/>
          </div>
          <h4 className="hdeproduc colorf">Ordenar</h4>
          <div className="flexche">
            <div className="flexche">
              <p className="mr-5">Mayor</p>
              <input type="checkbox" className="checkbox" name='mayor' value={filtered.mayor} onChange={onChangeMensaje}/>
            </div>
            <div className="flexche">
              <p className="mr-5">Menor</p>
              <input type="checkbox" className="checkbox" name='menor'  value={filtered.menor} onChange={onChangeMensaje}/>
            </div>
          </div>
          <button className='botonbusquedafilter' type='button' onClick={redirect}>buscar</button>
          <button className='botonbusquedafilter' type='button' onClick={limpiar}>Limpiar</button>

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
             <input type="checkbox" className="checkbox" name='nuevo' value={filtered.nuevo} onChange={onChangeMensaje}/>
           </div>
           <div className="flexcher">
             <p >usado</p>
             <input type="checkbox" className="checkbox" name='usado' value={filtered.usado} onChange={onChangeMensaje}/>
           </div>
         </div>
         <div className="flexche">
           <h4 className="hdeproduc colorf">Modelo</h4>
           <select  className="select" name='modelo'  value={filtered.modelo} onChange={onChangeMensaje}>
            <option value=""></option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
         </div>
         <div className="flexche">
           <h4 className="hdeproduc colorf">Ubicacion</h4>
           <select name="ubicacion" className="select" value={filtered.ubicacion} onChange={onChangeMensaje}>
            <option value=""></option>
              <option value="Cartago">Cartago</option>
              <option value="Pereira">Pereira</option>
              <option value="Armenia">Armenia</option>
            </select>
         </div>
         <div className="flexche">
         <h4 className="hdeproduc colorf">Vendedor</h4>
           <div className="flexcher">
             <p >Local</p>
             <input type="checkbox" className="checkbox" name='local' value={filtered.local} onChange={onChangeMensaje}/>
           </div>
           <div className="flexcher">
             <p>corriente</p>
             <input type="checkbox" className="checkbox"  name='corriente' value={filtered.corriente} onChange={onChangeMensaje}/>
           </div>
         </div>
         <div className="flexche">
         <h4 className=" ta-center">Precio</h4>
           <input className="inputf" placeholder="minimo" name="min" value={filtered.min} onChange={onChangeMensaje}/>
           - 
           <input className="inputf" placeholder="maximo" name="max" value={filtered.max} onChange={onChangeMensaje}/>
         </div>
         <div className="flexche">
           <h4 className=" ta-center" >Categoria</h4>
           <select name="categoria" className="select"   value={filtered.categoria} onChange={onChangeMensaje}>
            <option value=""></option>
              <option value="Electrodomesticos">Electrodomesticos</option>
              <option value="Mascotas">Mascotas</option>
              <option value="Repuestos">Repuestos</option>
              <option value="Implementos">Implementos</option>
              <option value="Maquillaje">Maquillaje</option>
            </select>
         </div>
         <div className="flexche">
         <h4 className="hdeproduc colorf">Costo de envio</h4>
           <p>Gratis</p>
           <input type="checkbox" className="checkbox" name='enviogratis' value={filtered.enviogratis} onChange={onChangeMensaje}/>
         </div>
         <button className='botonbusquedafilter' type='button' onClick={redirect}>buscar</button>
          <button className='botonbusquedafilter' type='button' onClick={limpiar}>Limpiar</button>
       </form>
        : null}



{(ordenarfilter === true)?
        
        <form className="formfilter">
        
        <h3 className="tamaño colorf">Ordenar</h3>
        <div className="flexche">
        <h4 className="hdeproduc colorf">Precio</h4>
          <div className="flexcher">
            <p >Mayor+</p>
            <input type="checkbox" className="checkbox" name='mayor' value={filtered.mayor} onChange={onChangeMensaje}/>
          </div>
          <div className="flexcher">
            <p >Menor -</p>
            <input type="checkbox" className="checkbox" name='menor' value={filtered.menor} onChange={onChangeMensaje}/>
          </div>
        </div>
    
      
        <div className="flexche">
        <h4 className="hdeproduc colorf">Fecha De Subida</h4>
          <div className="flexcher">
            <p >Actuales</p>
            <input type="checkbox" className="checkbox" onChange={onChangeMensaje}/>
          </div>
          <div className="flexcher">
            <p>Antiguos</p>
            <input type="checkbox" className="checkbox" onChange={onChangeMensaje}/>
          </div>
        </div>
        <button className='botonbusquedafilter' type='button' onClick={redirect}>buscar</button>
          <button className='botonbusquedafilter' type='button' onClick={limpiar}>Limpiar</button>
      </form>
       : null}

        
      </>
    );
  }
}

export default FilterCard;
