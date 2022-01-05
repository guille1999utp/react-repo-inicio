import React from 'react';
import Swal from 'sweetalert2'

const ParrafosProducto = ({parrafo, index, state, miuid, socket}) => {

     const eliminarproducto = () =>{
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
                socket.emit('productoparrafoeliminar',{
                    pid:state.pid,
                    index
                    });
        
                 Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Foto eliminada con exito',
                        showConfirmButton: false,
                        timer: 1500
                      })
            }
          })
    } 

    return (
        <li> <div className="flexrow">{parrafo} {(state.de === miuid)?<i className='bx bx-x-circle' onClick={eliminarproducto} ></i>:null}</div> </li>
    );
}
export default ParrafosProducto;