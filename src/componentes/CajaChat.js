
function CajaChat({mensaje, fecha, enviado}) {
    if (enviado === 1) {
        return (
            <>
          <div className="mensaje-amigo">
                    <div className="contenido">
                        { mensaje }
                    </div>
                    <div className="flecha-derecha"></div>
                    <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
                    <div className="fecha">enviado hace { fecha }</div>
                </div>
            </>
          );
    }else{
        return (
            <>
          <div className="mensaje-autor">
        <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
        <div className="flecha-izquierda"></div>
        <div className="contenido">
        { mensaje }
        </div>
        <div className="fecha">enviado hace { fecha }</div>
        </div>
            </>
          );
    }
  
}
export default CajaChat;


