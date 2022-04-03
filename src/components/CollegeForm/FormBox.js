import React, { useState, useRef } from "react";
import Form from "./Form";
import PrintOutput from "./PrintOutput";
import { useReactToPrint } from "react-to-print";
import { saveAs } from 'file-saver';
import Preview from "./Preview";
import Back from "./Output/Back";
import Previewcard from "./Previewcard";
import ShowAlert from "./ShowAlert";
import ShowDownloading from "./ShowDownloading";
// const downloadImage = () => {
//   window.scrollTo(0, 0);
//   window.html2canvas(window.document.querySelector("#printMe")).then(canvas => {
//     let a = window.document.createElement('a');
//     window.document.body.appendChild(a);

//     a.download = "test.png";
//     a.href = canvas.toDataURL();
//     a.click();
//   });
// }
const getRollNumber = (email) => {
  if (email.length < 1) {
    return "";
  }
  return email.split("@")[0];
};
export default function FormBox(props) {
  const [fullName, setFullName] = useState(JSON.parse(props.user).name || "");
  const [fatherName, setFatherName] = useState("");
  const [branch, setBranch] = useState(props.data.branches[0].value);
  const [course, setCourse] = useState(props.data.courses[0].value);
  const [rollNumber, setRollNumber] = useState(
    getRollNumber(JSON.parse(props.user).email || "")
  );
  const [latEntry, setlatEntry] = useState("false");
  const [duration, setDuration] = useState("");
  const [period, setPeriod] = useState(props.data.courses[0].duration);
  const [dob, setDob] = useState("");
  const [sapId, setSapId] = useState("");
  const [bpNo, setBpNo] = useState("");
  // const [passportImg, setPassportImg] = useState(`https://cloud-print.herokuapp.com/images/snist/${rollNumber}`);
  const [passportImg, setPassportImg] = useState(`//images.weserv.nl/?url=103.15.62.28/upload/${rollNumber}.gif&w=300&h=300`);
  const [printSides, setPrintSides] = useState("both");
  const [printType, setPrintType] = useState("pdf");
  const [showAlert, setShowAlert] = useState(false);
  const [showDownloading, setShowDownloading] = useState(false);
  const componentRef = useRef();
  function blobToBase64(blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
  const handlePrintImage = () => {
    // &passportImg=
    let url = `https://cloud-print.herokuapp.com/?fullName=${fullName}&fatherName=${fatherName}&branch=${branch}&course=${course}&rollNumber=${rollNumber}&latEntry=${latEntry}&duration=${duration}&period=${period}&dob=${dob}&sapId=${sapId}&printSides=both`;
    if (passportImg.length > 1) {
      // blobToBase64(window.user_image_blob).then(data=>{
      //   const form = new FormData();
      //   form.append("file", data);
      //   const api = `http://localhost:5500/images/${rollNumber || "random"}`;
      //   fetch(api, {
      //     method: "POST",
      //     body: form
      //   }).then(r=>r.json()).then(res=>{
      //     document.querySelector("#downloadbtn").style.disabled = true;
      //     url+=`&passportImg=${res.url}`;
      //     saveAs(url, rollNumber + "_freeidcard");
      //     showAlert(true);
      //     document.querySelector("#downloadbtn").style.disabled = false;
      //   });
      // })
      const form = new FormData();
      form.append("file", window.user_image_blob);
      const api = `https://cloud-print.herokuapp.com/images/${rollNumber || "random"}`;
      fetch(api, {
        method: "POST",
        body: form
      }).then(r => r.json()).then(res => {
        document.querySelector("#downloadbtn").style.disabled = true;
        url += `&passportImg=${res.url}`;
        saveAs(url, rollNumber + "_freeidcard");
        setShowAlert(true);
      });
    }
    else {
      document.querySelector("#downloadbtn").style.disabled = true;
      saveAs(url, rollNumber + "_freeidcard");
      showAlert(true);
      document.querySelector("#downloadbtn").style.disabled = false;
    }

  }
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => setShowAlert(true),
  });
  console.log(props);
  return (
    <div className="row m-0 mt-2 justify-content-center">
      {showAlert ? <ShowAlert onClose={setShowAlert} /> : <></>}
      {showDownloading ? <ShowDownloading onClose={setShowDownloading} /> : <></>}
      <div className="col-md-5 col-12 mt-2">
        <div
          className="container bg-dark text-white"
          style={{ borderRadius: "10px" }}
        >
          <h3 className="text-center text-white">Details</h3>
          <Form
            {...props}
            fullName={fullName}
            setFullName={setFullName}
            fatherName={fatherName}
            setFatherName={setFatherName}
            branch={branch}
            setBranch={setBranch}
            course={course}
            setCourse={setCourse}
            rollNumber={rollNumber}
            setRollNumber={setRollNumber}
            duration={duration}
            setDuration={setDuration}
            period={period}
            setPeriod={setPeriod}
            dob={dob}
            setDob={setDob}
            sapId={sapId}
            setSapId={setSapId}
            bpNo={bpNo}
            setBpNo={setBpNo}
            passportImg={passportImg}
            setPassportImg={setPassportImg}
            latEntry={latEntry}
            setlatEntry={setlatEntry}
            printSides={printSides}
            setPrintSides={setPrintSides}
            printType={printType}
            setPrintType={setPrintType}
          />
        </div>
      </div>
      <div className="col-md-7 col-12 mt-2 p-2">
        <div className="row" style={{ justifyContent: "center" }}>
          <h3 className="text-center text-white">Preview</h3>
          <button
            onClick={() => {
              if (printType == "pdf") {
                window.$("#printOutPut").show();
                handlePrint();
                window.$("#printOutPut").hide();
              }
              else {
                handlePrintImage();
              }
              window.gtag("event", "users_printed", {
                "count": "printed"
              });
              // window.gtag("event", "user_printed", {
              //   users: [
              //     JSON.stringify({
              //       name: fullName,
              //       fatherName: fatherName,
              //       rollNumber: rollNumber,
              //       branch: branch,
              //       sapId: sapId,
              //       bpNo: bpNo,
              //       course: course,
              //       latEntry: latEntry,
              //       dob: dob,
              //       duration: duration,
              //       printSides: printSides,
              //     }),
              //   ],
              // });
            }}
            class="down"
            id="downloadbtn"
            style={{
              outline: "none",
              left: "0",
              right: "0",
              padding: "8px 15px 8px 15px",
              width: "fit-content",
              margin: "10px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Download
          </button>
        </div>
        <div
          className="container pt-3 pb-3 previewCont"
          style={{ cursor: "move" }}
        >
          <div
            className="row justify-content-center"
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            {/* <Preview/> */}
            <div id="printMe" className="row">
              <PrintOutput
                fullName={fullName}
                fatherName={fatherName}
                branch={branch}
                course={course}
                rollNumber={rollNumber}
                latEntry={latEntry}
                duration={duration}
                period={period}
                dob={dob}
                printSides={printSides}
                sapId={sapId}
                bpNo={bpNo}
                passportImg={passportImg}
                ref={componentRef}
              />
            </div>
          </div>
          <div
            className="row p-0 m-0"
            style={{
              width: "14.1cm",
              height: "7.8cm",
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Previewcard
              fullName={fullName}
              fatherName={fatherName}
              branch={branch}
              course={course}
              rollNumber={rollNumber}
              latEntry={latEntry}
              duration={duration}
              period={period}
              dob={dob}
              sapId={sapId}
              bpNo={bpNo}
              passportImg={passportImg}
            />
            {/* <Back scale={true}/> */}
          </div>
          <div
            className="row p-0 m-0 mb-3"
            style={{
              width: "14.1cm",
              height: "7.8cm",
              position: "relative",
              justifyContent: "center",
            }}
          >
            <Back
              fullName={fullName}
              fatherName={fatherName}
              branch={branch}
              course={course}
              rollNumber={rollNumber}
              latEntry={latEntry}
              duration={duration}
              period={period}
              dob={dob}
              sapId={sapId}
              bpNo={bpNo}
              passportImg={passportImg}
              scale={true}
            />
          </div>
          <div
            className="w-50"
            style={{ height: "30px", marginBottom: "20px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
