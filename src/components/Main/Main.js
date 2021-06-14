import React from 'react'
import Carousel from './Carousel/Carousel'
import CollegesBoard from './CollegesBoard/CollegesBoard'

export default function Main() {
    return (
        <>
            <Carousel/>
            <CollegesBoard/>
            <footer style={{bottom:"0"}}>
                <p style={{textAlign:"center", background:"black"}}>Powered by MARS. All copy rights reserved.</p>
            </footer>
        </>
    )
}
