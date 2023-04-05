import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="16" className="footer-credit">
          <h3>A Special Thank You To
            <a href="https://github.com/soumyajit4419" 
               style={{ color: "white" }}
               target="_blank" 
               className="footer-link"
               rel="noopener noreferrer"> Soumyajit Behera
            </a>
            .
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
