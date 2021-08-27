import React, { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const htmlBody = (
  <p>
    <h3>Give it a try! 😄</h3>
      <img className="img-fluid" src="/Demo.gif" />
  </p>
);
const myAlert = (onClose) => {
  MySwal.fire({
    title: <p>FreeIdCard Demo!</p>,
    footer: "Powered by MARS",
    html: htmlBody,
    showCloseButton: true,
    showConfirmButton: false,
    willClose: () => {
      onClose(false);
    },width:"90vw"
  });
};

const ShowDemo = ({ onClose }) => {
  const { windWidth, windHeight } = useWindowSize();
  myAlert(onClose, );
  return (
    <div>
      <Confetti
        style={{position:"fixed"}}
        gravity={0.2}
        initialVelocityY={15}
        width={windWidth}
        height={windHeight}
      />
    </div>
  );
};

export default ShowDemo;
