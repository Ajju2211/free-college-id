import React, { Component } from 'react'
import Previewcard from './Previewcard'
import Frontout from './Output/Frontout'
import Back from './Output/Back'
export class Preview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    renderCards = ()=>{
        if(this.props.printSides==='both'){
            return (
                <>
                <Frontout {...this.props}/>
                <Back {...this.props}/>
                </>
            )
        }
        if(this.props.printSides==='front'){
            return(
                <>
                <Frontout {...this.props}/>
                </>
            )
        }
        else{
            return(
                <>
                <Back {...this.props}/>
                </>
            )
        }
    }
    
    render() {
        return (
            <div style={{ fontFamily: "'PT Sans', sans-serif",display:"none"}} id="printOutPut">
                {
                    this.renderCards(this.props)
                }
            </div>
        )
    }
}

export default Preview
