import './FilterCard.css'
function FilterCard() {
  return (
    <div  className='divfilterflex'>
    <form className='formfilter'>
     <h3 className='tamaño colorf'>Busqueda</h3>
     <h4 className='hdeproduc colorf'>Estado del Producto</h4>
     <div className='flexche'>
    <div className='flexche'>
    <p className='mr-5'>nuevo</p>
    <input type='checkbox'  className='checkbox' /> 
    </div>
    <div className='flexche'>
    <p className='mr-5'>usado</p>
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
    <p className='mr-5'>Local</p>
    <input type='checkbox' className='checkbox'/> 
    </div>
    <div className='flexche'>
    <p className='mr-5'>corriente</p>
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
    <p className='mr-5'>Gratis</p>
    <input type='checkbox' className='checkbox'/> 
    </div>
    </form>
    <hr></hr>
    </div>
  );
}

export default FilterCard;
