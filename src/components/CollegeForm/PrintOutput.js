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
    
    render() {
        return (
            <div style={{ fontFamily: "'PT Sans', sans-serif",display:"none"}} id="printOutPut">
                <Frontout {...this.props}/>
                <Back {...this.props}/>
            </div>
        )
    }
}

export default Preview
