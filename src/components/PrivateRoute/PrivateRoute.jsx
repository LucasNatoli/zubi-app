import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, page: Page, ...rest }) => {
    const page = Page
    return (
    <Route {...rest} render={props => {
        console.log("PrivateRoute", props)    
        return (
        localStorage.getItem('user')
            ? <Component {...props} page={page} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}} />
)}

export default PrivateRoute