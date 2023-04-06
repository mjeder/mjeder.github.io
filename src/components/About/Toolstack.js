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
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSentry />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiAmplitude />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
    </Row>
  );
}

export default Toolstack;
