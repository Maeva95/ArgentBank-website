import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <div>
            <h2>404</h2>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage