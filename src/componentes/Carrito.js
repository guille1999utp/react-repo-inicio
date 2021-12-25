import React ,{useState} from "react";
import "./Carrito.scss";
import { Link } from "react-router-dom";
import Cajacarrito from "./Cajacarrito";
import Footer from "./Footer";

const Carrito = () => {
  let infocarrito = [
    {
      id: 1,
      producto:
        "computador gamer",
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
     precio: 25000,
      urlfoto:'https://www.alkosto.com/medias/192876259719-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNjU5MDJ8aW1hZ2UvcG5nfGltYWdlcy9oYzEvaGQ1LzkwNzg5NDYwMDUwMjIucG5nfGRjMzVlZjBkYzgwN2Y2ZWZhZGQxNmIxMjhhODg3NzU5NmMwNjNkN2I4OTc1NzMzY2NjNTA3YTQ3OTUxNjA2NGQ'
    },
    {
      id: 2,
      producto:"computador gamer",
      precio: 36000,
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      urlfoto:'https://http2.mlstatic.com/D_NQ_NP_826178-MCO44786840309_022021-O.jpg'
    },
    {
      id: 3,
      producto:
        "computador gamer",
        precio: 65000,
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      urlfoto:'https://previews.123rf.com/images/yemelyanov/yemelyanov1708/yemelyanov170800087/83850071-gradiente-de-fondo-abstracto-textura-horizontal-larga-para-el-dise%C3%B1o.jpg'
    },
    {
      id: 4,
      producto:
        "computador gamer",
        precio: 14000,
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      urlfoto:'https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/70037232_2.jpg'
    },
    {
      id: 5,
      producto:
        "computador gamer",
        precio: 45000,
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      urlfoto:'https://tecnobits.net/wp-content/uploads/2018/08/RAZER-BLADE-1555.jpg'
    },
  ];
  const [carrito, setCarrito] = useState(infocarrito);


  return (
    <>
    <div className="fondocarrito">
      <div className="conteinerproductoseleccionado">
        <div className="flexro">
          <Link to="/carrito/" className="botoncarrito">
            Carrito({carrito.length})
          </Link>
          <Link to="/carrito/guardado" className="botoncarrito">
            Guardado(1)
          </Link>
        </div>
        <hr></hr>
        {carrito.map((carro) =>(
        <Cajacarrito producto={carro.producto} precio={carro.precio} descripsion={carro.descripsion} urlfoto={carro.urlfoto} id={carro.id} carrito={carrito} setCarrito={setCarrito}></Cajacarrito>
        ))}
        {(carrito.length === 0)?
        <>
        <div className='comprarbotoncarrito'>Selecciona Tus Productos Favoritos <Link to="/inicio" className="botoncarrito">
            Ver productos 
          </Link></div>
        
        </>
        : null}
        {(carrito.length > 0)?
        <button className='comprarbotoncarrito'>Comprar</button>
        : null}
        </div>
        <Footer/>

    </div>
    </>
  );
};
export default Carrito;
