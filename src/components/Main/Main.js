import React from 'react'
import Carousel from './Carousel/Carousel'
import CollegesBoard from './CollegesBoard/CollegesBoard'
export default function Main() {
    return (
        <>
            <Carousel />
            <CollegesBoard />
            <div style={{ background: "rgb(23 22 22)", position: "relative" }}>
                <div style={{ textAlign: "center", padding: "10px", fontSize: "1.1em", color: "black", color: "gray" }}>Made with ❤️ by <span style={{ color: "white", fontWeight: '600' }}>M</span>ohammed <span style={{ color: "white", fontWeight: "600" }}>A</span>zharuddin , <span style={{ color: "white", fontWeight: "600" }}>R</span>ama <span style={{ color: "white", fontWeight: "600" }}>S</span>rikar</div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                <div class="row" style={{color:"gray",display:"flex",alignItems:"center"}}>
                <img src="/Images/githubimg.png" style={{ width: "auto", height: "30px" }}></img>Github profiles
                </div>
                    <div class="github"><a  href="https://github.com/srikar-rama" style={{ textDecoration: 'none'}}>Srikar Rama</a></div>
                    <div class="github"><a  href="https://github.com/Ajju2211" style={{ textDecoration: 'none' }}>Mohammed Azharuddin</a></div>
                </div>
                <p style={{ textAlign: "center", margin: "0", color: "white", fontSize: "1em", height: "30px" }}>Powered by MARS. All copy rights reserved.</p>
            </div>
        </>
    )
}
