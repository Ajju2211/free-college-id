import React, {useState, useEffect} from "react";
import { FaSearch } from 'react-icons/fa'
import Card from "./Card";
import styles from "./styles.module.css"
import collegesData from "../../../data/colleges.json"
export default function CollegesBoard() {
    const [colleges, setColleges] = useState(collegesData.data.map(c=>c.id));
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        if(searchText){
            if(searchText.length < 1){
                setColleges(collegesData.data.map(c=>c.id));
            }
            const foundColeges = collegesData.data.filter((college)=>{
                const titleStr = college.name+" "+college.code;
                if(titleStr.toLocaleLowerCase().indexOf(searchText.trim().toLocaleLowerCase())!=-1){
                    return true;
                }
                return false;
            })
            setColleges(foundColeges.map(c=>c.id))
        }
        else{
            setColleges(collegesData.data.map(c=>c.id));
        }

    },[searchText]);
    return (
        <div className="container mt-3" id="search">
            <div className="row">
                <div className={" " + styles.searchGrp}>
                    <div className={"input-group mb-3 " + styles.searchInputGrp}>
                        <span className={"input-group-text " + styles.searchInputText} id="basic-addon1"><FaSearch /></span>
                        <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} className={"form-control " + styles.searchInput} placeholder="Enter College" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
            <div className="row" style={{ background: "#434343", padding: "20px", borderRadius: "30px" }}>
                <div className="container">
                    <div className="row">
                        {colleges.map(collegeId => {
                            const data = collegesData.data[parseInt(collegeId)];
                            if(data){
                            return <Card key={data.id} {...data} title={data.code} url={data.imgUrl} />
                            }
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
