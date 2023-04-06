import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiRedux,
  SiMongodb
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <p>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p>Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
        <p>Node</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p>Express</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <p>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p>Redux</p>
      </Col>
    </Row>
  );
}

export default Techstack;
