import React from 'react'
import Form from './Form'
import Preview from './Preview'
const downloadImage = () =>{
    window.scrollTo(0,0);
    window.html2canvas(window.document.querySelector("#printMe")).then(canvas => {
		let a = window.document.createElement('a'); 
		window.document.body.appendChild(a); 
        
		a.download = "test.png"; 
		a.href =  canvas.toDataURL();
		a.click();
	});
}
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
                <div className="container p-2 previewCont" >
                <h3 className="text-center text-white">Preview</h3>
                <button className="btn btn-primary" onClick={()=>downloadImage()}>Download</button>
                <div id="printMe" className="row">
                <Preview/>
                </div>
                </div>
            </div>
            
        </div>
    )
}
