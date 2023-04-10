import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import bbotMain from "../../Assets/Projects/bbot.png";
import bbotGroupOrdering from "../../Assets/Projects/bbot-g-o.png";
import whatsTheWait from "../../Assets/Projects/wtw.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="light-blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've been involved in throughout my career and on the side.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={bbotMain}
              isPersonalProject={false}
              sideBySide={true}
              title="Bbot"
              description="Bbot is #1 Order & Pay at the Table solution for restaurants. It’s simple. Your guests start with a QR code — in just a few taps, they can easily browse your interactive menu, order when ready, and pay right from their mobile device. Primarily developed frontend components and pages for a Typescript/React consumer site, alongside Python for a Django backend. This project was developed at DoorDash/Bbot so the source code is unavailable to review. The demo link below is to Bbot's staging site so feel free to click around and place an order using Stripe's test card 4242 4242 4242 4242."
              demoLink="https://app.staging.bbot.menu/local2?menu=10c7d77d-2626-45fd-86e9-b53b50bbc760"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={bbotGroupOrdering}
              isPersonalProject={false}
              sideBySide={true}
              title="Bbot - Group Ordering"
              description="Developed, tested, and shipped a mobile first React feature that allowed users to build an order collaboratively using their own devices. This project was developed at DoorDash/Bbot so the source code is unavailable to review. The demo link below is to Bbot's staging site so feel free to click around and place an order using Stripe's test card 4242 4242 4242 4242."
              demoLink="https://app.staging.bbot.menu/local2?menu=10c7d77d-2626-45fd-86e9-b53b50bbc760"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={whatsTheWait}
              isPersonalProject={true}
              sideBySide={false}
              title="What's The Wait? (2020)"
              description="My capstone project culminating my twelve weeks spent with General Assembly. What's The Wait? is a waitlist management system built for restaurants. It enables users to create waitlists that can be used to manage a busy Saturday night or keep a reservation list for a holiday that is coming up. Built using React.js and deployed with GH-Pages & Heroku. (Disclaimer: App is still in development 2020)"
              ghLink="https://github.com/mjeder/whats-the-wait-client"
              demoLink="https://mjeder.github.io/whats-the-wait-client/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
