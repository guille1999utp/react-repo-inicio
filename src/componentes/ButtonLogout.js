import React from 'react'
import './ButtonLogout.scss';
import { useDispatch, useSelector } from 'react-redux';
import { regenerate } from '../redux/actions/auth';
import { regeneratechat } from '../redux/actions/chat';

export default function ButtonLogout() {
    const dispatch = useDispatch();
  const onchange = () =>{
      localStorage.removeItem('token');
   dispatch(regenerate());
   dispatch(regeneratechat());

  }

  const state = useSelector(state => state.infoUsuario);

    return (
        (state.online === true)?
        <button type='button' className='buttoncerrarsesion' onClick={onchange}>
            <i className='bx bx-log-out' ></i>
        </button>:null
    )
}
