import { useSelector } from 'react-redux';
import { horaMes } from '../helpers/horaMes';

function CajaChat({de, mensaje, fecha}) {
    const miusuario =  useSelector(yo => yo.infoUsuario.uid);

    if (de === miusuario ) {
        return (
            <>
          <div className="mensaje-amigo">
                    <div className="contenido">
                        <p>{ mensaje }</p>
                    </div>
                    <div className="flecha-derecha"></div>
                    <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
                    <div className="fecha">{ horaMes(fecha) }</div>
                </div>
            </>
          );
    }else if(mensaje.length > 0){
        return (
            <>
          <div className="mensaje-autor">
        <img src="https://microsofters.com/wp-content/uploads/2021/06/img19-scaled.jpg" alt="" className="foto"></img>
        <div className="flecha-izquierda"></div>
        <div className="contenido">
        { mensaje }
        </div>
        <div className="fecha">{ horaMes(fecha)  }</div>
        </div>
            </>
          );
    }else{
        return ""
    }
  
}
export default CajaChat;


