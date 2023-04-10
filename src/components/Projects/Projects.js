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
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              demoLink="https://app.staging.bbot.menu/local2?menu=10c7d77d-2626-45fd-86e9-b53b50bbc760"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={bbotGroupOrdering}
              isPersonalProject={false}
              sideBySide={true}
              title="Bbot - Group Ordering"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              demoLink="https://app.staging.bbot.menu/local2?menu=10c7d77d-2626-45fd-86e9-b53b50bbc760"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={whatsTheWait}
              isPersonalProject={true}
              sideBySide={false}
              title="What's The Wait?"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
