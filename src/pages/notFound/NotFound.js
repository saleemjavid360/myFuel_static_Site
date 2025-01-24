import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='vh-100 text-center'>
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    )
}

export default NotFound