import "./Listprod.css";
import Cards from "./Cards";
import FilterCard from "./FilterCard";
import Footer from "./Footer";
import { useParams } from 'react-router-dom'
import React, {useCallback,useEffect,useState} from "react";
import { fetchstoken } from '../helpers/fetchmetod';
import CircularProgress from "./CircularProgress";

export default function Listprod({history,location}) {
  let { busqueda } = useParams();
  const [productos, setState] = useState([])
  const [carga, setCarga] = useState(true);


  const cargarProductos = useCallback(
    async() => {
      const producto = await fetchstoken(`busqueda/${busqueda}${location.search}`);
      if(producto.ok){
        setState(producto.filtervar); 
        setCarga(false);
        return  true;
      }else{
        return  false;
      }
    }, [setState,busqueda,location],
  )
 
  useEffect(() => {
    cargarProductos();
  }, [cargarProductos])
  return (
    <>
    {(carga)? <CircularProgress/> :
    <>
    <div className="pagineCard">
        <FilterCard history={history} opciones={busqueda}/>
        <div className="Cardcompleta">
          <h1 className="margin-bottom">Productos Encontrados</h1>
          <div className={(productos.length === 0)?"flex centertextnoencontrado":'flex'}>
            {
              (productos.length === 0)?<h2 className="h2noopcion">No se encontraron Resultados</h2>:null
            }
            {productos.map((produc) => (
              <Cards
                key={produc.pid}
                id={produc.pid}
                history={history}
                image={(produc.fotosdescripsion[0]?.secure_url)?produc.fotosdescripsion[0].secure_url:"https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg"}
                mobile={produc.titulo}
                actual_price={produc.detalles[0].Precio}
                domicilio={produc.detalles[0].DomicilioIncluido}
              />
            ))}
          </div>
        
        </div>
      </div>
      <Footer/>
      </>}
    </>
  );
}
