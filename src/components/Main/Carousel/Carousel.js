// import React from 'react'
// import withSizes from 'react-sizes'
// import Typewriter from 'typewriter-effect/dist/core';
// import './Carousel.css'
// const Carousel = (props) => {
//     return (
//         <div style={{ height: props.WinHeight, width: "100%", backgroundColor: "#434343", justifyContent: "center", display: "flex", alignItems: "center" }}>
//             {props.winWidth > 1050 ? <img className="personid" src="Images/ph1.png"></img> : <></>}

//             <div className="heading" style={{ display: "flex", flexDirection: "column" }}>
//                 <Typewriter
//                     options={{
//                         strings: ['Get your college ID card for free'],
//                         autoStart: true,
//                         loop: true,
//                         wrapperClassName:'carouseltext',
//                     }}
//                 />
//                 <h1 style={{ textAlign: "center" }} >Get your college ID card for free</h1>
//                 <p style={{ textAlign: "center" }}>Download within few seconds...!</p>
//                 <button className="findbutton"><a href="/#search" style={{ textDecoration: "none", color: "black" }}>Find your college</a></button>
//             </div>
//         </div>
//     )
// }
import React, { Component } from 'react'
import withSizes from 'react-sizes'
import Typewriter from 'typewriter-effect'
import './Carousel.css'

export class Carousel extends Component {
    render() {
        return (
            <div>
                <div style={{ height: this.props.WinHeight, width: "100%", backgroundColor: "#434343", justifyContent: "center", display: "flex", alignItems: "center" }}>
             {this.props.winWidth > 1050 ? <img className="personid" src="Images/ph1.png"></img> : <></>}

             <div className="heading" style={{ display: "flex", flexDirection: "column"}}>
                 <div style={{width:"100%"}}>
                 <Typewriter
                     options={{
                         strings: ['Get your college ID card for free'],
                         autoStart: true,
                         loop: true,
                         wrapperClassName:'carouseltext',
                         delay:"50",
                    }}
                 />
                 </div>
                 {/* <h1 style={{ textAlign: "center" }} >Get your college ID card for free</h1> */}
                <p style={{ textAlign: "center" }}>Download within few seconds...!</p>
                <button className="findbutton"><a href="/#search" style={{ textDecoration: "none", color: "black" }}>Find your college</a></button>
             </div>
         </div>
                
            </div>
        )
    }
}

const mapSizesToProps = ({ height, width }) => ({
    WinHeight: height - 60,
    winWidth: width
})

export default withSizes(mapSizesToProps)(Carousel)