import React, {useCallback,useContext,useEffect,useState} from 'react'
import './CrearProducto.scss';
import { UploadPhoto } from "../helpers/cloudinaryUpload";
import { SocketContext } from '../redux/context/contextchat'
import { useSelector,useDispatch} from 'react-redux';
import Swal from 'sweetalert2'
import { fetchCToken } from "../helpers/fetchmetod";
import { cargarproductos } from "../redux/actions/productos";
import Cajaproductosubidos from "./Cajaproductosubidos";



export const CrearProducto = () => {
 const dispatch = useDispatch();
const miusuario =  useSelector(yo => yo.infoUsuario);
const productos =  useSelector(productos => productos.productos.productos);
const {socket} = useContext(SocketContext);
const [NewProducto, setNewProducto] = useState({
        titulo:'',
        Categoria:'Repuestos',
        Ubicaion:'Cartago',
        Domicilio: '',
        Garantia: '',
        Age: '2022',
        descripsion: ''
});

const obtenerproductos = useCallback(
  async() => {
    const ordenes = await fetchCToken('crearproducto');
    if(!ordenes.ok){
    return ;
    }
    dispatch(cargarproductos(ordenes.producto))
  }, [dispatch],
)
useEffect( ()=>{
  obtenerproductos()
 },[obtenerproductos])
const [urlmas, setUrl] = useState({
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640965190/hdacrvney49wogm85fcn.jpg",
    public_id: 0
  });
const [agregar, setagregar] = useState(false)
const onChangeMensaje = (e) => {
    const { name, value } = e.target;
    setNewProducto({
      ...NewProducto,
      [name]: value,
    });
  };

  const cambiar = () =>{
      setagregar(!agregar);
      setNewProducto({
        titulo:'',
        Categoria:'Repuestos',
        Ubicaion:'Cartago',
        Domicilio: '',
        Garantia: '',
        Age: '2022',
        descripsion: ''
    })
    setUrl(
      {
      secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640965190/hdacrvney49wogm85fcn.jpg",
      public_id: 0
  })
  }
  const onFilesave  = async(e) =>{
    const file = e.target.files[0];
    setUrl(file);
  }
  const onFile  = () =>{
    document.querySelector('#fileproducto').click();
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    if(NewProducto.titulo.length>0 && NewProducto.descripsion.length>0){
  try{
    const url = (urlmas.secure_url !== "https://res.cloudinary.com/dmgfep69f/image/upload/v1640965190/hdacrvney49wogm85fcn.jpg")? await UploadPhoto(urlmas):urlmas;
    socket.emit('producto',{
      url,
      uid: miusuario.uid,
      producto: NewProducto
      })
  setUrl(
    {
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640965190/hdacrvney49wogm85fcn.jpg",
    public_id: 0
}
);
setagregar(!agregar);
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Foto Actualizada',
  showConfirmButton: false,
  timer: 1500
})
}catch(err){
  console.log(err)
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Sucedio un Error',
    showConfirmButton: false,
    timer: 1500
  })
}

}else{
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Llenar Titulo y Descripsion',
    showConfirmButton: false,
    timer: 1500
  })
}
  };
    return (
    <>
        <div className='form-agregar-producto'>
            <div>
            <i className={agregar?'bx bxs-message-square-x':'bx bxs-folder-plus'} onClick={cambiar}></i>
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
      {(agregar === true)?
       <tr>
      <th scope="row"><img className='hover' src='https://res.cloudinary.com/dmgfep69f/image/upload/v1640965190/hdacrvney49wogm85fcn.jpg' onClick={onFile} alt='productousers'></img></th>
      <td><textarea className='textproducto' value={NewProducto.titulo} name='titulo' maxLength={100} onChange={onChangeMensaje}></textarea></td>
      <td>
      <ul>
  <li><b>Categoria: </b><select name="Categoria" onChange={onChangeMensaje} value={NewProducto.Categoria}>
<option>Repuestos</option>
<option>Mascotas</option>
<option>Maquillaje</option>
<option>Electrodomesticos</option>
<option>Tecnologia</option>
</select></li>
  <li><b>Ubicacion: </b> <select name="Ubicaion" onChange={onChangeMensaje} value={NewProducto.Ubicaion}>
<option>Cartago</option>
<option>Pereira</option>
<option>Manizales</option>
</select></li>
  <li><b>Domicilio Incluido: </b>  <select name="Domicilio" onChange={onChangeMensaje} value={NewProducto.Domicilio}>
<option value={true}>Si</option>
<option value={false}>No</option>
</select></li>
  <li><b>Garantia: </b>   <select name="Garantia" onChange={onChangeMensaje} value={NewProducto.Garantia}>
<option value={true}>Si</option>
<option value={false}>No</option>
</select></li>
  <li><b>Año: </b>   <select name="Age" onChange={onChangeMensaje} value={NewProducto.año}>
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
</select></li>
</ul>
          </td>
      <td><textarea className='textproducto' value={NewProducto.descripsion} name='descripsion' maxLength={800} onChange={onChangeMensaje}></textarea></td>
      <td><button type='submit' className='botonproductoagregar add ' onClick={onSubmit}>Publicar</button></td>
    </tr>:null
      }
      {(productos.length > 0)?
              productos.map((producto) =>(
                <Cajaproductosubidos key={producto.pid} Producto={producto}/>
              ))
            : null}
  
  </tbody>
 {/*  <tfoot>
    <tr>
      <th scope="row" colspan="2"><img src='https://image.freepik.com/vector-gratis/gradiente-formas-cuadradas-geometricas-sobre-fondo-oscuro_23-2148424228.jpg'></img></th>
      <td colspan="2">77</td>
    </tr>
  </tfoot> */}
</table>

</div>
<input type="file" id="fileproducto" aria-label="File browser example" onChange={onFilesave} ></input>
        </div>

        </>
    )
}
