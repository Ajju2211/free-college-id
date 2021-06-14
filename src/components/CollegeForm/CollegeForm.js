import React, {useState} from 'react'
import styles from "./styles.module.css"
import { FaChevronLeft } from 'react-icons/fa'
import Form from './FormBox'
import { Link , useParams} from 'react-router-dom'
import collegesData from "../../data/colleges.json"
const NotFound = () => {
    return (
        <h1 style={{color:"white",textAlign:"center"}}>No Such Page Found</h1>
    )
}
export default function CollegeForm() {
    const {id} = useParams();
    let data;
    try {
        data = collegesData.data[parseInt(id)];   
        if(typeof data==="undefined" || !data.available){
            return <NotFound/>    
        }
    } catch (error) {
        return <NotFound/>
    }
    
    return (
        <div className="container-fluid m-0">
            <div className="row mt-2">
                <div className={"offset-1 col-2 col-md-1  " + styles.backWrap}>
                <Link className="stretched-link" to="/" style={{textDecoration:"none", color:"white",display:"inline"}}>
                    <span className={styles.backBtn}>
                        <FaChevronLeft />
                    </span>
                </Link>
                </div>
                <div className={"col-9 col-md-10"}>
                    <h1 className={styles.title}>{data.code}</h1>
                </div>
            </div>
            <Form data={data} id={id}/>
        </div>
    )
}
