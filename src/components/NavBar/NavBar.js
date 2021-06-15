import React from 'react'
import './Navbar.css'
export default function NavBar() {
    return (
            <nav className="p-0 navbar navbar-expand-lg navbar-light bg-dark">
                <div style={{display:"flex",alignItems:"center"}}>
                <img style={{height:"70px",width:"auto",margin:"0 0 0 30%"}} src="/Images/free1.png"></img><h1 className="logo"><a className="navbar-brand" href="/" style={{color:"white"}}>College ID Card</a></h1>
                </div>
            </nav>
    )
}
