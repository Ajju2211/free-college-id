import React from 'react'
import "./footer.css"
import { VscGithub } from 'react-icons/vsc'
function Footer() {
    return (
        <div>
            <div style={{ background: "rgb(23 22 22)", position: "relative", width: "100%", bottom: "0" }}>
                <div class="love" style={{ textAlign: "center", padding: "10px 0", color: "black", color: "gray" }}>Made with ❤️ by <span style={{ color: "white", fontWeight: '600' }}>M</span>ohammad <span style={{ color: "white", fontWeight: "600" }}>A</span>zharuddin , <span style={{ color: "white", fontWeight: "600" }}>R</span>ama <span style={{ color: "white", fontWeight: "600" }}>S</span>rikar</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", color: 'gray', fontWeight: "400" }}>
                        <VscGithub style={{ fontSize: "1.5em", fontWeight: "400", marginRight: "5px", color: "white" }} /><span>Github profiles</span>
                    </div>
                    <div class="github"><a href="https://github.com/srikar-rama" style={{ textDecoration: 'none' }}>Rama Srikar</a></div>
                    <div class="github"><a href="https://github.com/Ajju2211" style={{ textDecoration: 'none' }}>Mohammad Azharuddin</a></div>
                </div>
                <p class="powered" style={{ textAlign: "center", margin: "0", color: "white", fontWeight: "300", height: "30px", width: "100%", background: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>Powered by MARS. All copy rights reserved ( v.1 )</p>
                <p class="powered" style={{ textAlign: "center",flexWrap: "wrap" ,margin: "0", color: "white", fontWeight: "300", width: "100%", background: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h6 style={{width: "fit-content", whiteSpace: "nowrap"}}>Support us if you like this😄</h6>
                    &nbsp;
                    <a href="https://www.buymeacoffee.com/azharuddin">
                    <img style={{height:"32px"}} src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=azharuddin&button_colour=462a2a&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00" />
                    </a>
                </p>  
            </div>
        </div>
    )
}

export default Footer
