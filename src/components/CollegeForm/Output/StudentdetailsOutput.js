import React from 'react'

export default function Studentdetails() {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", padding: "1mm", marginLeft: "0.2cm", flexDirection: "column", fontFamily: "sans-serif", fontSize: "0.27cm" }}>
            <div>
                <div style={{ fontWeight: "bold", padding: "0.09cm 0" }}>SRIKAR RAMA OUTPUT</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "2cm" }}>Father's Name </div>
                <div>: KRISHNA MURTHY RAMA</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "2cm" }}>Course/Branch</div>
                <div>: B.Tech/CSE</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "2cm" }}>Roll No</div>
                <div>: 18311A05H1</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "2cm" }}>Date of Birth</div>
                <div>: 05.12.1999</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "2cm" }}>Course Duration</div>
                <div>: 2018-2022</div>
            </div>
        </div>
    )
}
