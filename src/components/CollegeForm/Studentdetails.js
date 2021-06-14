import React from 'react'
const getDate = (date) => {
    // return date ? (date.length > 1 ? `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`:""):""
    if(!date){
        return ""
    }
    if(date.length < 1){
        return ""
    }
    let str = ``;
    try {
        const d = new Date(date);
        str = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
    } catch (error) {
        str=``
    }
    return str;
}
export default function Studentdetails(props) {
        // 
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
        // 
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", padding: "5px", marginLeft: "0.2cm", flexDirection: "column", fontFamily: "sans-serif", fontSize: "16px" }}>
            <div>
                <div style={{ fontWeight: "bold", padding: "0.15cm 0",textTransform:"uppercase" }}>{props.fullName}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "3.15cm" }}>Father's Name </div>
                <div style={{textTransform:"uppercase"}}>: {props.fatherName}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "3.15cm" }}>Course/Branch</div>
                <div>: {props.course}/{props.branch}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "3.15cm" }}>Roll No</div>
                <div style={{textTransform:"uppercase"}}>: {props.rollNumber}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "3.15cm" }}>Date of Birth</div>
                <div>: {getDate(props.dob)}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "3.15cm" }}>Course Duration</div>
                <div>: {props.duration}</div>
            </div>
        </div>
    )
}
