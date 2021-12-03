import { createContext} from 'react'
const initstate = {
    usuario : null,
    correo : null,
    jwt : null,
    ajustes: null,
}
const Contextusuario  = createContext({children});

 const Contextususario = () =>{
    return(
        <Contextusuario>
            {children}
        </Contextusuario>
    )
}
export default Contextususario