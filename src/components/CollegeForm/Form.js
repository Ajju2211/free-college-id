import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "./datePickerCustom.css"
export default function Form() {
    const [fullName, setFullName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [branch, setBranch] = useState("");
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
                <input type="text" placeholder="Full Name" class="form-control" id="fullName" aria-describedby="fullNameHelp" />
                <div id="fullNameHelp" class="form-text">Enter your Full Name as per college records.</div>
            </div>
            {/* Father name */}
            <div class="mb-3">
                <label for="fatherName" class="form-label">Father's Name</label>
                <input type="text" placeholder="Father's Name" class="form-control" id="fatherName" aria-describedby="fatherNameHelp" />
                {/* <div id="fatherNameHelp" class="form-text">Enter your Full Name as per college records.</div> */}
            </div>
            {/* Course, Branch */}
            <DropDown />
            {/* Roll numbr */}
            <div class="mb-3">
                <label for="rollNumber" class="form-label">Roll Number</label>
                <input type="text" placeholder="Roll Number" class="form-control" id="rollNumber" />
                {/* <div id="fullNameHelp" class="form-text">Enter your Full Name as per college records.</div> */}
            </div>
            {/* DOB */}
            <Dob dob={dob} setDob={(date)=>setDob(date)} />
            <div className="mb-3">
                <label for="duration" class="form-label">Duration</label>
                <select class="form-select" aria-label="Default select example" id="duration">
                    <option selected value="18- 22">18- 22</option>
                    <option value="17 - 21">17 - 21</option>
                    <option value="16 - 20">16 - 20</option>
                </select>            
            </div>
            <div class="mb-3">
                <label for="fullName" class="form-label">FullName</label>
                <input type="text" placeholder="Full Name" class="form-control" id="fullName" aria-describedby="fullNameHelp" />
                <div id="fullNameHelp" class="form-text">Enter your Full Name as per college records.</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
const DropDown = () => {
    return (
        <div className="mb-3 d-flex justify-content-between">
            <span className="col-5">
                {/* <label for="course" class="form-label">Course</label>
            <input type="text" class="form-control" id="course"/> */}
                <label for="course" class="form-label">Course</label>
                <select class="form-select" aria-label="Default select example" id="course">
                    <option selected value="Btech">Btech</option>
                    <option value="Mtech">Btech</option>
                </select>
            </span>
            <span className="col-5">
                <label for="branch" class="form-label">Branch</label>
                <select class="form-select" aria-label="Default select example" id="branch">
                    <option selected value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="MEC">MEC</option>
                </select>
            </span>
        </div>
    )
}
// selected={startDate}
const Dob = ({dob, setDob}) => {
    // const [startDate, setStartDate] = useState(new Date());
    return (
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
            minDate={new Date('01/01/1970')}
            onChange={(date) => setDob(date)} />
    );
}

const addSelectClass = () => {
    window.$('.react-datepicker__month-select').addClass('form-select');
    window.$('.react-datepicker__year-select').addClass('form-select');
}