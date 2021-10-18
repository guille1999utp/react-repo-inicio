import './FilterCard.css'
function FilterCard() {
  return (
    <>
    <form className='formfilter' >

     <h3 className='tamaño colorf'>Busqueda</h3>
     <h4 className='hdeproduc colorf'>Estado del Producto</h4>
     <div className='flexche'>
    <div className='flexche'>
    <p className='colorf'>nuevo</p>
    <input type='checkbox'  className='checkbox' /> 
    </div>
    <div className='flexche'>
    <p className='colorf'>usado</p>
    <input type='checkbox' className='checkbox'/> 
    </div>
    </div>
    <div className='flexche'>
    <h4 className='hdeproduc colorf'>Modelo</h4>
    <select name="select" className='select'>
    <option value="value1">Value 1</option>
    <option value="value2">Value 2</option>
    <option value="value3">Value 3</option>
    </select>
    </div>
    <div className='flexche'>
    <h4 className='hdeproduc colorf'>Ubicacion</h4>
    <select name="select" className='select'>
    <option value="value1">Value 1</option>
    <option value="value2" >Value 2</option>
    <option value="value3">Value 3</option>
    </select>
    </div>
    <h4 className='hdeproduc colorf'>Vendedor</h4>
    <div className='flexche'>
    <div className='flexche'>
    <p className='colorf'>Local</p>
    <input type='checkbox' className='checkbox'/> 
    </div>
    <div className='flexche'>
    <p className='colorf'>corriente</p>
    <input type='checkbox' className='checkbox'/> 
    </div>
    </div>
    <h4 className='hdeproduc colorf'>Precio</h4>
    <div className='flexche'>
    <input className='inputf' placeholder='minimo' name='minimo' />
    -
    <input className='inputf' placeholder='maximo' name='maximo' />
    </div>
    <div className='flexche'>
    <h4 className='hdeproduc colorf'>Categoria</h4>
    <select name="select" className='select'>
    <option value="value1">Value 1</option>
    <option value="value2" >Value 2</option>
    <option value="value3">Value 3</option>
    </select>
    </div>
    <h4 className='hdeproduc colorf'>Costo de envio</h4>
    <div className='flexche'>
    <p className='colorf'>Gratis</p>
    <input type='checkbox' className='checkbox'/> 
    </div>
    </form>
    </>
  );
}

export default FilterCard;