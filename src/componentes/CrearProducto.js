import React from 'react'
import './CrearProducto.scss';

export const CrearProducto = () => {
    return (
    <>
        <div className='form-agregar-producto'>
            <div>
            <i className='bx bxs-folder-plus' ></i>
           <table summary="Mis Productos">
  <caption>Mis Productos </caption>
  <thead>
    <tr>
      <th scope="col">Imagen</th>
      <th scope="col">Titulo</th>
      <th scope="col">Detalles</th>
      <th scope="col">Descripsion</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src='https://c8.alamy.com/compes/ebhgaj/un-monton-de-coloridas-formas-cuadradas-sobre-un-fondo-abstracto-negro-ebhgaj.jpg'></img></th>
      <td>titulo de producto que se quiere comprar</td>
      <td>
      <ul>
  <li><b>Categoria: </b> Mascotas</li>
  <li><b>Ubicacion: </b> cartago</li>
  <li><b>Domicilio Incluido: </b> Si</li>
  <li><b>Garantia: </b> No</li>
  <li><b>Año: </b> 2021</li>
</ul>
          </td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
      <td><button type='button' className='botonproductoagregar add '> <i className='bx bx-pencil'></i></button><button type='button' className='botonproductoagregar delete'><i className='bx bxs-trash-alt' ></i></button></td>
    </tr>
    <tr>
      <th scope="row"><img src='https://previews.123rf.com/images/eugenius777/eugenius7771610/eugenius777161000057/64283057-fondo-geom%C3%A9trico-abstracto-de-tonos-marrones-rombo-y-formas-cuadradas.jpg'></img></th>
      <td>titulo de producto que se quiere comprar</td>
      <td>
      <ul>
  <li><b>Categoria: </b> Mascotas</li>
  <li><b>Ubicacion: </b> cartago</li>
  <li><b>Domicilio Incluido: </b> Si</li>
  <li><b>Garantia: </b> No</li>
  <li><b>Año: </b> 2021</li>
</ul>
          </td>
      <td>London Calling</td>
      <td><button type='button' className='botonproductoagregar add '><i className='bx bx-pencil'></i></button><button type='button' className='botonproductoagregar delete'> <i className='bx bxs-trash-alt' ></i></button></td>
    </tr>
    <tr>
      <th scope="row"><img src='https://www.dzoom.org.es/wp-content/uploads/2011/08/insp-cuadradas-5.jpg'></img></th>
      <td>titulo de producto que se quiere comprar titulo de producto que se quiere comprar</td>
      <td>
      <ul>
  <li><b>Categoria: </b> Mascotas</li>
  <li><b>Ubicacion: </b> cartago</li>
  <li><b>Domicilio Incluido: </b> Si</li>
  <li><b>Garantia: </b> No</li>
  <li><b>Año: </b> 2021</li>
</ul>
          </td>
      <td>No More Heroes</td>
      <td><button type='button' className='botonproductoagregar add '><i className='bx bx-pencil'></i></button><button type='button' className='botonproductoagregar delete'><i className='bx bxs-trash-alt' ></i></button></td>

    </tr>
  </tbody>
 {/*  <tfoot>
    <tr>
      <th scope="row" colspan="2"><img src='https://image.freepik.com/vector-gratis/gradiente-formas-cuadradas-geometricas-sobre-fondo-oscuro_23-2148424228.jpg'></img></th>
      <td colspan="2">77</td>
    </tr>
  </tfoot> */}
</table>
</div>

        </div>

        </>
    )
}
