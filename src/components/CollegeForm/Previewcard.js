import React from 'react'
import './cardpreview.css'
export default function Previewcard() {
    return (
        <div className="card " style={{height:"7.8cm", width:"12.6cm"}}>
            <div class="card-body p-0" style={{border: "1px black solid",margin:"1px"}}>
                <div className="row p-0" style={{margin: "0.35cm 0 0 0"}}>
                <div class="col-7" style={{background:"orange", height:"50px"}}>
                    <div className="row" style={{position:"relative"}}>
                    <p style={{fontSize:"1em",padding:"10px 0 10px 15px",color:"black"}}>STUDENT IDENTITY CARD</p>
                    <div class="curve"></div>
                    </div>
                </div>
                </div>
                <div className="d-flex p-0 m-0" style={{background:"blue",maxHeight:"70px",alignItems:"center"}}>
                    <div className="col-7 m-0" style={{display:"flex",padding:"2px 0 2px 5px",alignItems:"flex-start",height:"60px",flexDirection:"column",justifyContent:"center"}}>
                    <div style={{fontSize:"0.7em",fontFamily:"sans-serif"}}>Yamnampet, Ghatkesar Mandal, Hyderabad - 501301.</div>
                    <div style={{fontSize:"0.8em",fontWeight:"600",fontFamily:"sans-serif"}}>+91-9640666612 / 13 | info@sreenidhi.edu.in </div>
                    <div style={{fontSize:"0.8em",fontWeight:"600",fontFamily:"sans-serif"}}>www.sreenidhi.edu.in</div>    
                    </div>
                    <div className="col-5 p-0" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {/* 50 */}
                    <img style={{height:"1.2cm"}} src="/Images/idcardlogo.png"></img>
                    {/* 38 */}
                    <img style={{height: "0.94cm",alignSelf: "flex-start", marginTop: "0.04cm"}} src="/Images/idcardlogo.jpg"></img>    
                    </div>                 
                </div>
            </div>
        </div>
    )
}
