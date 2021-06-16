import React from 'react'
import './cardpreview.css'
import Studentdetails from './Studentdetails'
const loadImage = (src)=>{
    const DEFAULT_SRC = "/Images/passport.jpg";
    if(src){
        if(src.length<1){
            return DEFAULT_SRC;
        }
        return src;
    }
    return DEFAULT_SRC;
}
export default function Previewcard(props) {
    return (
        <div className="card" id="printCard" style={{ height: "7.8cm", width: "12.6cm",padding:"0"}}>
            <div class="card-body p-0" style={{ border: "1px black solid", margin: "1px" }}>
                <div className="row p-0" style={{ margin: "0.35cm 0 0 0" }}>
                    <div class="col-7" style={{ background: "orange", height: "50px" }}>
                        <div className="row" style={{ position: "relative" }}>
                            <p style={{ fontSize: "0.45cm", padding: "10px 0 10px 15px", color: "black", fontWeight: "bold" }}>STUDENT IDENTITY CARD</p>
                            <div class="curve"></div>
                        </div>
                    </div>
                </div>
                <Studentdetails 
                {...props}
                />
                <div className="d-flex p-0 m-0" style={{ background: "rgb(18 28 67)", maxHeight: "70px", alignItems: "center", color: "white" }}>
                    <div className="m-0" style={{ display: "flex", padding: "7px 0 2px 5px", width: "8.1cm", alignItems: "flex-start", height: "60px", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ fontSize: "0.3cm", fontFamily: "sans-serif", letterSpacing: "0.1mm" }}>Yamnampet, Ghatkesar Mandal, Hyderabad - 501301.</div>
                        <div style={{ fontSize: "0.32cm", fontWeight: "600", fontFamily: "sans-serif", letterSpacing: "0.2mm" }}>+91-9640666612 / 13 | info@sreenidhi.edu.in </div>
                        <div style={{ fontSize: "0.32cm", fontWeight: "600", fontFamily: "sans-serif", letterSpacing: "0.2mm" }}>www.sreenidhi.edu.in</div>
                    </div>
                    <div className="p-0" style={{ display: "flex", width: "4.65cm", alignItems: "center", justifyContent: "center" }}>
                        {/* 50 */}
                        <img style={{ height: "1.15cm", marginRight: "1mm" }} src="/Images/idcardlogo.png"></img>
                        {/* 38 */}
                        <img style={{ height: "0.75cm", alignSelf: "flex-start", marginTop: "0.04cm" }} src="/Images/idcardlogo.jpg"></img>
                    </div>
                </div>
                <div class="idphoto" >
                    <img class="photopass" src={loadImage(props.passportImg)}></img>
                    <img class="signature" src="/Images/signPrincipal.jpg"></img>
                    <div style={{ fontWeight: "bold",position:"absolute" }}>PRINCIPAL</div>
                </div>
            </div>
        </div>
    )
}
