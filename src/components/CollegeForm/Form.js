import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FaImage } from "react-icons/fa"
import { RiImageAddFill, RiImageEditFill } from 'react-icons/ri'
import "react-datepicker/dist/react-datepicker.css";
import "./datePickerCustom.css"
export default function Form() {
    const [fullName, setFullName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [branch, setBranch] = useState("");
    const [course, setCourse] = useState("");
    const [rollNumber, setRollNumber] = useState("")
    const [duration, setDuration] = useState("");
    const [dob, setDob] = useState("");
    const [sapId, setSapId] = useState("")
    const [bpNo, setBpNo] = useState("");

    return (
        <form>
            {/* FullName */}
            <div class="mb-3">
                <label for="fullName" class="form-label">FullName</label>
                <input type="text" placeholder="Full Name" class="form-control" id="fullName" aria-describedby="fullNameHelp" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                <div id="fullNameHelp" class="form-text">Enter your Full Name as per college records.</div>
            </div>
            {/* Father name */}
            <div class="mb-3">
                <label for="fatherName" class="form-label">Father's Name</label>
                <input type="text" placeholder="Father's Name" class="form-control" id="fatherName" aria-describedby="fatherNameHelp" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
                {/* <div id="fatherNameHelp" class="form-text">Enter your Full Name as per college records.</div> */}
            </div>
            {/* Course, Branch */}
            <DropDown course={course} setCourse={(val) => setCourse(val)} branch={branch} setBranch={(val) => setBranch(val)} />
            {/* Roll numbr */}
            <div class="mb-3">
                <label for="rollNumber" class="form-label">Roll Number</label>
                <input type="text" placeholder="Roll Number" class="form-control" id="rollNumber" onChange={(e) => setRollNumber(e.target.value)} value={rollNumber} />
                {/* <div id="fullNameHelp" class="form-text">Enter your Full Name as per college records.</div> */}
            </div>
            {/* DOB */}
            <Dob dob={dob} setDob={(date) => setDob(date)} />
            <div className="mb-3">
                <label for="duration" class="form-label">Duration</label>
                <select class="form-select" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option selected value="18-22">18- 22</option>
                    <option value="17 - 21">17 - 21</option>
                    <option value="16 - 20">16 - 20</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="uploadImg" class="form-label">Upload Photo</label>
                {/* <input type="text" placeholder="Upload Photo" class="form-control" id="uploadImg" aria-describedby="uploadImgHelp" /> */}
                <div id="uploadImg" className="form-control d-flex justify-content-center" aria-describedby="uploadImgHelp">
                    <RiImageAddFill style={{ fontSize: "4.5rem", border: "2px dotted #042a04fc", padding: "5px", borderRadius: "8px", background: "#eae1e8" }} />
                </div>
                <div id="uploadImgHelp" class="form-text">Upload passport photo.</div>
            </div>
            <div class="mb-3">
                <label for="sapId" class="form-label">SAP ID</label>
                <input type="text" placeholder="SAP Id" class="form-control" id="sapId" aria-describedby="sapIdHelp" />
                <div id="sapIdHelp" class="form-text">Enter your SAP ID given by your college.</div>
            </div>
            <div class="mb-3">
                <label for="bpNo" class="form-label">BP No</label>
                <input type="text" onChange={(e)=>setBpNo(e.target.value)} value={bpNo} placeholder="BP No" class="form-control" id="bpNo" aria-describedby="bpNoHelp" />
                <div id="bpNoHelp" class="form-text">Enter your BP No given by your college.</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
const DropDown = ({ course, setCourse, branch, setBranch }) => {
    return (
        <div className="mb-3 d-flex justify-content-between">
            <span className="col-5">
                {/* <label for="course" class="form-label">Course</label>
            <input type="text" class="form-control" id="course"/> */}
                <label for="course" class="form-label">Course</label>
                <select class="form-select" id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
                    <option selected value="Btech">Btech</option>
                    <option value="Mtech">Btech</option>
                </select>
            </span>
            <span className="col-5">
                <label for="branch" class="form-label">Branch</label>
                <select class="form-select" id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
                    <option selected value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="MEC">MEC</option>
                </select>
            </span>
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
                selected={dob}
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
                onChange={(date) => setDob(date)} />
        </div>
    );
}

const addSelectClass = () => {
    window.$('.react-datepicker__month-select').addClass('form-select');
    window.$('.react-datepicker__year-select').addClass('form-select');
}