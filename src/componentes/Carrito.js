import React ,{useState} from "react";
import "./Carrito.css";
import { Link } from "react-router-dom";
import Cajacarrito from "./Cajacarrito";

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
      urlfoto:'https://falabella.scene7.com/is/image/FalabellaCO/13166500_1?wid=800&hei=800&qlt=70'
    },
    {
      id: 4,
      producto:
        "computador gamer",
        precio: 14000,
      descripsion: 'Jajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
      urlfoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIUoORhUjAt4aoZIWn6VYAJebLwoDQPdXUw&usqp=CAU'
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
        {(carrito.length > 0)?
        <button className='comprarbotoncarrito'>Comprar</button>
        : null}
        </div>

    </div>
  );
};
export default Carrito;
