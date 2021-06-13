import React from 'react'
import Form from './Form'

export default function FormBox() {
    return (
        <div className="row m-0 mt-2 justify-content-center">
            <div className="col-md-5 col-12">           
                <div className="container bg-dark text-white">
                    <h3 className="text-center text-white">Details</h3>
                    <Form/>
                </div>
            </div>
            <div className="col-md-7 col-12">
                <div className="container bg-light">
                        <h1>HI</h1>
                </div>
            </div>
        </div>
    )
}
