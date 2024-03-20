import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/calculator-.png";
import emotion from "../../Assets/Projects/trojan.jpg";
import editor from "../../Assets/Projects/investkart.png";
import chatify from "../../Assets/Projects/servekllience system-.png";
import suicide from "../../Assets/Projects/google pay-.png";
import bitsOfCode from "../../Assets/Projects/weather forecast-.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Surveillance System"
              description="Surveillance System is an advanced security application utilizing ReactJS,Socket IO,Flask,OpenCV,and ArcGIS Mapping Library. It empowers government agencies to upload threat photos,detect faces,and track suspects in real-time. This innovative solution enhances public safety by leveraging technology and community engagement for proactive threat detection and monitoring. "
              ghLink="https://github.com/Abhikumar9896/HackHazard"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="WeatherForecast.in"
              description="This Weather Forecast App allows users to check the current weather conditions either by their current location or by searching for a specific city. It provides information such as temperature, wind speed, humidity, and cloudiness."

              ghLink="https://github.com/Abhikumar9896/Weather-Forecast-App"
              demoLink="https://weather-forecast-app-xi.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Investkart"
              description="Investkart is a platform connecting startups and investors, facilitating deal-making. It offers educational resources for business learning. Built with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, it provides a comprehensive solution for entrepreneurial networking and education."
              ghLink="https://github.com/Abhikumar9896/hackwithmait2.0"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Talking Calc"
              description="This interactive calculator web app enables users to perform basic arithmetic operations with a unique speaking feature. Utilizing HTML, CSS, and JavaScript, it offers functionalities like clear last digit, clear entire display, and speech synthesis for announcing results and operations."
              ghLink="https://github.com/Abhikumar9896/Abhishek-Talking-Calculator"
              demoLink="https://abhishek-talking-calculator.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Google Pay Clone"
              description="My project is a Google Pay website clone created using HTML and CSS. It replicates the user interface and design of the original platform, offering a visually appealing and functional representation of Google Pay's features and functionalities."
              ghLink="https://github.com/Abhikumar9896/Google-pay"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Trojan Detection System"
              description="My project is a Trojan malware detection system developed in Python. It employs advanced algorithms to identify and neutralize malicious software threats, enhancing cybersecurity measures. This system offers proactive defense mechanisms against Trojan infections for improved system security."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
