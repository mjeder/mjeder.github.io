import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        {/* Bio Section */}
        <Container className="about-me-container">
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
                ABOUT<strong className="light-blue"> ME</strong>
              </h1>
              <Aboutcard />
            </Col>
          </Row>
        </Container>

        {/* Skills Section */}
        <h1 className="project-heading">
          Professional <strong className="light-blue">Skillset </strong>
        </h1>
        <Techstack />

        {/* Tools Section */}
        <h1 className="project-heading">
          <strong className="light-blue">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
