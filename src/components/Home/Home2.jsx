import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";  // GitHub icon
import { FaXTwitter } from "react-icons/fa6";  // Updated X icon
import { FaLinkedinIn } from "react-icons/fa";  // LinkedIn icon

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">highly motivated Computer Engineering student </b> 
              with a strong foundation in programming and web technologies.
              <br />
              <br />
              <b>Education:</b> <i>Currently pursuing B.Sc. in Computer Engineering</i> 
              at UET Taxila, graduating in 2025.
              <br />
              <br />
              My interests include:
              <ul>
                <li>
                  Developing <b className="purple"> Web Technologies and Products</b> 
                   using <b>React frameworks</b>.
                </li>
                <li>
                Developing <b className="purple">AI-based solutions</b>
                  
                </li>
              </ul>
              <br />
              I am skilled in:
              <i>
                <b className="purple"> C++, Java, MATLAB, Python, Verilog, SQL, </b>
                and more.
              </i>
              <br />
              <br />
              I enjoy creating products with <b className="purple">Node.js </b> 
              and <b className="purple">React.js</b>, as well as experimenting with{" "}
              <b className="purple">Cybersecurity related stuff</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src="./src/assets/musa.jpg"
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/x7up"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/QaisarMoosa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/moosa-qaisar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
