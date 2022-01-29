import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Inicio.scss';
import React, {useCallback,useEffect,useState} from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import CajaMostrarProducto from "./CajaMostrarProducto"
import { Link  } from 'react-router-dom';
import { fetchstoken } from '../helpers/fetchmetod';
import CircularProgress from "./CircularProgress";

//useEffect para poder hacer responsive la carta
function Inicio ({history}) {
  const [carga, setCarga] = useState(true);
  const [Width, setWidth] = useState(window.innerWidth);  
  const [productos, setState] = useState([])

 const cambiarTamaño = ()=>{
    setWidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',cambiarTamaño);
    return ()=>{
      window.removeEventListener('resize', cambiarTamaño)
   }
 })
  

 const cargarProductos = useCallback(
  async() => {
    const categoria1 = await fetchstoken(`mostrar/Repuestos`);
    const categoria2 = await fetchstoken(`mostrar/Farmacia`);
    const categoria3 = await fetchstoken(`mostrar/Mascotas`);
    const categoria4 = await fetchstoken(`mostrar/Estanquillos`);
   console.log(categoria1,categoria2,categoria3,categoria4)
    if(categoria4.ok && categoria3.ok && categoria2.ok && categoria1.ok ){
      setCarga(false);
      setState({ 
        Repuestos:categoria1.filtervar,
        Farmacia:categoria2.filtervar,
        Mascotas:categoria3.filtervar,
        Estanquillos:categoria4.filtervar
      });
      return  true;
    }else{
      return  false;
    }
  }, [setState],
)

useEffect(() => {
  cargarProductos();
}, [cargarProductos])



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: (Width > 1348)? 5:(Width > 1057)? 4:(Width > 740)? 3:(Width > 500)? 2:1,
    slidesToScroll:(Width > 1348)? 5:(Width > 1057)? 4:(Width > 740)? 3:(Width > 500)? 2:1
  };
  const settingsinicio = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }
    const redirect = () => {
      history.push( `/producto/2`);
       }

     return(
     <>
      {(carga)? <CircularProgress/> :
      <>
      <div className='contendioinicio'>
     <div className='sliderbargrande'>
        <Slider {...settingsinicio}>
          <div>
            <img onClick={redirect} src='https://image.freepik.com/vector-gratis/banner-tiendas-belleza-online-concepto-comercio-electronico-compras-moviles-internet-ilustracion-dibujos-animados-vector-interior-salon-cosmetica-tienda-online-pantalla-portatil_107791-4006.jpg' alt='img'></img>
          </div>
          <div>
          <img onClick={redirect} src='https://media.istockphoto.com/vectors/social-commerce-banner-web-icon-for-ecommerce-and-social-media-vector-id1172148385' alt='img'></img>
          </div>
          <div>
          <img  onClick={redirect} src='https://www.camaramedellin.com.co/Portals/0/Images/JE399_masempresario_Bannerhome.jpg?ver=2021-11-02-085802-780' alt='img'></img>
          </div>
        
        </Slider>
      </div>


      <div className='margininiciotop'>
        <h2>Repuestos <Link  to='/productover' className='vermas' >Ver Mas</Link></h2>
        <Slider {...settings}>
        {productos.Repuestos?.map((produc) => (
          <CajaMostrarProducto history={history} produc={produc}/>
            )
            )}

        </Slider>
      </div>

      <div className='marginslider'>
      <h2>Mascotas <Link  to='/productover' className='vermas' >Ver Mas</Link></h2>
      <Slider {...settings}>
        {productos.Mascotas?.map((produc) => (
         <CajaMostrarProducto history={history} produc={produc}/>
        )
            )}

        </Slider>
      </div>
      
      <div className='marginslider'>
      <h2>Farmacias <Link  to='/productover' className='vermas' >Ver Mas</Link></h2>
      <Slider {...settings}>
        {productos.Farmacia?.map((produc) => (
         <CajaMostrarProducto history={history} produc={produc}/>
        )
            )}
        </Slider>
      </div>
      <div className='marginslider'>
      <h2>Estanquillos <Link  to='/productover' className='vermas' >Ver Mas</Link></h2>
      <Slider {...settings}>
        {productos.Estanquillos?.map((produc) =>(
         <CajaMostrarProducto history={history} produc={produc}/>
        )
            )}
        </Slider>
      </div>


      <div className='marginslider'>
        <h2>Marcas y Empresas Aliadas</h2>
        <Slider {...settings}>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
          <div >
          <div className='carditemarca'>
          <img src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          </div>
          </div>
        </Slider>
        </div>

        </div>

        <Footer/>
        </>}
      </>
    );
  }

  export default Inicio;