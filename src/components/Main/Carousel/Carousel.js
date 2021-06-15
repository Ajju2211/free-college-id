import React from 'react'
import withSizes from 'react-sizes'
import './Carousel.css'
const  Carousel =(props)=> {
    return (
        <div style={{height:props.WinHeight,position:'relative' ,width:"100%",backgroundColor:"#434343",justifyContent:"center", display:"flex",alignItems:"center"}}>
            {props.winWidth >1050?<img className="personid" src="Images/ph1.png"></img>:<></>}
            
            <div className="heading" style={{display:"flex",flexDirection:"column"}}>
            <h1 style={{textAlign:"center"}} >Get your college ID card for free</h1>
            <p style={{textAlign:"center"}}>Download within few seconds...!</p>
            <button className="findbutton"><a href="/#search" style={{textDecoration:"none",color:"black"}}>Find your college</a></button>
            </div>
        </div>
    )
}
const mapSizesToProps = ({ height ,width }) => ({
    WinHeight:height-60,
    winWidth:width
  })
   
  export default withSizes(mapSizesToProps)(Carousel)