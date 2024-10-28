import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaLaptopCode, FaSearch, FaShoppingCart, FaProjectDiagram } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my key projects that showcase my technical skills.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={<FaShoppingCart size={60} />} // Icon for e-commerce project
              isBlog={false}
              title="E-commerce Website (WordPress)"
              description="Developed a feature-rich e-commerce website with user authentication, shopping cart, and payment gateway integration. Enhanced user experience through custom themes and plugins."
              ghLink="#"  // Replace with the actual link if available
              demoLink="#"  // Replace with the actual demo link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={<FaLaptopCode size={60} />} // Icon for the steganography project
              isBlog={false}
              title="Digital Steganography Application"
              description="Created a steganography tool in Java that hides audio, video, and image files within other media to enhance data security. The application supports various embedding techniques."
              ghLink="#"  // Replace with the actual GitHub link
              demoLink="#"  // Replace with a valid demo if applicable
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={<FaSearch size={60} />} // Icon for the search engine project
              isBlog={false}
              title="Search Engine (C++)"
              description="Designed and implemented a search engine using C++ with efficient indexing algorithms and relevance ranking techniques for optimal information retrieval."
              ghLink="#"  // Replace with the actual GitHub link
              demoLink="#"  // Replace with demo if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={<FaProjectDiagram size={60} />} // Icon for portfolio project
              isBlog={false}
              title="Portfolio Website (React)"
              description="Built a responsive portfolio website to showcase my skills and projects using React.js. Implemented React components and applied responsive design principles for an engaging user interface."
              ghLink="https://github.com/x7up/portfolio"  // Replace with your portfolio GitHub link
              demoLink="moosaqaisar.netlify.app"  // Replace with your demo link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
