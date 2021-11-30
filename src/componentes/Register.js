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
    <div className='fondologin'>
  <form className='formre' onSubmit={ onSubmit } >
        <h4 className='i'>Registro</h4>
   <div>
   <label className='ajust'    for='nombre'>Nombres</label>
   <input autoComplete={'off'} id='nombre' className='inputr' placeholder='ingrese nombres' onChange={ onChangeNombre} name='nombre' required/>
   </div>
   <div className='gridform'>
   <label className='ajust'  for='apellidos'>Apellidos</label>
   <input autoComplete={'off'} id='apellidos' className='inputr' placeholder='ingrese apellidos' onChange={ onChangeApellido} name='apellidos' required/>
   </div>
   <div className='divmarginregister'>
   <label className='ajust'  for='fechanacimiento'>Fecha De Nacimiento</label>
   <input className='inputr' id='fechanacimiento' type='date' name='fechnacimiento' onChange={ onChangeFecha } required/>
   </div>
   <div className='gridform divmarginregister'>
   <label  className='ajust'  for='correo'>Correo</label>
  <input autoComplete={'off'} id='correo' className='inputr' type='email' placeholder='ingrese correo' onChange={ onChangeCorreo} name='correo' required/>
  </div>
  <div className='divmarginregister'>
   <label className='ajust'  for='contraseña'>Contraseña</label>
   <input autoComplete={'off'} id='contraseña' className='inputr' type='password' placeholder='ingrese contraseña' onChange={ onChangeContraseña} name='password' required/>
   </div>
   <div className='gridform divmarginregister'>
   <label className='ajust'  for='verificacion'>Verificar Contraseña</label>
   <input autoComplete={'off'} id='verificacion' className='inputr' type='password' placeholder='Repite la contraseña' onChange={ onChangeContraseñar} name='passwordrepetida' required/>
   </div>

   <button className='buttonregi' type='submit'>Registrarme</button>


   <h3 className='ya'>ya tienes cuenta?</h3>
   <a href='/login' className='as' >Ingresar</a>
    </form>
    </div>
  );
}

export default Register;
