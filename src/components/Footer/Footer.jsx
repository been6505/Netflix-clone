import React from "react";

import { FooterCon, FooterList } from "./FooterStyle";

function Footer() {
  return (
    <FooterCon>
      <p>Questions? Call 1-800-012-298</p>
      <FooterList>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Coperate Informations</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">jobs</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contect Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Redeem Gift Cards</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Buy Gift Cards</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Legal Preferences</a>
          </li>
        </ul>
      </FooterList>
      <a className="langBtn" href="#">
        English
      </a>
      <p>Netflix Thailand</p>
    </FooterCon>
  );
}

export default Footer;
