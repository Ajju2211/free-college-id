import React, { useRef} from 'react'
import Form from './Form'
import PrintOutput from './PrintOutput'
import { useReactToPrint } from 'react-to-print';
import Preview from './Preview';
const downloadImage = () => {
  window.scrollTo(0, 0);
  window.html2canvas(window.document.querySelector("#printMe")).then(canvas => {
    let a = window.document.createElement('a');
    window.document.body.appendChild(a);

    a.download = "test.png";
    a.href = canvas.toDataURL();
    a.click();
  });
}
export default function FormBox() {

  const pageStyle = `
  @page {
    size: landscape;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }
`;
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
      <div className="col-md-7 col-12 mt-2">
        <div className="container previewCont" >
          <h3 className="text-center text-white">Preview</h3>
          <button  onClick={()=>{
            window.$('#printOutPut').show();
            handlePrint();
            window.$('#printOutPut').hide();
          }} class="down" style={{outline:"none",padding:"8px 15px 8px 15px",margin:"10px",borderRadius:"5px"}}>Download</button>
          <Preview/>
          <div id="printMe" className="row">
            <PrintOutput ref={componentRef}  />
          </div>
        </div>
      </div>

    </div>
  )
}
