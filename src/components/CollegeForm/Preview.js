import React, { Component } from 'react'
import Previewcard from './Previewcard'
import Back from './Output/Back'
export class Preview extends Component {
    render() {
        return (
            <div style={{ fontFamily: "'PT Sans', sans-serif", width:"fit-content" }}>
                <Previewcard/>
                {/* <Back scale={true}/> */}
            </div>
        )
    }
}

export default Preview
