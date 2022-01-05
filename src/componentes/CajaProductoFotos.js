import React,{useContext} from 'react'
import Swal from 'sweetalert2'
import { SocketContext } from '../redux/context/contextchat'
import { useSelector} from 'react-redux';

const CajaProductoFotos = ({url, func,pid, state}) => {
    const {socket} = useContext(SocketContext);
    const miusuario =  useSelector(yo => yo.infoUsuario);

    const deleteimagen = () =>{
        Swal.fire({
          title: 'estas seguro?',
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Sí, bórralo!'
        }).then((result) => {
          if (result.isConfirmed) {
            socket.emit('fotoproductoeliminar', {pid ,url});
            Swal.fire(
              'Eliminado!',
              'eliminado con exito',
              'success'
            )
          }
        })
       }
    return (
        <img key={url.public_id} src={url.secure_url} alt='producto' onClick={(miusuario.uid === state.de )?deleteimagen: func}  className='listmorefotos'></img>
    )
}
export default CajaProductoFotos
