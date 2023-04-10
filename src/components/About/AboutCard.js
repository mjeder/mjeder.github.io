import React from "react";
import { Container } from "react-bootstrap";


function AboutCard() {
  return (
    <Container className="about-bio">
        <p>
            I'm based in <b className="light-blue"> Chicago, IL</b> and currently looking for a new company to continue my career with. I'm open to remote or hybrid roles as a <b className="light-blue"> Front-End Engineer</b>, <b className="light-blue"> QA Engineer</b>, or <b className="light-blue"> Sales Engineer</b>.
            
            <br />
            <br />
            
            Previously, I was a Front-End Engineer at <b className="light-blue"> DoorDash</b> on the Digital Ordering team, we focused on building DoorDash's first ever Order & Pay at the Table product. We successfully launched two major features - <b className="light-blue"> Group Ordering</b>, which allowed users to build an order collaboratively using their own devices & <b className="light-blue"> Order Now, Pay Later</b>, which gave users the opportunity to start tabs on their own devices using Digital Wallets instead of paying after each order. 

            <br />
            <br />

            Prior to DoorDash, I was a <b className="light-blue"> Quality Assurance Engineer</b> at <b className="light-blue"> Bbot</b>, a restaurant technology startup (eventually acquired by DoorDash). This was my first experience in Software Development industry and allowed me the opportunity to grow into the developer I am today.

            <br />
            <br />

            Before that I wore many different hats across the hospitality industry...
            <br />
            - Account Executive at Toast
            <br />
            - Jr. Product Manager at Topgolf 
            <br />
            - Venue Operations Manager at Topgolf
            <br />
            - Training Consultant at Topgolf
            <br />
            <br />
            My background has provided me valuable customer facing experience and perspective that I channel when solving the fun and complex problems involved with software development.
        </p>
  </Container>

  );
}

export default AboutCard;
