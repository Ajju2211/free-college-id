import React, { useRef} from 'react'
import Form from './Form'
import PrintOutput from './PrintOutput'
import { useReactToPrint } from 'react-to-print';
import Preview from './Preview';
import Back from './Output/Back';
import Previewcard from './Previewcard';
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
export default function FormBox() {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div className="row m-0 mt-2 justify-content-center">
      <div className="col-md-5 col-12 mt-2">
        <div className="container bg-dark text-white" style={{ borderRadius: "10px" }}>
          <h3 className="text-center text-white">Details</h3>
          <Form />
        </div>
      </div>
      <div className="col-md-7 col-12 mt-2 p-2">
        <div className="row" style={{justifyContent: "center"}}>
        <h3 className="text-center text-white">Preview</h3>
          <button  onClick={()=>{
            window.$('#printOutPut').show();
            handlePrint();
            window.$('#printOutPut').hide();
          }} class="down" id="downloadbtn" style={{outline:"none",left:"0",right:"0",padding:"8px 15px 8px 15px",width:"fit-content",margin:"10px",borderRadius:"5px",fontWeight:"bold"}}>Download</button>
         </div>
        <div className="container pt-3 pb-3 previewCont" style={{cursor:"move"}}>
          <div className="row justify-content-center" style={{flexDirection:"column", alignItems:"center"}}>
          {/* <Preview/> */}
          <div id="printMe" className="row">
            <PrintOutput ref={componentRef}  />
          </div>
          </div>
          <div className="row p-0 m-0" style={{width:"14.1cm", height:"7.8cm",position:"relative",alignItems:"center",justifyContent:"center"}}>
            <Previewcard/>
            {/* <Back scale={true}/> */}
            </div>
            <div className="row p-0 m-0 mb-3" style={{width:"14.1cm", height:"7.8cm",position:"relative",justifyContent:"center"}}>
            
            <Back scale={true}/>
            </div>
            <div className="w-50" style={{height:"10px",marginBottom:"20px"}}></div>
        </div>
      </div>

    </div>
  )
}
