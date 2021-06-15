import React from 'react'
import './Navbar.css'
export default function NavBar() {
    return (
            <nav className="p-0 navbar navbar-expand-lg navbar-light bg-dark">
                <div style={{display:"flex",alignItems:"center"}}>
                <img src="/Images/free1.png" style={{height:"70px",marginLeft:"20%"}}></img>
                <h1 className="logo"><a className="navbar-brand" href="/" style={{color:"white"}}>College ID Card</a></h1>
                </div>
            </nav>
    )
}