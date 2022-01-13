import React from 'react'
import "./CircularProgress.scss";

 const CircularProgress = () => {
    return (
        <div className="wrap">
            <div className='hola'>
        <div className="loader"></div>
        <div className="loaderbefore"></div>
        <div className="circular"></div>
        <div className="circular another"></div>
      <div className="text">Cargando...</div>
      </div>
      </div>
      
    )
}
export default CircularProgress;