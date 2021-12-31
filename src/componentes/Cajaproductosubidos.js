import React,{useState,useContext} from 'react';
import { SocketContext } from '../redux/context/contextchat'
import Swal from 'sweetalert2'


const Cajaproductosubidos = ({Producto}) => {
    const {socket} = useContext(SocketContext);
    const [state, setState] = useState({
        titulo:'',
        Categoria:'Repuestos',
        Ubicaion:'Cartago',
        Domicilio: '',
        Garantia: '',
        Age: '2022',
        descripsion: ''
            });

    const eliminarproducto = () =>{

        socket.emit('productoeliminar',{
            uidfoto:Producto.fotosdescripsion,
            Producto
            });

         Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Foto Actualizada',
                showConfirmButton: false,
                timer: 1500
              })
    }
    return (
    <tr>
    <th scope="row"><img src={Producto.fotosdescripsion[0].secure_url}></img></th>
    <td>{Producto.titulo}</td>
    <td>
    <ul>
<li><b>Categoria: </b> {Producto.detalles[0].Categoria}</li>
<li><b>Ubicacion: </b> {Producto.detalles[0].Ubicaion}</li>
<li><b>Domicilio Incluido: </b> {(Producto.detalles[0].DomicilioIncluido)?'si':'no'}</li>
<li><b>Garantia: </b> {(Producto.detalles[0].Garantia)?'si':'no'}</li>
<li><b>Año: </b> {Producto.detalles[0].Age}</li>
</ul>
        </td>
    <td>{Producto.textdescripsion[0]}</td>
    <td><button type='button' className='botonproductoagregar add '> <i className='bx bx-pencil'></i></button><button type='button' onClick={eliminarproducto} className='botonproductoagregar delete'><i className='bx bxs-trash-alt' ></i></button></td>
  </tr>
    );
}
export default Cajaproductosubidos;
