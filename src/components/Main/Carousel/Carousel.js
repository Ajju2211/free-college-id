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
import React, { Component } from "react";
import withSizes from "react-sizes";
import Typewriter from "typewriter-effect";
import ShowDemo from "../../showDemo";
import "./Carousel.css";

export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDemo: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.showDemo ? (
          <ShowDemo
            onClose={() => {
              this.setState({ showDemo: false });
            }}
          />
        ) : (
          <></>
        )}
        <div
          style={{
            height: this.props.WinHeight,
            width: "100%",
            backgroundColor: "#434343",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Images/ph1.png */}
          {this.props.winWidth > 1050 ? (
            <picture>
              <source
                className="personid"
                type="image/avif"
                srcset="Images/ph.avif"
              />
              <img src="Images/ph1.png" className="personid" />
            </picture>
          ) : (
            <></>
          )}
          {/* <div className="mainhead" style={{display:"flex",flexDirection:'column',alignItems:"flex-start",width:"100%",paddingLeft:"22%"}}>
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
          */}
          <div
            className="heading"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1 style={{ textAlign: "center" }}>
              Get your college ID card for free
            </h1>
            <p style={{ textAlign: "center" }}>
              Download within few seconds...!
            </p>
            <div className="d-flex mr-auto ml-auto justify-content-center">
              <button
                className="findbutton"
                style={{ margin: "0px 10px 0px 0px" }}
              >
                <a
                  href="/#search"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Find your college
                </a>
              </button>
              <button
                className="findbutton m-0  btn btn-secondary btn-outline-danger"
                onClick={() => {
                  this.setState({ showDemo: !this.state.showDemo });
                }}
                style={{ color: "black" }}
              >
                Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapSizesToProps = ({ height, width }) => ({
  WinHeight: height - 60,
  winWidth: width,
});

export default withSizes(mapSizesToProps)(Carousel);
