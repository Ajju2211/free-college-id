import React, { Component } from 'react'
import Previewcard from './Previewcard'
import Frontout from './Output/Frontout'
export class Preview extends Component {
    render() {
        return (
            <div style={{ fontFamily: "'PT Sans', sans-serif" }}>
                <Previewcard/>
            </div>
        )
    }
}

export default Preview
