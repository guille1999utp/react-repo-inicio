import React,{useContext} from 'react'
import Swal from 'sweetalert2'
import { SocketContext } from '../redux/context/contextchat'
import { useSelector} from 'react-redux';

export const Fotorusuario = ({uidfoto,urlfoto}) => {
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
            socket.emit('fotousereliminar', {uidfoto ,uid: miusuario.uid});
            Swal.fire(
              'Eliminado!',
              'eliminado con exito',
              'success'
            )
          }
        })
       }
    return (
        <img key={uidfoto} src={urlfoto} alt='imagelocal' onClick={deleteimagen}></img>

    )
}
