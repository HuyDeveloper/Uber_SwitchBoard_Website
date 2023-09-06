import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'

const footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Uber Clone</h3>
        <p>
          Made with <span class="heart">&#10084;</span> by QH And VT
        </p>
        <ul className="socials">
          <li>
            <a href="#">
            <FontAwesomeIcon icon={faFacebook} size="2xl" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li> */}
          <li>
            <a href="#">
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
          </li>
          <li>
            <a href="#">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Uber Clone</a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;
