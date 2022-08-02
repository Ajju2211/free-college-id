import React from 'react'
import './Navbar.css'
import { VscGithub } from 'react-icons/vsc'
export default function NavBar() {
    return (
        <nav className="p-0 navbar navbar-expand-lg navbar-light bg-dark">
            <div style={{ display: "flex", alignItems: "center" }}>
                <img className="logo1" src="/Images/free1.png" style={{ height: "70px" }}></img>
                <h1 className="logo"><a className="navbar-brand" href="/" style={{ color: "white" }}>College ID Card</a></h1>
                <a href="https://github.com/Ajju2211/free-college-id" target="_blank" style={{ position: "absolute", right: "2%", color: "white", fontSize: "2em" }}><VscGithub /></a>
                {/* <a href="https://github.com/Ajju2211/free-college-id" target="_blank" style={{ position: "absolute", right: "2%", color: "white", fontSize: "2em" }}><VscGithub /></a> */}
            </div>
        </nav>
    )
}
