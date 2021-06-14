import React, {useState, useEffect} from 'react'
import styles from "./styles.module.css"
import { FaChevronLeft } from 'react-icons/fa'
import FormBox from './FormBox'
import { Link , useParams} from 'react-router-dom'
import collegesData from "../../data/colleges.json"
const NotFound = () => {
    return (
        <h1 style={{color:"white",textAlign:"center"}}>No Such Page Found</h1>
    )
}
export default function CollegeForm() {
    const {id} = useParams();
    const [colgData, setColgData] = useState({})
    const [notFound, setNotFound] = useState(true);
    
    useEffect(()=>{
        if(id){
            try {
                let data = collegesData.data[parseInt(id)];   
                if(typeof data==="undefined" || !data.available){
                    setNotFound(true);
                }
                console.log(data);
                setNotFound(false);
                setColgData(collegesData.data[parseInt(id)]);
            } catch (error) {
                setNotFound(true);
            }
        }
        
    },[])

    return (
        <>{
            !notFound ?
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
                        <h1 className={styles.title}>{colgData.code}</h1>
                    </div>
                </div>
                <FormBox data={collegesData.data[parseInt(id)]} id={id}/>
            </div>
        :<NotFound/>
        }</>
      )
}
