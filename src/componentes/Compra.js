import React from 'react'
import './Compra.css'

 const Compra = () => {
    return (
        <>
        <div className='cajacompra'>
        <div>
       <h1> Selecciona direccion del Propietario</h1>
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
           <select >
               <option>cartago</option>
               <option>zaragoza</option>
               <option>pereira</option>
           </select>
           <label> Codigo Postal </label>
           <input className='inputds' type='text'></input>
           <div>
           <label className='recordatoriodireccio'> Recordar direccion </label>
           <input type='checkbox' className='checkcompra'></input>
          </div>
          <button>Pagar</button>
       </form>
       </div>
       



       <div class="containere">
    <div class="price">
        <h1>Awesome, that's $99.99 !</h1>
    </div>
    <div class="card__container">
        <div class="card">
            <div class="row paypal">
                <div class="left">
                    <input id="pp" type="radio" name="payment" />
                    <div class="radio"></div>
                    <label for="pp">Paypal</label>
                </div>
                <div class="right">
                    <img src="http://i68.tinypic.com/2rwoj6s.png" alt="paypal" />
                </div>
            </div>
            <div class="row credit">
                <div class="left">
                    <input id="cd" type="radio" name="payment" />
                    <div class="radio"></div>
                    <label for="cd">Debit/ Credit Card</label>
                </div>
                <div class="right">
                    <img src="http://i66.tinypic.com/5knfq8.png" alt="visa" />
                    <img src="http://i67.tinypic.com/14y4p1.png" alt="mastercard" />
                    <img src="http://i63.tinypic.com/1572ot1.png" alt="amex" />
                    <img src="http://i64.tinypic.com/2i92k4p.png" alt="maestro" />
                </div>
            </div>
            <div class="row cardholder">
                <div class="info">
                    <label for="cardholdername">Name</label>
                    <input placeholder="e.g. Richard Bovell" id="cardholdername" type="text" />
                </div>
            </div>
            <div class="row number">
                <div class="info">
                    <label for="cardnumber">Card number</label>
                    <input id="cardnumber" type="text" pattern="[0-9]{16,19}" maxlength="19" placeholder="8888-8888-8888-8888"/>
                </div>
            </div>
            <div class="row details">
                <div class="left">
                    <label for="expiry-date">Expiry</label>
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
                <div class="right">
                    <label for="cvv">CVC/CVV</label>
                    <input type="text" maxlength="4" placeholder="123"/>
                    <span data-balloon-length="medium" data-balloon="The 3 or 4-digit number on the back of your card." data-balloon-pos="up">i</span>
                </div>
            </div>
        </div>
    </div>
    <div class="button">
        <button type="submit"><i class="ion-locked"></i> Confirm and Pay</button>
    </div>
</div>

        </div>
        </>
    )
}
export default Compra