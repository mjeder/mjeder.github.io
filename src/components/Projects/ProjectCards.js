import React from "react";
import { Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Title>{props.title}</Card.Title>
      <Row className="project-row">
        <Col md={props.sideBySide ? 6 : 12}> 
          <Card.Body>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
          </Card.Body>
        </Col> 
        <Col md={props.sideBySide ? 6 : 12}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" className={props.sideBySide ? "side" : "stacked"} />
        </Col>
      </Row>
      <Card.Footer className="project-card-buttons">
        <Button
            className="project-buttons"
            variant="primary"
            href={props.demoLink}
            target="_blank"

          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.isPersonalProject && props.ghLink && (
          <Button className="project-buttons" variant="primary" href={props.ghLink} target="_blank" style={ { marginLeft: "10px" }}>
            <BsGithub /> &nbsp;
            GitHub
          </Button>
        )}
        </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
