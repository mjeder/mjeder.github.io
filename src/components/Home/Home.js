import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import myImg from "../../Assets/profile-pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
      <Container fluid className="home-section-background" id="about">
        <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 className="heading">
                 Hi there!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading">
                  I'm
                  <strong className="main-name"> Matt Eder</strong>
                </h1>

                <div className="heading-type">
                  <Type />
                </div>
              </Col>
            </Row>
          </Container>
        <Container>
          <Container className="home-bio">
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                ALLOW ME TO <span className="light-blue"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
              I'm a Front-End developer based in <b className="light-blue"> Chicago, IL</b> experienced in building <b className="light-blue">robust client facing applications</b> with involvement throughout the entire software development lifecycle.
                <br />
                <br />I have a history of working with
                <i>
                  <b className="light-blue"> Javascript, Typescript </b>
                </i>
                  and
                  <i>
                  <b className="light-blue"> Python. </b>
                </i>But I am always looking to expand my skillset.
                <br />
                <br />
                My background in&nbsp;
                <i>
                  <b className="light-blue">hospitality operations </b>
                  and&nbsp;
                  <b className="light-blue">
                  SaaS sales&nbsp; 
                  </b>
                </i>
                has provided me with unique and valuable customer facing experience and perspective that I channel when solving the fun and complex problems involved with software development.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="profile" />
              </Tilt>
            </Col>
          </Row>
          </Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="light-blue">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/soumyajit4419/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home;
