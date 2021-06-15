import React from 'react'
import styles from './cardoutput.module.css'
import StudentdetailsOutput from './StudentdetailsOutput'
export default function Previewcard(props) {
    return (
        <div className="card" id="printCard" style={{height: "5.2cm", width: "8.4cm"}}>
            <div class="card-body p-0" style={{ border: "1px black solid", margin: "1px"}}>
                <div className="row p-0" style={{ margin: "0.20cm 0cm 0cm 0" }}>
                    <div class="col-7" style={{ background: "orange", height: "1cm" }}>
                        <div className="row" style={{ position: "relative"}}>
                            <p style={{ fontSize: "0.3cm", color: "black",padding:"2.4mm 0 0 2.7mm",fontWeight: "bold" }}>STUDENT IDENTITY CARD</p>
                            <div class={styles.curve}></div>
                        </div>
                    </div>
                </div>
                <StudentdetailsOutput {...props}/>
                <div className="d-flex p-0 m-0" style={{ background: "rgb(18 28 67)", maxHeight: "1.1cm", alignItems: "center", color: "white",bottom:'0' }}>
                    <div className="m-0" style={{ display: "flex",padding:"2mm 0 2mm 0.8mm", width: "5.4cm", alignItems: "flex-start", height: "1.1cm", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ fontSize: "0.17cm", fontFamily: "sans-serif", letterSpacing: "0.2mm" }}>Yamnampet, Ghatkesar Mandal, Hyderabad - 501301.</div>
                        <div style={{ fontSize: "0.2cm", fontWeight: "400", fontFamily: "sans-serif", letterSpacing: "0.25mm" }}>+91-9640666612 / 13 | info@sreenidhi.edu.in </div>
                        <div style={{ fontSize: "0.2cm", fontWeight: "400", fontFamily: "sans-serif", letterSpacing: "0.25mm" }}>www.sreenidhi.edu.in</div>
                    </div>
                    <div className="p-0" style={{ display: "flex", width: "3cm", alignItems: "center", justifyContent: "center" }}>
                        {/* 50 */}
                        <img style={{ height: "0.8cm",width:"1.9cm",marginRight: "0.6mm" }} src="/Images/idcardlogo.png"></img>
                        {/* 38 */}
                        <img style={{ height: "0.6cm", width:"1.1cm",alignSelf: "flex-start", marginTop: "0.04cm",marginRight:'1.1mm' }} src="/Images/idcardlogo.jpg"></img>
                    </div>
                </div>
                <div class={styles.idphoto} >
                    <img class={styles.photopass} src="/Images/Will.jpg"></img>
                    <img class={styles.signature} src="/Images/signPrincipal.jpg"></img>
                    <div style={{ fontWeight: "bold",fontSize:"0.3cm"}}>PRINCIPAL</div>
                </div>
            </div>
        </div>
    )
}
