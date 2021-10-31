import './Chat.css';

function Chat() {
  return (
    <>
    <div className='fondochat'>
    <div className='fondonegrochat'></div>
    <div className='cajachat'>
        <div className='usuariosactivos'>
          <div className='chatperfil'>
          <i class='bx bx-user' ></i>
          <div className='iconoschatfondo'>
          <i class='bx bxs-chat chaticon'></i>
          <i class='bx bx-dots-vertical-rounded menuchat'></i>
          </div>
          </div>
          <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>
          <div className='hrdivchat'></div>
          <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>
       
          <div className='hrdivchat'></div>
            <div className='usuariochatperfil'>
          <div className='fotousuario'>
          </div>
          <div className='perfilyultimo'>
           <span>nicolas pinga</span>
           <p> <i class='bx bx-check-double'></i>ultimo mensaje desde ...</p>
          </div>
          <p className='horachat'>10:40pm</p>
          </div>
           

        </div>
        <div className='mensajesusuarios'>
          <div className='paletacomandochat'>
            <div className='correcionpaletachat'>
              <div className='fotousuariouser'>
              </div>
              <p className='nombrechat'>nicolas pinga</p>
          </div>
          <i className='bx bx-dots-vertical-rounded menuchat'></i>
          </div>
          <div className='chatuses'>
        
          <div className="mensaje-autor">
            <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
            <div className="flecha-izquierda"></div>
            <div className="contenido">
                Hola mi Jenny!!! Cómo estás??
            </div>
            <div className="fecha">Enviado hace tres minutos</div>
        </div>

        <div className="mensaje-amigo">
            <div className="contenido">
                Jajaja que onda señor Rivas, como está?? <br />
                Yo estoy muy bien, cansada como siempre por la serie jeje :/
            </div>
            <div className="flecha-derecha"></div>
            <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
            <div className="fecha">Enviado hace tres minutos</div>
        </div>
        
        <div className="mensaje-autor">
            <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
            <div className="flecha-izquierda"></div>
            <div className="contenido">
                Hola mi Jenny!!! Cómo estás??
            </div>
            <div className="fecha">Enviado hace tres minutos</div>
        </div>

        <div className="mensaje-amigo">
            <div className="contenido">
                Jajaja que onda señor Rivas, como está?? <br />
                Yo estoy muy bien, cansada como siempre por la serie jeje :/
            </div>
            <div className="flecha-derecha"></div>
            <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
            <div className="fecha">Enviado hace tres minutos</div>
        </div>
        
        <div className="mensaje-autor">
            <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
            <div className="flecha-izquierda"></div>
            <div className="contenido">
                Hola mi Jenny!!! Cómo estás??
            </div>
            <div className="fecha">Enviado hace tres minutos</div>
        </div>

        <div className="mensaje-amigo">
            <div className="contenido">
                Jajaja que onda señor Rivas, como está?? <br />
                Yo estoy muy bien, cansada como siempre por la serie jeje :/
            </div>
            <div className="flecha-derecha"></div>
            <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
            <div className="fecha">Enviado hace tres minutos</div>
        </div>
        

    </div>
          <div className='paletachat'>
          <i class='bx bx-paperclip'></i>
          <input type='text' className='decorationpaleta' placeholder='Escribir Mensaje'></input>
          <i className='bx bxs-send'></i>
          </div>
        </div>
    </div>
    
   
    </div>
    </>
  );
}

export default Chat;
