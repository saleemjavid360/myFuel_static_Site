import React from 'react'
import { Link } from "react-router-dom";
import notFound from "../../assets/images/404.png";

const NotFound = () => {
    return (
        <div className='vh-50 d-flex flex-column justify-content-center w-100 py-4'>
            <div className='col-12 d-flex flex-column align-items-center gap-3 my-4 my-md-5'>
                <img
                    className=""
                    src={notFound}
                    alt="MyFuelAi"
                    width={300}
                />
                <h1 className='fw-bolder fs-5'>Page is missing...</h1>
                <p className='text-muted fs-6'>We could not find the page you were looking for.</p>
                <Link to="/">
                    <button
                        type="button"
                        className="custom-btn border border-secondary bg-transparent"
                    >
                        Back to Home
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default NotFound