import './Producto.css'

function Producto() {
  return (
    <div className='gridproducto'>
        <div className='fleximg'>
        <img className='fotoproducto' src='https://mfiles.alphacoders.com/849/thumb-849315.jpg' alt='producto'/>
        <div className='morefotos'>
        <img className='listmorefotos' src='https://th.bing.com/th/id/OIP.8uu1-Xja_qIE5F2ge5zyWQHaLT?pid=ImgDet' alt='producto'/>
        <img className='listmorefotos' src='https://th.bing.com/th/id/OIP.PH4ArjoOnTFboybCIfrOMAHaNu?' alt='producto'/>
        <img className='listmorefotos' src='https://th.bing.com/th?id=OIF.Xvl24aduC4vdMndoLG%2bSgg' alt='producto'/>
        <img className='listmorefotos' src='https://th.bing.com/th?id=OIF.ESDCrrq0U%2fT62IwipM4%2f%2bA' alt='producto'/>
        <img className='listmorefotos' src='https://th.bing.com/th?id=OIF.socMBLS6AIAEk%2bR19vR1tQ' alt='producto'/>
        <img className='listmorefotos' src='https://th.bing.com/th?id=OIF.jZJjdFROrRJB%2fY0s19om9w' alt='producto'/>
        </div>
        </div>

    <div className='infopro'>
        <h3> titulo de producto que se quiere comprar</h3>
        <h4>Detalles</h4>
        <div className='flexcara'>
        <p><strong>Año:</strong> 2021</p>
        <p><strong>Tamaño:</strong> 10x50</p>
        <p><strong>Peso:</strong> 10kg</p>
        <p><strong>Categoria:</strong> motos</p>
        <p><strong>Ubicaion:</strong> cartago</p>
        <p><strong>Distancia:</strong> 230m</p>
        <p><strong>Domicilio Incluido:</strong> si</p>
        <p><strong>Garantia:</strong> no</p>
        </div>
        <h4>Características del producto</h4>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</li>

        </ul>
    </div>


       <div className='infocom'>
    <h4>$50.000</h4>
    <p>Este articulo solo esta disponible en <strong>colombia</strong></p>
    <p>se entrega en promedio:<strong>30 minutos</strong> </p>
    <p className='disponiblecolor'><strong>Disponible</strong> </p>
    <p>Cantidad</p>
    <select name="select" className='cantidad'>
    <option value="value1">1</option>
    <option value="value2" >2</option>
    <option value="value3">3</option>
    <option value="value4">4</option>
    <option value="value5" >5</option>
    <option value="value6">6</option>
    <option value="value7">7</option>
    <option value="value8" >8</option>
    <option value="value9">9</option>
    <option value="value10">10</option>
    <option value="value11" >11</option>
    <option value="value12">12</option>
    </select>
    <button className='botoncompra amarillo'>agregar al carrito</button>
    <button className='botoncompra naranja'>comprar ya</button>
    <button className='listamia'>lista deseada</button>
    </div>
  
    </div>
  );
}

export default Producto;
