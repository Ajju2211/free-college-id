import React from 'react'
import styles from './cardoutput.module.css'
const generateLibId = (rollNumber) => {
    const DEFAULT_ID = "185 H1";
    if(!rollNumber){
        return DEFAULT_ID
    }
    let str = rollNumber.replace(/\s+/g, ' ').trim();
    if(str.length > 0){
        let outputStr = str.substr(0, 2);
        if(str.length > 4){
            outputStr+= str.charAt(str.length - 3) + " "+ str.substr(str.length - 2);
        }
        return outputStr.toUpperCase()
    }
    else{
        return DEFAULT_ID
    }
    
}
export default function Back(props) {
    const scale = props.scale ? styles.scale : "";
        // fullName={fullName}
        // fatherName={fatherName}
        // branch={branch}
        // course={course}
        // rollNumber={rollNumber}
        // duration={duration}
        // period={period}
        // dob={dob}
        // sapId={sapId}
        // bpNo={bpNo}
    return (
        <div className={"card "+scale} id="printCard" style={{height: "5.2cm", width: "8.4cm",padding:"0"}}>
            <div class="card-body p-0" style={{ border: "1px black solid", margin: "1px",position:"relative"}}>
             <div style={{fontSize:"0.3cm",padding:"0.3cm",color:"gray"}}><u>Instructions:</u></div>
             <div style={{fontSize:"0.22cm",paddingLeft:"0.5cm"}}>
                 <div>1. Loss of this card should be reported to the collge immediately</div>
                 <div>2. if found, return to the Sreenidhi Institute of Science and Technology</div>
                 <div>3. Duplicate card will be issued on payment of Rs. 100/-</div>
                 <div>4. This card is issued for identitification purpose only and does not confer any other rights</div>
             </div>
             <div style={{display:"flex",maxHeight:"0.7cm",alignItems:"center",padding:"0.5cm 0"}}>
                 <div style={{fontSize:"0.3cm" ,paddingLeft:"0.5cm",paddingRight:"0.2cm"}}>SAP ID :</div>
                 <div style={{position:"relative"}}>
                 <img style={{width:"3.4cm",height:"0.7cm"}} src="/Images/bp.png"></img>
                 <div style={{position:"absolute",bottom:"0",height:"0.3cm",width:"100%",display:"flex",justifyContent:"center"}}>
                 <p style={{background:"white",textAlign:"center",fontSize:"0.22cm",position:"absolute"}}>{props.sapId || "070017887"}</p>
                 </div>
                 </div>
             </div>
             <div style={{display:"flex",maxHeight:"0.7cm",alignItems:"center",paddingTop:"0.4cm"}}>
                 <div style={{fontSize:"0.3cm",paddingLeft:"0.5cm",paddingRight:"0.2cm",left:"0",right:"0"}}>BP NO :</div>
                 <div style={{position:"relative"}}>
                 <img style={{width:"3.4cm",height:"0.7cm"}} src="/Images/bp.png"></img>
                 <div style={{position:"absolute",bottom:"0",height:"0.3cm",width:"100%",display:"flex",justifyContent:"center"}}>
                 <p style={{background:"white",textAlign:"center",fontSize:"0.22cm",position:"absolute"}}>{props.bpNo || "070017887"}</p>
                 </div>
                 </div>
             </div>   
             <div class={styles.lib} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                 <p style={{fontSize:"0.3cm",margin:"0"}}>LIB ID NO</p>
                 <img src="/Images/lib.png" style={{width:"2.1cm",height:"0.7cm"}}></img>
                 <p style={{fontSize:"0.3cm"}}>{generateLibId(props.rollNumber)}</p>
             </div>
            </div>
        </div>
    )
}
