import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Social = () => {
  return (
    <ul className="nav nav-social">
      <li className="social-item">
        <a href="https://www.instagram.com/ibrahimallmamun/" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
      </li>
      <li className="social-item">
        <a href="https://www.facebook.com/ibrahim.all.mamun970" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
        </a>
      </li>
      <li className="social-item">
        <a href="https://www.linkedin.com/in/mimamun/" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
      </li>
      <li className="social-item">
        <a href="https://github.com/IbrahimAllMamun" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-square-github" />
        </a>
      </li>
      <li className="social-item">
        <a href="https://wa.me/qr/VJINPOEWW4AYJ1" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-square-whatsapp" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
