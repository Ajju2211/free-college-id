import React, { Component } from 'react'
import Previewcard from './Previewcard'
import Frontout from './Output/Frontout'
import Back from './Output/Back'
export class Preview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            query: false
        }
    }
    componentDidMount() {
        const search = this.props.location.search;
        const newProps = {};
        newProps.fullName = new URLSearchParams(search).get("fullName");
        newProps.fatherName = new URLSearchParams(search).get("fatherName");
        newProps.branch = new URLSearchParams(search).get("branch");
        newProps.course = new URLSearchParams(search).get("course");
        newProps.rollNumber = new URLSearchParams(search).get("rollNumber");
        newProps.latEntry = new URLSearchParams(search).get("latEntry");
        newProps.duration = new URLSearchParams(search).get("duration");
        newProps.period = new URLSearchParams(search).get("period");
        newProps.dob = new URLSearchParams(search).get("dob");
        newProps.sapId = new URLSearchParams(search).get("sapId");
        newProps.bpNo = new URLSearchParams(search).get("bpNo");
        newProps.passportImg = new URLSearchParams(search).get("passportImg");
        newProps.printSides = new URLSearchParams(search).get("printSides");
        if (Object.keys(newProps).length > 1) {
            this.props = { ...this.props, ...newProps };
            this.setState({ ...newProps, query: true });
            document.querySelector("#printOutPut").style.display = "initial";
        }
        const nav = document.querySelector("nav");
        const footer = document.querySelector("#footer");
        if (nav) {
            nav.style.display = "none";
        }
        if (footer) {
            footer.style.display = "none";
        }
        document.body.style.background = "white";
    }
    renderCards = (props) => {
        if (props.printSides === 'both') {
            return (
                <>
                    <Frontout {...props} />
                    <Back {...props} />
                </>
            )
        }
        if (props.printSides === 'front') {
            return (
                <>
                    <Frontout {...props} />
                </>
            )
        }
        else {
            return (
                <>
                    <Back {...props} />
                </>
            )
        }
    }

    render() {
        return (
            <div style={{ fontFamily: "'PT Sans', sans-serif", display: "none" }} id="printOutPut">
                {
                    !this.state.query ? this.renderCards(this.props) : this.renderCards(this.state)
                }
            </div>
        )
    }
}

export default Preview
