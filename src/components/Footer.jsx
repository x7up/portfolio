import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";  // GitHub icon
import { FaXTwitter } from "react-icons/fa6";  // Updated X icon from Font Awesome 6
import { FaLinkedinIn } from "react-icons/fa";  // LinkedIn icon


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Moosa Qaisar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
        <ul className="footer-icons">
      <li className="social-icons">
        <a
          href="https://github.com/x7up"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://x.com/QaisarMoosa"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/moosa-qaisar/"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
