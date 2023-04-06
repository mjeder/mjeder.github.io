import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPycharm,
  SiVisualstudio,
  SiAmazonaws,
  SiSentry,
  SiCypress,
  SiFigma,
  SiSelenium
} from "react-icons/si";
import {
  GiAmplitude
} from "react-icons/gi"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p>Amazon Web Services</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
        <p>Cypress</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
        <p>Selenium</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSentry />
        <p>Sentry</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <GiAmplitude />
        <p>Amplitude</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p>Figma</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p>Pycharm</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <p>VS Code</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
