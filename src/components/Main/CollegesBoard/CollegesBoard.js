import React from "react";
import {FaSearch} from 'react-icons/fa'
import Card from "./Card";
import styles from "./styles.module.css"

export default function CollegesBoard() {
    return (
        <div className="container">
            <div className="row">
                <div className={" "+styles.searchGrp}>
                    <div className={"input-group mb-3 "+styles.searchInputGrp}>
                        <span className={"input-group-text "+styles.searchInputText} id="basic-addon1"><FaSearch/></span>
                        <input type="text" className={"form-control "+styles.searchInput} placeholder="Enter College" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </div>
            </div>
            <div className="row" style={{background: "#434343", padding:"20px", borderRadius:"30px"}}>
                <div className="container">
                    <div className="row">
                        <Card title="snist" url="/Images/snist-logo.jpg"/>
                        <Card title="cbit" url="/Images/cbit-logo.png"/>
                        <Card title="jntu" url="/Images/jntuh-logo.jpg"/>
                        <Card title="ou" url="/Images/ouceh-logo.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
