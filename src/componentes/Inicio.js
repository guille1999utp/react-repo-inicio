import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Inicio.css';
import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { Link  } from 'react-router-dom';
//useEffect para poder hacer responsive la carta
function Inicio ({history}) {
  const [Width, setWidth] = useState(window.innerWidth);  
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
      <div className='contendioinicio'>
     <div className='sliderbargrande'>
        <Slider {...settingsinicio}>
          <div>
            <img onClick={redirect} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcd4c9dc-c257-487e-9e0e-2259ea9de04c/d71nj5o-36f86266-bedc-4f3d-b030-aa21da16ea0c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9kY2Q0YzlkYy1jMjU3LTQ4N2UtOWUwZS0yMjU5ZWE5ZGUwNGMvZDcxbmo1by0zNmY4NjI2Ni1iZWRjLTRmM2QtYjAzMC1hYTIxZGExNmVhMGMuanBnIn1dXX0.4R6gSlv5hwFNfrcyr9jaDSa5PSkYnIxktfDswgZmwww' alt='img'></img>
          </div>
          <div>
          <img onClick={redirect} src='https://i.pinimg.com/originals/e6/42/42/e6424235cf1c3d8c2f800ed28e9ae1ea.png' alt='img'></img>
          </div>
          <div>
          <img  onClick={redirect} src='http://4.bp.blogspot.com/-TBC5e8CluEY/T1r67sL3-mI/AAAAAAAAEVY/aZVIb2l71fY/s1600/Descargar%252BFondos%252Bpara%252BTimeline%252BFacebook%252BGratis26.jpg' alt='img'></img>
          </div>
          <div>
          <img onClick={redirect} src='http://2.bp.blogspot.com/-7UTAnfeTtmQ/T1r6_OPFToI/AAAAAAAAEVo/KRU6KerssmE/s1600/Descargar%2BFondos%2Bpara%2BTimeline%2BFacebook%2BGratis28.jpg' alt='img'></img>
          </div>
          <div>
          <img onClick={redirect}  src='https://fotosparafacebook.es/wp-content/uploads/2016/05/fondo-negro-Fotosparafacebook.es-17.jpg' alt='img'></img>
          </div>
          <div>
          <img onClick={redirect} src='https://i.pinimg.com/originals/52/40/44/524044b5e2f473ca2a77f93793bdadaf.png' alt='img'></img>
          </div>
        </Slider>
      </div>


      <div className='margininiciotop'>
        <div className='flexinicio'>
        <h2>Repuestos Agregados Recientemente</h2>
        <Link  to='/productover' className='vermas' >Ver Mas</Link>
        </div>
        <Slider {...settings}>
          <div>
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

      <div className='marginslider'>
      <div className='flexinicio'>
      <h2>Ultimas Ofertas</h2>
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