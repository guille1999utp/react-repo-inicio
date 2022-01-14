import React,{useEffect,useState} from 'react'
import './Compra.scss'
import MercadoPagoIntegracion from "./MercadoPagoIntegracion";

 const Compra = () => {
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


    return (
        <>
        <MercadoPagoIntegracion/>
        <div className='cajacompra'>
        <div>
        <fieldset>
               <legend>Datos de Compra</legend>
       <h3>Agregar una direccion</h3>
       <form>
           <label> Nombre del comprador ( Completo ) </label>
           <input type='text' className='inputds' placeholder='nombre' ></input>
           <label> Numero de telefono </label>
           <input type='text' placeholder='telefono' className='inputds' ></input>
           <label> Direccion </label>
           <input type='text' className='inputds' placeholder='direccion' ></input>
           <input type='text' className='inputds' placeholder='puntos claves a la hora de entrega' ></input>
           <label> Ciudad </label>
           <input type='text' className='inputds' ></input>
           <label>estado</label>
           <select className='selected'>
               <option>cartago</option>
               <option>zaragoza</option>
               <option>pereira</option>
           </select >
           <label> Codigo Postal </label>
           <input className='inputds' type='text'></input>
           <div>
           <label className='recordatoriodireccio'> Recordar direccion </label>
           <input type='checkbox' className='checkcompra'></input>
          </div>
       </form>
       </fieldset>
       </div>
       



       <div className="containere">
    <div className="price">
        <h1>Comprar Producto a $104.500</h1>
    </div>
    <div className="card__container">
        <div className="cardtarjeta">
            <div className="row paypal">
                <div className="left">
                    <input id="pp" type="radio" name="payment" />
                    <div className="radio"></div>
                    <label for="pp">Paypal</label>
                </div>
                <div className="right">
                {(Width > 700)? <img src="https://www.paymentmedia.com/gallery/5ade47cb5cc8fpaypal_623.jpg" alt="paypal" />: null}
                   
                </div>
            </div>
            <div className="row credit">
                <div className="left">
                    <input id="cd" type="radio" name="payment" />
                    <div className="radio"></div>
                    <label for="cd">Debit/ Credit Card</label>
                </div>

                {(Width > 700)? 
                <div className="right">
                <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png" alt="visa" />
               <img src="https://cdn.pixabay.com/photo/2017/08/10/14/02/visa-2623015_960_720.png" alt="mastercard" />
               <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="maestro" />
               <img src="https://es.seaicons.com/wp-content/uploads/2017/02/diners-club-international-icon.png" alt="amex" />
                </div>
                :null}


            </div>
            <div className="row cardholder">
                <div className="info">
                    <label for="cardholdername">Nombre</label>
                    <input placeholder="e.g. Richard Bovell" id="cardholdername" type="text" />
                </div>
            </div>
            <div className="row number">
                <div className="info">
                    <label for="cardnumber">Card number</label>
                    <input id="cardnumber" type="text" pattern="[0-9]{16,19}" maxlength="19" placeholder="8888-8888-8888-8888"/>
                </div>
            </div>
            <div className="row details">
                <div className="left">
                    <label for="expiry-date">Expiracion</label>
                    <select id="expiry-date">
                        <option>MM</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <span>/</span>
                     <select id="expiry-date">
                        <option>YYYY</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                    </select>
                </div>
                <div className="right">
                    <label for="cvv">CVC/CVV</label>
                    <input type="text" maxlength="4" placeholder="123"/>
                </div>
            </div>
        </div>
    </div>
    <div className="button">
        <button type="submit"><i className="ion-locked"></i> Comprar Ahora</button>
    </div>
</div>

        </div>
        </>
    )
}
export default Compra