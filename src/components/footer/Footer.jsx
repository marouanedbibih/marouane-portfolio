import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Marouane Dbibih</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact us
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/codewithmarouane"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.instagram.com/codewithmarouane"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/codewithmarouane"
            className="footer__social-icon"
            target="_blank"
          >
            <i class="bx bxl-whatsapp"></i>
          </a>{" "}

        </div>

        <span className="footer__copy">
          &#169; Crypticalcoder. All rigths reserved Designed by Marouane Dbibih
        </span>
      </div>
    </footer>
  );
}

export default Footer;
