import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Producto.scss'
import React, {useState, useEffect,useCallback,useContext} from 'react'
import Slider from "react-slick";
import { Link  } from 'react-router-dom';
import Footer from "./Footer";
import { useParams } from 'react-router-dom'
import { fetchstoken } from '../helpers/fetchmetod';
import { UploadPhoto } from "../helpers/cloudinaryUpload";
import { SocketContext } from '../redux/context/contextchat'
import Swal from 'sweetalert2'
import {useSelector, useDispatch } from 'react-redux';
import { añadirfotosproducto , cargarparrafoproducto, resetpro} from '../redux/actions/productos';
import CajaProductoFotos from "./CajaProductoFotos";
import ParrafosProducto from "./ParrafosProductos";
import CajaMostrarProducto from "./CajaMostrarProducto"
import CircularProgress from "./CircularProgress";


function Producto({history}) {
  const dispatch = useDispatch();

  const miuid =  useSelector(yo => yo.infoUsuario.uid);
  const estado =  useSelector(fotos => fotos.productos);
  const fotos = estado.fotosproducto;
  const parrafosprodcuto = estado.parrafosproducto;
  let { id } = useParams()
  const {socket} = useContext(SocketContext);
  const [categoriaencontradas, setCategoria] = useState([]);
  const [carga, setCarga] = useState(true);
  const [productosuser, setProductosUser] = useState([]);
  const [Width, setWidth] = useState(window.innerWidth);  
  const [Parrafoactivo, setParrafoActivo] = useState(false);  
  const [Parrafo, setParrafo] = useState('');  
  const [Foto, setFoto] = useState({});  
  const [agregarfotos, setAgregarfotos] = useState({
    secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
    public_id: 0
  });
  const [state, setState] = useState({
    ok: true,
    textdescripsion: [
        "asd"
    ],
    fotosdescripsion: [
        {
            secure_url: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/142227-phones-review-iphone-x-review-photos-image1-ahdsiyvum0.jpg',
        }
    ],
    titulo: "ada",
    detalles: [
        {
            Age: "2021",
            Categoria: "Repuestos",
            Ubicaion: "Pereira",
            DomicilioIncluido: false,
            Garantia: false
        }
    ]
})
const onChangeMensaje = (e) => {
  setParrafo(e.target.value);
};


const agregarparrafo = () =>{
  setParrafoActivo(!Parrafoactivo);
}

  const cargarProductos = useCallback(
    async() => {
      const infoproducto = await fetchstoken(`producto/${id}`);
      const productosuser = await fetchstoken(`productosdeluser/${infoproducto.de}`);
      const buscarcategoria = await fetchstoken(`mostrar/${infoproducto.detalles[0].Categoria}`);
      if(infoproducto.ok && buscarcategoria.ok && productosuser.ok){
        setCategoria(buscarcategoria.filtervar);
        setState(infoproducto);
        setProductosUser(productosuser.producto);
        dispatch(añadirfotosproducto(infoproducto.fotosdescripsion));
        dispatch(cargarparrafoproducto(infoproducto.textdescripsion));
        setFoto(infoproducto.fotosdescripsion[0]);
        setCarga(false);
        return  true;
      }else{
        return  false;
      }
    }, [setState,dispatch,id],
  )
  

    useEffect(() => {
      cargarProductos();
      return ()=>{
        dispatch(resetpro());
      }
    }, [cargarProductos,dispatch])


    const onFilefoto  = () =>{
      document.querySelector('#fileperfilmas').click();
    }

    const onFilesavefoto  = async(e) =>{
      const file = e.target.files[0];
      setAgregarfotos(file);
    }


    const onSubmit = async() => {
      if(fotos.length < 5){
        try{
          const url = (agregarfotos.secure_url !== "https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp")? await UploadPhoto(agregarfotos):agregarfotos;
          socket.emit('subirfotoadicionalproducto',{
            url,
            pid: id
               })
            setAgregarfotos({
              secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
              public_id: 0
            });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Foto Subida',
        showConfirmButton: false,
        timer: 1500
      })
      }catch(err){
        console.log(err)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Sucedio un Error Al Subir La Foto',
          showConfirmButton: false,
          timer: 1500
        })
      }
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se Aceptan Mas de 5 fotos',
          showConfirmButton: false,
          timer: 1500
        })
      }
    };

   
 const cambiarTamaño = ()=>{
    setWidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',cambiarTamaño);
    return ()=>{
      window.removeEventListener('resize', cambiarTamaño)
   }
 })
  
  const settings = {
    arrows: (Width > 355)? true:false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: (Width > 1348)? 5:(Width > 1057)? 4:(Width > 740)? 3:(Width > 500)? 2:1,
    slidesToScroll:(Width > 1348)? 5:(Width > 1057)? 4:(Width > 740)? 3:(Width > 500)? 2:1
  };
  
    const redirect = () => {
      history.push( `/producto/4`);
       }
       const compraredireccion = () => {
        history.push( `/comprar/${state.pid}`);
         }

     const onOverFoto = (url) =>{
       setFoto({
        secure_url:url.nativeEvent.srcElement.currentSrc });
     }

     const reset  = () =>{
      setAgregarfotos({
        secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1640536316/orgeial7kefv2dzsdqqt.webp",
        public_id: 0
      })
      }
  
      const guardarcarrito = () =>{
        socket.emit('guardarcarrito',{
          pid: id
             })
        socket.on('guardarcarrito',(res)=>{
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
          if(res.ok){
            Toast.fire({
              icon: 'success',
              title: res.msg
            })
          }else{
            Toast.fire({
              icon: 'error',
              title: res.msg
            })
          }
        })
         
      }
      const resetParrafo  = () =>{
        setParrafoActivo(false);
        setParrafo('')
        }

        const onParrafoSubmit = async() => {
          if(parrafosprodcuto.length <3){
            try{
              socket.emit('subirparrafonuevo',{
                Parrafo,
                pid: id
                   })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se Añadio el Parrafo con Exito',
            showConfirmButton: false,
            timer: 1500
          })
          }catch(err){
            console.log(err)
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Sucedio un Error Al Subir El Parrafor',
              showConfirmButton: false,
              timer: 1500
            })
          }
          }else{
            resetParrafo();
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'No se Aceptan Mas de 3 Parrafos',
              showConfirmButton: false,
              timer: 1500
            })
          } 
          setParrafoActivo(false);
          setParrafo('')
  
        };
    
  return (
  <>
  {(carga)? <CircularProgress/> : <>
  <div>
    <div className='gridproducto'>
    <input type="file" id="fileperfilmas" aria-label="File browser example" onChange={onFilesavefoto} ></input>
    <div>
        <div className='fleximg'>
          <div className='cajafotoproducto'>
          {
              (Foto?.secure_url)?<img id="fotoOver" className='fotoproducto' src={Foto.secure_url} alt='producto'/>
              :<img id="fotoOver" className='fotoproducto' src="https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg" alt='producto'/>
            }
         </div>
         <div className='morefotos'>
          {fotos.map((foto) =>(
            <CajaProductoFotos url={foto} func={onOverFoto} pid={id} state={state} />
          ))}
         
          {(state.de === miuid)?<i className='bx bxs-plus-square' onClick={onFilefoto}></i>:null}
          </div>
          <div className="centerboton">
           {(agregarfotos.public_id !== 0)?<button type='button' className='botonguardarperfil' onClick={onSubmit}>Guardar</button>: null}
           {(agregarfotos.public_id !== 0)?<button type='button' className='botonguardarperfil' onClick={reset}>Cancelar</button>: null}
           </div>
         <div className='infopro'>
            <h3>{state.titulo}</h3>
             <h4>Detalles</h4>
             <div className='flexcara'>
             <p><strong>Año:</strong> {state.detalles[0].Age}</p>
             <p><strong>Categoria:</strong> {state.detalles[0].Categoria}</p>
             <p><strong>Ubicaion:</strong> {state.detalles[0].Ubicaion}</p>
             <p><strong>Domicilio Incluido:</strong>{(state.detalles[0].DomicilioIncluido === 'true')?'si':'no'}</p>
             <p><strong>Garantia:</strong> {(state.detalles[0].Garantia === 'true')?'si':'no'}</p>
             <p><strong>Cantidad disponible:</strong> {state.detalles[0].Cantidad }</p>
             </div>
           <h4>Características del producto</h4>
          <ul>
            {parrafosprodcuto.map((parrafo, i)=>{
              return <ParrafosProducto parrafo={parrafo} state={state} miuid={miuid} index={i} socket={socket}/>
                  })}
           </ul>
           <div className="flexrow">
           {(state.de === miuid && Parrafoactivo === false)?<button className="buttonagregarparrafo" type="button" onClick={agregarparrafo}>
             Agregar Parrafo <i className='bx bx-plus-medical' ></i>
             </button>:null}
             </div>
             {
               (Parrafoactivo === true)?<textarea maxLength={600} value={Parrafo} className="textareaparrafo" onChange={onChangeMensaje}></textarea>:null
             }
             <div className="centerboton">
           {(Parrafoactivo === true)?<button type='button' className='botonguardarperfil' onClick={onParrafoSubmit} >Guardar</button>: null}
           {(Parrafoactivo === true)?<button type='button' className='botonguardarperfil' onClick={resetParrafo}>Cancelar</button>: null}
           </div>
        </div>
      </div>
    </div>

       <div className='infocom'>
    <h4>${state.detalles[0].Precio}</h4>
    <p>Este articulo solo esta disponible en <strong>colombia</strong></p>
    <p>se entrega en promedio:<strong>30 minutos</strong> </p>
    <p className='disponiblecolor'><strong>Disponible</strong> </p>
    <p>Cantidad</p>
    <select name="select" className='cantidad'>
    <option value="value1">1</option>
    <option value="value2" >2</option>
    <option value="value3">3</option>
    <option value="value4">4</option>
    <option value="value5" >5</option>
    <option value="value6">6</option>
    <option value="value7">7</option>
    <option value="value8" >8</option>
    <option value="value9">9</option>
    <option value="value10">10</option>
    <option value="value11" >11</option>
    <option value="value12">12</option>
    </select>
    {(state.de !== miuid)?<button className='botoncompra amarillo' type="button" onClick={guardarcarrito}>agregar al carrito</button>:null}
    {(state.de !== miuid)?<button className='botoncompra naranja' onClick={compraredireccion}>comprar ya</button>:null}

    <button className='listamia'>Compartir</button>
    </div>
  
    </div>
    <hr></hr>
    </div>

    <div className='marginslider'>
      <h2>Productos Relacionados <Link  to='/productover' className='vermas' >Ver Mas</Link></h2>
      <Slider {...settings}>
         {categoriaencontradas?.map((produc) => (
         <CajaMostrarProducto history={history} produc={produc}/>
        ))}

          <div >
          <div className='carditem' onClick={redirect}>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem' onClick={redirect}>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem' onClick={redirect}>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
        </Slider>
      </div>


   <hr></hr>
{(productosuser.length >= 5)?

<div className='marginslider'>
<div className='flexinicio'>
<h2>Productos del Vendedor</h2>
  <Link to='/productover' className='vermas' >Ver Mas</Link>
  </div>
  <Slider {...settings}>
  {productosuser?.map((produc) => (
         <CajaMostrarProducto history={history} produc={produc}/>
        ))}

  </Slider>
  
</div>:null
}
<Footer/>
</>
 }
    </>
  );
}

export default Producto;
