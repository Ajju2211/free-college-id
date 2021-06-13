import React from 'react'
import styles from './styles.module.css'
export default function Card(props) {
    return (
        <div className={"col-12 mb-4 col-md-6 " + styles.collegePlate}>
            <div className={"card " + styles.collegePlateCard}>
                <div class={"card-header " + styles.collegePlateCardHeader}>{props.title}</div>
                <div className={"card-body " + styles.collegePlateCardBody}>
                    <div className={styles.collegePlateImgFrame}>
                        <img src={props.url} className={"" + styles.collegePlateImg} />
                    </div>
                </div>
            </div>
            <div style={{position:"absolute",top:"10%"}}><p style={{textAlign:"center"}}>Coming Soon</p></div>
        </div>
    )
}
