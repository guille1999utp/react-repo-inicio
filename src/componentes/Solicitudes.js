import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Cajasolicitudes from "./Cajasolicitudes";
import './Solicitudes.css';
export default function Solicitudes() {
    let infocarrito = [
        {
          id: 1,
          producto:
            "computador gamer ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie",
          descripsion: 'Jajaja qu,e onda ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie bie señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
          urlfoto:'https://www.alkosto.com/medias/192876259719-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNjU5MDJ8aW1hZ2UvcG5nfGltYWdlcy9oYzEvaGQ1LzkwNzg5NDYwMDUwMjIucG5nfGRjMzVlZjBkYzgwN2Y2ZWZhZGQxNmIxMjhhODg3NzU5NmMwNjNkN2I4OTc1NzMzY2NjNTA3YTQ3OTUxNjA2NGQ',
          fechasubida: new Date('Jul 12 2011')
        },
        {
          id: 2,
          producto:
            "computador gamer ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie",
          descripsion: 'Jajaja qu,e onda ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie bie señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
          urlfoto:'https://http2.mlstatic.com/D_NQ_NP_826178-MCO44786840309_022021-O.jpg',
          fechasubida: new Date('Jul 12 2011')
        },
        {
          id: 3,
          producto:
            "computador gamer ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie",
          descripsion: 'Jajaja qu,e onda ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie bie señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
          urlfoto:'https://falabella.scene7.com/is/image/FalabellaCO/13166500_1?wid=800&hei=800&qlt=70',
          fechasubida: new Date('Jul 12 2011')
        },
        {
          id: 4,
          producto:
          "computador gamer ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie",
        descripsion: 'Jajaja qu,e onda ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie bie señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
        urlfoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIUoORhUjAt4aoZIWn6VYAJebLwoDQPdXUw&usqp=CAU',
          fechasubida: new Date('Jul 12 2011')
        },
        {
          id: 5,
          producto:
          "computador gamer ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie",
        descripsion: 'Jajaja qu,e onda ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy ajaja qu,e onda señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bie bie señor Rivas, como está Yo estoy muy bien cansada como siempre por la serie jeje Yo estoy muy bien cansada como siempre por la serie jeje ',
        urlfoto:'https://tecnobits.net/wp-content/uploads/2018/08/RAZER-BLADE-1555.jpg',
          fechasubida: new Date('Jul 12 2011')
        },
      ];
      const [solicitudes] = useState(infocarrito);
    return (
        
    <div className="fondocarrito">
    <div className="conteinerproductoseleccionado">
    <div className="flexro">
          <p className="botoncarrito">
            Ultimas Solicitudes ({solicitudes.length})
          </p>
        </div>
        <hr></hr>
      {solicitudes.map((solicitud) =>(
      <Cajasolicitudes producto={solicitud.producto} descripsion={solicitud.descripsion} urlfoto={solicitud.urlfoto}></Cajasolicitudes>
      ))}
      {(solicitudes.length === 0)?
      <>
      <div className='comprarbotoncarrito'>No Hay Productos Solicitados <Link to="/inicio" className="botoncarrito">
          Ver productos 
        </Link></div>
      
      </>
      : null}
      {(solicitudes.length > 0)?
      <button className='comprarbotoncarrito'>Ver mas</button>
      : null}
      </div>

  </div>
    )
}
