import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()
const PrivateRoute = ({ component: Component, ...rest }) => {
    const LoginPage = <Redirect to='/' />
    const handleView = ({
        props,
    }) => {

        const view = <Component {...props} {...rest} />
        const cookie = cookies.get('manstuporct')
        if (!cookie) {
            return LoginPage
        }
        return view
    }

    return <Route
        {...rest}
        render={props => handleView({ props })}
    />
}

export default PrivateRoute