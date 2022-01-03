import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Producto.scss'
import React, {useState, useEffect,useCallback} from 'react'
import Slider from "react-slick";
import { Link  } from 'react-router-dom';
import Footer from "./Footer";
import { useParams } from 'react-router-dom'
import { fetchstoken } from '../helpers/fetchmetod';

function Producto({history}) {

  let { id } = useParams()

  const [Width, setWidth] = useState(window.innerWidth);  
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

  const cargarProductos = useCallback(
    async() => {
      const infoproducto = await fetchstoken(`producto/${id}`);
      if(infoproducto.ok){
        setState(infoproducto);
        setFoto(infoproducto.fotosdescripsion[0]);
        return  true;
      }else{
        return  false;
      }
    }, [setState,setFoto,id],
  )
    useEffect(() => {
      cargarProductos();
    }, [cargarProductos])


    const onFilefoto  = () =>{
      document.querySelector('#filedes').click();
    }

    const onFilesavefoto  = async(e) =>{
      const file = e.target.files[0];
      setAgregarfotos(file);
    }








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
        history.push( `/comprar`);
         }

     const onOverFoto = (url) =>{
       setFoto({
        secure_url:url.nativeEvent.srcElement.currentSrc });
     }


  return (
  <>
<div>
 
    <div className='gridproducto'>
    <div>
        <div className='fleximg'>
          <div className='cajafotoproducto'>
        <img id="fotoOver" className='fotoproducto' src={Foto.secure_url} alt='producto'/>
        </div>
        <div className='morefotos'>
          {state.fotosdescripsion.map((foto) =>(
            <img className='listmorefotos' src={foto.secure_url} alt='producto' onClick={onOverFoto}/>
          ))}
        <i className='bx bxs-plus-square'></i>
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
        </div>
        <h4>Características del producto</h4>
        <ul>
            <li>{state.textdescripsion[0]}</li>
        </ul>
    </div>
    </div>
    </div>

       <div className='infocom'>
    <h4>$50.000</h4>
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
    <button className='botoncompra amarillo'>agregar al carrito</button>
    <button className='botoncompra naranja' onClick={compraredireccion}>comprar ya</button>
    <button className='listamia'>Compartir</button>
    </div>
  
    </div>
    <hr></hr>
    </div>


  <div className='marginslider'>
<div className='flexinicio'>
<h2>Mas Productos Relacionados</h2>
  <Link to='/productover' className='vermas' >Ver Mas</Link>
  </div>
  <Slider {...settings}>
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

<div className='marginslider'>
<div className='flexinicio'>
<h2>Mas Productos Relacionados</h2>
  <Link to='/productover' className='vermas' >Ver Mas</Link>
  </div>
  <Slider {...settings}>
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

<Footer/>

    </>
  );
}

export default Producto;
