import React from 'react'
import styles from "./styles.module.css"
import { FaChevronLeft } from 'react-icons/fa'
import Form from './FormBox'
export default function CollegeForm() {
    return (
        <div className="container-fluid m-0">
            <div className="row mt-2">
                <div className={"offset-1 col-2 col-md-1 " + styles.backWrap}>
                    <span className={styles.backBtn}>
                        <FaChevronLeft />
                    </span>
                </div>
                <div className={"col-9 col-md-10"}>
                    <h1 className={styles.title}>SNIST</h1>
                </div>
            </div>
            <Form />
        </div>
    )
}
