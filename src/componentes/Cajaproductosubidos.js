import React,{useState,useContext} from 'react';
import { SocketContext } from '../redux/context/contextchat'
import Swal from 'sweetalert2'
import { UploadPhoto } from "../helpers/cloudinaryUpload";

const Cajaproductosubidos = ({Producto,history}) => {
    const {socket} = useContext(SocketContext);
    const initialstate = Producto;
    const [state, setState] = useState(initialstate);
    const [Modificar, setModificar] = useState(false);
    const [urlmas, setUrl] = useState(Producto.fotosdescripsion[0]);
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
                socket.emit('productoeliminar',{
                    uidfoto:Producto.fotosdescripsion,
                    Producto
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

    const redirect = () => {
      history.push( `/producto/${Producto.pid}`);
       }

    const botonmodificar = () =>{
      setModificar(!Modificar);
      if(false === Modificar){
        setState(initialstate);
      }
    }
    const guardar = async() =>{
      if (Modificar === true) {
        let url = null;
        if(((!!urlmas.public_id)?urlmas.public_id:null) === initialstate.fotosdescripsion[0].public_id || urlmas.public_id === 0){ 
         }else{
          url = await UploadPhoto(urlmas);
          setUrl({
            secure_url: url.secure_url,
            public_id: url.public_id
        })
         }
        socket.emit('productomodificar',{
          Producto:state,
          url
          });
        
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Informacion Guardada'
          })
          
          setModificar(!Modificar)
    }  
    }
    const onChangeMensaje = (e) => {
        const { name, value } = e.target;
        setState({
          ...state,
          [name]: value,
        });
      };
      const onChangedetalles= (e) => {
        const { name, value } = e.target;
        setState({
          ...state,
          detalles:[{...state.detalles[0],[name]: value}],
        });
      };

    
      const onFile  = () =>{
        Swal.fire({
          title: 'Quieres cambiar la foto?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '¡Sí, Editar!'
        }).then((result) => {
          if (result.isConfirmed) {
            document.querySelector(`#fileproductoeditar${Producto.pid}`).click();
          }
        })
      }
      const onFilesave  = async(e) =>{
        const file =  e.target.files[0];
        setUrl(file);
      }
    return (
      <>
    <tr>
    <th scope="row"><img alt={ `imagenproductomodificado${Producto.pid}`} className='hover' src={Producto.fotosdescripsion[0].secure_url} onClick={(Modificar === true)?onFile:redirect}></img></th>
    {(Modificar === false)?<td>{Producto.titulo}</td>:null}
    {(Modificar === true)?<td><textarea className='textproducto' value={state.titulo} name='titulo' maxLength={100} onChange={onChangeMensaje}></textarea></td>:null}
    <td>
    <ul>
 {(Modificar === false)?<li><b>Categoria: </b> {Producto.detalles[0].Categoria}</li>:null}
 {(Modificar === true)?<li><b>Categoria: </b><select name="Categoria" onChange={onChangedetalles} value={state.detalles[0].Categoria}>
<option>Repuestos</option>
<option>Mascotas</option>
<option>Maquillaje</option>
<option>Electrodomesticos</option>
<option>Tecnologia</option>
</select></li>:null}
{(Modificar === false)?<li><b>Ubicacion: </b> {Producto.detalles[0].Ubicaion}</li>:null}
{(Modificar === true)?<li><b>Ubicacion: </b> <select name="Ubicaion" onChange={onChangedetalles} value={state.detalles[0].Ubicaion}>
<option>Cartago</option>
<option>Pereira</option>
<option>Manizales</option>
</select></li>:null}
{(Modificar === false)?<li><b>Domicilio Incluido: </b> {(Producto.detalles[0].DomicilioIncluido)?'si':'no'}</li>:null}
{(Modificar === true)?<li><b>Domicilio Incluido: </b>  <select name="DomicilioIncluido" onChange={onChangedetalles} value={!!state.detalles[0].DomicilioIncluido}>
<option value={true}>Si</option>
<option value={false}>No</option>
</select></li>:null}
{(Modificar === false)?<li><b>Garantia: </b> {(Producto.detalles[0].Garantia)?'si':'no'}</li>:null}
{(Modificar === true)?<li><b>Garantia: </b>   <select name="Garantia" onChange={onChangedetalles} value={!!state.detalles[0].Garantia}>
<option value={true}>Si</option>
<option value={false}>No</option>
</select></li>:null}
{(Modificar === false)?<li><b>Año: </b> {Producto.detalles[0].Age}</li>:null}
{(Modificar === true)?<li><b>Año: </b>   <select name="Age" onChange={onChangedetalles} value={state.detalles[0].Age}>
<option>2011</option>
<option>2012</option>
<option>2013</option>
<option>2014</option>
<option>2015</option>
<option>2016</option>
<option>2017</option>
<option>2018</option>
<option>2019</option>
<option>2020</option>
<option>2021</option>
<option>2022</option>
</select></li>:null}
{(Modificar === false)?<li><b>Cantidad Disponible:  </b> {Producto.detalles[0].Cantidad}</li>:null}
{(Modificar === true)?<li><b>Cantidad Disponible: </b>   <select name="Cantidad" onChange={onChangedetalles} value={state.detalles[0].Cantidad}>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
</select></li>:null}
{(Modificar === false)?<li><b>Precio:  </b> {Producto.detalles[0].Precio}</li>:null}
{(Modificar === true)?<li><b>Precio: </b> <input type='number' placeholder='Precio' name='Precio' onChange={onChangedetalles} value={state.detalles[0].Precio}></input> </li>:null}
</ul>
        </td>
        {(Modificar === false)?<td>{Producto.textdescripsion}</td>:null}
    {(Modificar === true)?<td><textarea className='textproducto' value={state.textdescripsion} name='textdescripsion' maxLength={800} onChange={onChangeMensaje}></textarea></td>:null}
    {(Modificar === false)?<td><button onClick={botonmodificar} type='button' className='botonproductoagregar add '> <i className='bx bx-pencil'></i></button><button type='button' onClick={eliminarproducto} className='botonproductoagregar delete'><i className='bx bxs-trash-alt' ></i></button></td>:null}
    {(Modificar === true)?<td><button onClick={guardar} type='button' className='botonproductoagregar add '>Guardar</button><button onClick={botonmodificar} type='button' className='botonproductoagregar delete'> cancelar</button></td>:null}
  </tr>
  <input type="file" id= { `fileproductoeditar${Producto.pid}`} className='fileproductoeditar' aria-label="File browser example" onChange={onFilesave} ></input>
</>
    );
}
export default Cajaproductosubidos;
