import React, { Component } from 'react'
import Previewcard from './Previewcard'
import Frontout from './Output/Frontout'
import Back from './Output/Back'
export class Preview extends Component {
    render(props) {
        return (
            <div style={{ fontFamily: "'PT Sans', sans-serif",display:"none"}} id="printOutPut">
                <Frontout/>
                <Back/>
            </div>
        )
    }
}

export default Preview
