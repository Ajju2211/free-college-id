import React, { Component } from 'react'
import Previewcard from './Previewcard'
import Back from './Output/Back'
export class Preview extends Component {
    render() {
        return (
            <div style={{ fontFamily: "'PT Sans', sans-serif" }}>
                <Previewcard/>
                <div className="backsidecard">
                <Back/>
                </div>
            </div>
        )
    }
}

export default Preview
