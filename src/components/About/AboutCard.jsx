import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Moosa Qaisar</span> from 
            <span className="purple"> Rawalpindi, Pakistan.</span>
            <br />
            I am currently working as a <b className="purple">Software Developer</b>.
            <br />
            I am passionate about developing AI-based solutions 
            <br />
            <br />
            Besides coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build solutions that leave an impact!"
          </p>
          <footer className="blockquote-footer">Moosa Qaisar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
