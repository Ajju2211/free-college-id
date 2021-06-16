import React from 'react'
import withSizes from 'react-sizes';
import './Errorpage.css';
function Errorpage(props) {
    return (
        <div  style={{display:"flex",justifyContent:"center",backgroundColor:"#252525",height:props.winHeight}}>
           <a href="/"><img src="/Images/404.gif" style={{width:"100%"}} class="errorimg"></img></a>
        </div>
    )
}
const mapSizesToProps=({height,width})=>({
winHeight:height-60,
winWidth:width
});
export default withSizes(mapSizesToProps)(Errorpage)