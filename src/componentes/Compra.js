import React,{useEffect,useState,useCallback} from 'react'
import './Compra.scss'
import MercadoPagoIntegracion from "./MercadoPagoIntegracion";
import {useSelector } from 'react-redux';
import CircularProgress from "./CircularProgress";
import Footer from "./Footer";
import { fetchstoken } from '../helpers/fetchmetod';
import { useParams } from 'react-router-dom'
import ParrafosProducto from "./ParrafosProductos";

 const Compra = () => {
    const miuid =  useSelector(yo => yo.infoUsuario.uid);
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
                Garantia: false,
                Precio:10000
            }
        ]
    })


    const [carga, setCarga] = useState(true);
    const [pagar, setpagar] = useState(true);

    const [datos, setDatos] = useState({
        nombre:'',
        telefono:'',
        direccion:'',
        anadirinfo:'',
        ciudad:'',
        estado:'',
        postal:'',
        recordar:false,
        number: '',
        email: '',
        Barrio: '',
        street_number: '',
        floor: '1',
        apartment: '',
      });
      
    let { id } = useParams()

    const cargarProductos = useCallback(
        async() => {
          const infoproducto = await fetchstoken(`producto/${id}`);
          if(infoproducto.ok){
            setState(infoproducto);
            setCarga(false);
            return  true;
          }else{
            return  false;
          }
        }, [setState,id],
      );

      useEffect(() => {
        cargarProductos();
      }, [cargarProductos])


      const onChangeMensaje = (e) => {
        const target = e.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name = target.name;
        setDatos({
          ...datos,
          [name]: value,
        });
      };

      const onSubmit = async(e) => {
        e.preventDefault();
        setpagar(false);
          };


    return (
        <>
        { (carga)? <CircularProgress/>: <>
        <div className='cajacompra'>
       <div className='fleximg'>
          <div className='cajafotoproducto'>
          {
              (state.fotosdescripsion[0]?.secure_url)?<img id="fotoOver" className='fotoproducto' src={state.fotosdescripsion[0]?.secure_url} alt='producto'/>
              :<img id="fotoOver" className='fotoproducto' src="https://res.cloudinary.com/dmgfep69f/image/upload/v1642034441/tu86rbwmkpjsyk3vcvr0.jpg" alt='producto'/>
            }
         </div>
         <div className='infopro'>
            <h1>{'$ '+ state.detalles[0].Precio}</h1>
            <br></br>
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
            {state.textdescripsion.map((parrafo, i)=>{
              return <ParrafosProducto parrafo={parrafo} state={state} miuid={miuid} index={i} />
                  })}
           </ul>
    
        </div>

</div>

<div>
        <fieldset>
               <legend>Datos de Compra</legend>
       <h3>Agregar una direccion</h3>
       <form onSubmit={onSubmit}>
           <label> Nombre del comprador ( Completo ) </label>
           <input type='text' className='inputds' placeholder='nombre' name='nombre' value={datos.nombre} onChange={onChangeMensaje}></input>
           <label> Numero de telefono </label>
           <input type='number' placeholder='telefono' className='inputds' name='telefono' value={datos.telefono} onChange={onChangeMensaje} ></input>
           <label> Correo Electronico </label>
           <input type='email' placeholder='email' className='inputds' name='email' value={datos.email} onChange={onChangeMensaje} ></input>
           <div className='flexrow'>
            <div className='flexcolumn'>
           <label> Barrio </label>
           <input type='text' className='inputds' placeholder='Barrio' name='Barrio' value={datos.Barrio} onChange={onChangeMensaje}></input>
           </div>
           <div className='flexcolumn'>
           <label> Numero de la  Casa </label>
           <input type='text' className='inputds' placeholder='Numero Casa' name='street_number' value={datos.street_number} onChange={onChangeMensaje}></input>
           </div>
           </div>
           <div className='flexrow'>
            <div className='flexcolumn'>
           <label> Piso de entrega </label>
           <input type='text' className='inputds' placeholder='Piso de entrega' name='floor' value={datos.floor} onChange={onChangeMensaje}></input>
           </div>
           <div className='flexcolumn'>
           <label> Numero Apartamento </label>
           <input type='text' className='inputds' placeholder='Apartamento' name='apartment' value={datos.apartment} onChange={onChangeMensaje}></input>
           </div>
           </div>
           
           <input type='text' className='inputds' placeholder='puntos claves a la hora de entrega' name='anadirinfo' value={datos.anadirinfo} onChange={onChangeMensaje} ></input>
           <div className='flexrow'>
            <div className='flexcolumn'>
           <label> Ciudad </label>
           <input type='text' className='inputds' name='ciudad' value={datos.ciudad} onChange={onChangeMensaje}></input>
           </div>
           <div className='flexcolumn'>
           <label>estado</label>
           <select className='selected' name='estado' value={datos.estado} onChange={onChangeMensaje}>

               <option>cartago</option>
               <option>zaragoza</option>
               <option>pereira</option>
           </select >
           </div>
           </div>
           <label> Codigo Postal </label>
           <input className='inputds' type='text' name='postal' value={datos.postal} onChange={onChangeMensaje}></input>
           <div>
           <label className='recordatoriodireccio'> Recordar direccion </label>
           <input type='checkbox' className='checkcompra' name='recordar' value={datos.recordar} onChange={onChangeMensaje}></input>
          </div>
          {(pagar)?<button type='submit' className='buttoncomprar'>Solicitar Pago</button>:<MercadoPagoIntegracion items={datos}/>}

       </form>
       </fieldset>
       </div>
        </div>
        <Footer/>


        </>
    }
</>

    )
}
export default Compra