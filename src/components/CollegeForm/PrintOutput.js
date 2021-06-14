import React, { Component } from 'react'
import Previewcard from './Previewcard'
import Frontout from './Output/Frontout'
export class Preview extends Component {
    render(props) {
        return (
            <div style={{ fontFamily: "'PT Sans', sans-serif"}} id="printOutPut">
                <Frontout/>
            </div>
        )
    }
}

export default Preview
