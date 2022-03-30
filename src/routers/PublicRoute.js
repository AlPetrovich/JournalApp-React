import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {

    
  return (
    <Route {...rest }
        component={ (props)=>(
            ( isAuthenticated)
            ? (<Redirect to="/" />) /* //si esta autenticado no es el objetivo una ruta publica */
            : (<Component {...props} />) /* //si quiere acceder a una ruta publica no habra problema */
            
        )}
    />
  )
}



PublicRoute.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
