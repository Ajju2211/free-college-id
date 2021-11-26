import React, { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const htmlBody = (
  <p>
    <h3>Support us if you like this😄</h3>
    <a href="https://www.buymeacoffee.com/azharuddin">
      <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=azharuddin&button_colour=462a2a&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00" />
    </a>
  </p>
);
const myAlert = (onClose) => {
  MySwal.fire({
    title: <p>Downloading your ID...!</p>,
    footer: "Powered by MARS",
    html: htmlBody,
    showCloseButton: false,
    showConfirmButton: false,
    willClose: () => {
      onClose(false);
    },
  });
};

const ShowDownloading = ({ onClose }) => {
  const { windWidth, windHeight } = useWindowSize();
  myAlert(onClose);
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

export default ShowDownloading;
