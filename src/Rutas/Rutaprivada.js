import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const Rutaprivada = ({
   isAuthenticated,
   component: Component,
   ...rest
}) => {
    return (
       <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated.online )
                    ? <Component { ...props } />
                    : <Redirect to="/login" />
            )} 
        />
    )
}
