import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FaImage } from "react-icons/fa"
import { RiImageAddFill, RiImageEditFill } from 'react-icons/ri'
import UppyImage from "../UppyImage/UppyImage"
import "react-datepicker/dist/react-datepicker.css";
import "./datePickerCustom.css"
import CDATA from "../../data/colleges.json"
const YEAR = new Date().getFullYear();
const range = (start, end, step, offset) => {

    const len = (Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1;
    const direction = start < end ? 1 : -1;
    const startingPoint = start - (direction * (offset || 0));
    const stepSize = direction * (step || 1);

    return Array(len).fill(0).map(function (_, index) {
        return startingPoint + (stepSize * index);
    });

}

export default function Form({ fullName, setFullName,
    fatherName, setFatherName, branch, course, setBranch,
    setCourse, rollNumber,
    latEntry, setlatEntry,
    setRollNumber, duration, setDuration,
    period, setPeriod,
    dob, setDob, sapId, setSapId, bpNo, setBpNo,
     setPassportImg, passportImg,
     printSides , setPrintSides,
     printType , setPrintType
    , ...props }) {
    // const [fullName, setFullName] = useState("");
    // const [fatherName, setFatherName] = useState("");
    // const [branch, setBranch] = useState(props.data.branches[0].value);
    // const [course, setCourse] = useState(props.data.courses[0].value);
    // const [rollNumber, setRollNumber] = useState("")
    // const [duration, setDuration] = useState("");
    // const [period, setPeriod] = useState(props.data.courses[0].duration);
    // const [dob, setDob] = useState("");
    // const [sapId, setSapId] = useState("")
    // const [bpNo, setBpNo] = useState("");
    const uploadCb = (result) => {
        const { successful, failed } = result;
        console.log(failed);
        if (failed.length > 0) {
          // M.toast({ html: `Failed due to:  ${failed[0].error}` });
        } else {
          // const url = `https://mindfulautomations.com/${successful[0].response.uploadURL}`;
          // M.toast({ html: `successfully uploaded at ${url}` });
          // fillAttachment(successful[0]);
        //   alert(JSON.stringify(successful[0]));
        //   alert(successful[0].response.body.url);
        //   const imgUrl = successful[0].response.body.location;
        // const reader = new FileReader();
        // reader.readAsDataURL(successful[0].data);
        // reader.onloadend = function () {
        //   var base64data = reader.result;
        //   console.log(base64data);
        // };
        //window.URL.createObjectURL(successful[0].data)
        window.$('.uppy-Dashboard-isFixed').removeClass('uppy-Dashboard-isFixed');
        URL.revokeObjectURL(passportImg);
        const url = URL.createObjectURL(successful[0].data)
        console.log(successful[0])
          setPassportImg(url);
        }
      };
    console.log(props);
    return (
        <form class="mb-3">
            {/* FullName */}
            <div class="mb-3">
                <label for="fullName" class="form-label">FullName</label>
                <input type="text" placeholder="Full Name" class="form-control" id="fullName"  maxlength="25" aria-describedby="fullNameHelp" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                <div id="fullNameHelp" class="form-text">Enter your Full Name as per college records.</div>
            </div>
            {/* Father name */}
            <div class="mb-3">
                <label for="fatherName" class="form-label">Father's Name</label>
                <input type="text" placeholder="Father's Name" class="form-control" id="fatherName" maxlength="21" aria-describedby="fatherNameHelp" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
                {/* <div id="fatherNameHelp" class="form-text">Enter your Full Name as per college records.</div> */}
            </div>
            {/* Course, Branch */}
            <DropDown options={props.data} course={course} setPeriod={setPeriod} setCourse={(val) => setCourse(val)} branch={branch} setBranch={(val) => setBranch(val)} />
            {/* Roll numbr */}
            <div class="mb-3">
                <label for="rollNumber" class="form-label">Roll Number</label>
                <input type="text" disabled placeholder="Roll Number" class="form-control" id="rollNumber" maxlength="10" onChange={(e) => setRollNumber(e.target.value)} value={rollNumber} />
                {/* <div id="fullNameHelp" class="form-text">Enter your Full Name as per college records.</div> */}
            </div>
            {/* DOB */}
            <Dob dob={dob} setDob={(date) => setDob(date)} />
            <div class="mb-3 form-check form-switch">
                <label for="latEntry" class="form-check-label">Are you a Lateral entry?</label>
                <input value={latEntry} checked={latEntry==='true' ? "checked":null} onClick={(e)=>{
                    // if(e.target.checked){
                    //     setPeriod(o=>o-1)
                    // }
                    // else{
                    //     setPeriod(CDATA.data[0].courses)
                    // }
                    setlatEntry(o=>{
                        // alert(o)
                        if(o==='true'){
                            return "false"
                        }
                        return "true"}
                        )}} type="checkbox"  placeholder="Roll Number" class="form-check-input" id="latEntry" maxlength="10" onChange={(e) => setRollNumber(e.target.value)} value={rollNumber} />
                <div id="latEntry" class="form-text">For laterel entries 1st year will be skipped.</div>
            </div>
            <div className="mb-3">
                <label for="duration" class="form-label">Duration</label>
                <select class="form-select" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
                    {
                        range(YEAR, YEAR - 10, 1).map(year => {
                            return (<option value={`${year}-${year + period}`}>{`${year} - ${year + period}`}</option>)
                        })
                    }
                </select>
                {
                latEntry==='false' ? <div id="duration" class="form-text">select your batch year range.</div>:
                <div id="duration" class="form-text">LE's select range based on passed out year.</div>
                }
            </div>
            <div class="mb-3">
                <label for="uploadImg" class="form-label">Upload Photo</label>
                {/* <input type="text" placeholder="Upload Photo" class="form-control" id="uploadImg" aria-describedby="uploadImgHelp" /> */}
                <div id="uploadImg" className="form-control d-flex justify-content-center" aria-describedby="uploadImgHelp">
                    {
                        passportImg.length > 0 ? <RiImageEditFill style={{ fontSize: "4.5rem", border: "2px dotted #042a04fc", padding: "5px", borderRadius: "8px", background: "#eae1e8", boxShadow: "0px 3px 17px 2px rgba(123,186,16,0.75)"}} onClick={()=> UppyImage({}, {}, uploadCb)}/>
                        : <RiImageAddFill style={{ fontSize: "4.5rem", border: "2px dotted #042a04fc", padding: "5px", borderRadius: "8px", background: "#eae1e8" }} onClick={()=> UppyImage({}, {}, uploadCb)}/>
                    }
                </div>
                <div id="uploadImgHelp" class="form-text">Upload passport photo.</div>
            </div>
            <div class="mb-3">
                <label for="sapId" class="form-label">SAP ID</label>
                <input type="text" value={sapId} onChange={(e) => setSapId(e.target.value)} placeholder="SAP Id" maxlength="9" class="form-control" id="sapId" aria-describedby="sapIdHelp" />
                <div id="sapIdHelp" class="form-text">Enter your SAP ID given by your college.</div>
            </div>
            <div class="mb-3">
                <label for="bpNo" class="form-label">BP No</label>
                <input type="text" onChange={(e) => setBpNo(e.target.value)} value={bpNo} placeholder="BP No" maxlength="8" class="form-control" id="bpNo" aria-describedby="bpNoHelp" />
                <div id="bpNoHelp" class="form-text">Enter your BP No given by your college.</div>
            </div>
            <div className="mb-3">
                <label for="printSide" class="form-label">Print</label>
                <select class="form-select" id="printSide" value={printSides} onChange={(e) => setPrintSides(e.target.value)}>
                    <option value="both">Both Sides</option>
                    <option value="front">Front View</option>
                    <option value="rear">Rear View</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="printSide" class="form-label">Download as</label>
                <select class="form-select" id="printType" value={printType} onChange={(e) => setPrintType(e.target.value)}>
                    <option value="pdf">PDF</option>
                    <option value="image">Image</option>
                </select>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <button type="submit" onClick={(e)=>{
                e.preventDefault();
                window.$('#downloadbtn').click();
            }} class="down" style={{outline:"none",margin:"0 auto 0 auto",left:"0",right:"0",padding:"8px 15px 8px 15px",margin:"10px",borderRadius:"5px",fontWeight:"bold"}}>Generate</button>
            </div>
        </form>
    )
}
const DropDown = ({ setPeriod, course, setCourse, branch, setBranch, options }) => {

    return (
        <div className="mb-3 d-flex justify-content-between">
            <span className="col-5">
                <label for="course" class="form-label">Course</label>
                <select class="form-select" id="course" value={course} onChange={(e) => {
                    setCourse(e.target.value);
                    setPeriod(options.courses.find(ele => e.target.value === ele.value).duration);
                }}>
                    {options.courses.map(option => {
                        return <option key={option.id} value={option.value}>{option.title}</option>
                    })}
                </select>
            </span>
            <span className="col-5">
                <label for="branch" class="form-label">Branch</label>
                <select class="form-select" id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
                    {options.branches.map(option => {
                        return <option key={option.id} value={option.value}>{option.title}</option>
                    })}

                </select>
            </span>
            <div id="drag-drop-area"></div>
        </div>
    )
}
// selected={startDate}
const Dob = ({ dob, setDob }) => {
    // const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="mb-3">
            <label for="dob" class="form-label">DOB (DD-MM-YYYY)</label>
            <DatePicker
                selected={Date.parse(dob)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                onCalendarOpen={() => addSelectClass()}
                placeholderText="DD-MM-YYYY"
                dateFormat="dd-MM-yyyy"
                isClearable
                onKeyDown={(e) => e.preventDefault()}
                className="dateInput col-12 form-control"
                id="dob"
                minDate={new Date('01/01/1970')}
                onChange={(date) => {
                    if(date){
                    setDob(date.toDateString())
                    }else{
                        setDob(null)
                    }
                }} />
        </div>
    );
}

const addSelectClass = () => {
    window.$('.react-datepicker__month-select').addClass('form-select');
    window.$('.react-datepicker__year-select').addClass('form-select');
}
