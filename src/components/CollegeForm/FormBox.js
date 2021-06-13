import React from 'react'
import Form from './Form'
import Preview from './Preview'

export default function FormBox() {
    return (
        <div className="row m-0 mt-2 justify-content-center">
            <div className="col-md-5 col-12 mt-2">           
                <div className="container bg-dark text-white" style={{borderRadius:"10px"}}>
                    <h3 className="text-center text-white">Details</h3>
                    <Form/>
                </div>
            </div>
            <div className="col-md-7 col-12 mt-2">
                <div className="container p-0 previewCont text-white" >
                <h3 className="text-center text-white">Preview</h3>
                <Preview/>
                </div>
            </div>
        </div>
    )
}
