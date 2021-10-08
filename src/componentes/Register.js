import React, {useState} from 'react'
import './Register.css';
import axios from 'axios'



function Register() {

     const [state, setState] = useState({
     nombre: '',
     apellidos:'',
     correo:'',
     password:'',
     passwordrepetida:'',
     fechnacimiento:'',
     });


   const onSubmit = async (e) =>{
     if(state.password === state.passwordrepetida){
    const res = await axios({
      url:'http://localhost:4000/signup',
      method: 'POST',
      data: {
      nombre: state.nombre + ' '+ state.apellidos,
      correo: state.correo,
      password: state.password,
      fechnacimiento: state.fechnacimiento
      }
      });
      console.log(res);
      e.preventDefault();
     }
      
    }
  const  onChangeNombre =(e)=>{
       const {name, value} = e.target;
      setState({
      ...state, [name] : value
      });
     console.log(state);
      }
      const   onChangeApellido =(e)=>{
         
        const {name, value} = e.target;
        setState({
        ...state, [name] : value
        });
       console.log(state);
        }
        const  onChangeFecha = (e)=>{
          const {name, value} = e.target;
          setState({
          ...state, [name] : value
          });
         console.log(state);
          }
          const   onChangeCorreo =(e)=>{
            const {name, value} = e.target;
            setState({
            ...state, [name] : value
            });
           console.log(state);
            }
            const onChangeContraseña =(e)=>{
              const {name, value} = e.target;
              setState({
              ...state, [name] : value
              });
             console.log(state);
              }
              const onChangeContraseñar=(e)=>{
                const {name, value} = e.target;
                setState({
                ...state, [name] : value
                });
               console.log(state);
  }


  return (
    <>
  <form className='formre' onSubmit={ onSubmit } >
        <h4 className='i'>Iniciar Sesion</h4>
   <div >
   <h3 className='ajust'>Nombres</h3>
   <input className='inputr' placeholder='ingrese nombres' onChange={ onChangeNombre} name='nombre'/>
   </div>
   <div className='gridform'>
   <h3 className='ajust'>Apellidos</h3>
   <input className='inputr' placeholder='ingrese apellidos' onChange={ onChangeApellido} name='apellidos'/>
   </div>
   <div>
   <h3 className='ajust'>Fecha De Nacimiento</h3>
   <input className='inputr' type='date' name='fechnacimiento' onChange={ onChangeFecha }/>
   </div>
   <div className='gridform'>
   <h3 className='ajust'>Correo</h3>
  <input className='inputr' type='email' placeholder='ingrese correo' onChange={ onChangeCorreo} name='correo'/>
  </div>
  <div>
   <h3 className='ajust'>Contraseña</h3>
   <input className='inputr' type='password' placeholder='ingrese contraseña' onChange={ onChangeContraseña} name='password'/>
   </div>
   <div className='gridform'>
   <h3 className='ajust'>Verificar Contraseña</h3>
   <input className='inputr' type='password' placeholder='Repite la contraseña' onChange={ onChangeContraseñar} name='passwordrepetida'/>
   </div>

   <button className='buttonregi' type='submit'>Registrarme</button>


   <h3 className='ya'>ya tienes cuenta?</h3>
   <a href='/login' className='as' >Ingresar</a>
    </form>
    </>
  );
}

export default Register;
