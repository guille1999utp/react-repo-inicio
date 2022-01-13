import React from 'react'

 const CajaMostrarProducto = ({history,produc}) => {
    const redirect = () => {
        history.push( `/producto/${produc.pid}`);
         }

    const productoa = produc.titulo.trim().slice(0,27);

    return (
        <div>
          <div className='carditem' onClick={redirect}>
           <img className='imginicio' src={produc.fotosdescripsion[0].secure_url} alt='img'></img>
             <p className='precioinicio'>{'$ ' + produc.detalles[0].Precio}</p>
            <p className='descuentoinicio'> {productoa}</p>
         <p className='enviogratisinicio'>{(produc.detalles[0].DomicilioIncluido === 'true')?'Envio Gratis':null}</p>
          </div>
         </div>
    )
}

export default CajaMostrarProducto;