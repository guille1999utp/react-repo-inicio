import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Inicio.css';
import React from "react";
import Slider from "react-slick";
import { Link  } from 'react-router-dom';
//useEffect para poder hacer responsive la carta 
function Inicio () {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll:5
      };
     return (
     <>
     <div className='contendioinicio'>
      <div className='margininiciotop'>
        <div className='flexinicio'>
        <h2>Repuestos Agregados Recientemente</h2>
        <Link  to='/productover' >Ver Mas</Link>
        </div>
        <Slider {...settings}>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
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
      
      <div className='marginslider'>
      <div className='flexinicio'>
      <h2>Ultimas Ofertas</h2>
        <Link to='/productover' >Ver Mas</Link>
        </div>
        <Slider {...settings}>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
          <img className='imginicio' src='https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg' alt='img'></img>
          <div className='flexinicio'>
          <p className='precioinicio'>$ 456.321</p>
          <p className='descuentoinicio'> 13% OFF</p>
          </div>
          <p className='enviogratisinicio'>Envio Gratis</p>
          </div>
          </div>
          <div >
          <div className='carditem'>
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
      </>
    );
  }

  export default Inicio;