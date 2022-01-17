import React from 'react'

 const CajaMostrarProducto = ({history,produc}) => {
    const redirect = () => {
        history.push( `/producto/${produc.pid}`);
         }

    const productoa = produc.titulo.trim().slice(0,27);

    return (
        <div>
          <div className='carditem' onClick={redirect}>
            {
              (produc.fotosdescripsion[0]?.secure_url)?<img className='imginicio' src={produc.fotosdescripsion[0].secure_url} alt='img'></img>
              :<img className='imginicio' src="https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg" alt='img'></img>
            }
             <p className='precioinicio'>{ (produc.detalles[0]?.Precio)?'$ ' + parseInt(produc.detalles[0].Precio*1.15): '$ 0'}</p>
            <p className='descuentoinicio'> {productoa}</p>
         <p className='enviogratisinicio'>{(produc.detalles[0].DomicilioIncluido === 'true')?'Envio Gratis':null}</p>
          </div>
         </div>
    )
}

export default CajaMostrarProducto;