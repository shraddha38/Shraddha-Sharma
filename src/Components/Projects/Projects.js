import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { ParticlesWrapper } from "../particles-wrapper";
import Tracker from "../../Assets/Projects/Tracker.png";
import Shop from "../../Assets/Projects/Shop.png";
import MindMapIt from "../../Assets/Projects/MindMapIt.png";
import Fitness from "../../Assets/Projects/Fitness.png";
import ICA from "../../Assets/Projects/ICA.png";
import Vote from "../../Assets/Projects/Vote.png";


function Projects() {
  return (
    <Container fluid className="project-section">
         <ParticlesWrapper options={{ background: { color: '' }}} />
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
              imgPath={ICA}
              isBlog={false}
              title="Image Capture Application"
              description="Image Capture Application intuitively helps transform your paper-based business processes by leveraging best of breed OCR technology. Captures, classifies, and recognizes text.
              Image Capture Application is a Microsoft Azure based intuitive document digitization solution. It uses Microsoft Azure OCR services to extract printed/ handwritten text images  (key-value pairs) from images and multi-page documents. "
              link="https://github.com/shraddha38/ImageCaptureApplication"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vote}
              isBlog={false}
              title="Block chain based e-voting system"
              description="Current voting systems like ballot box voting or electronic voting suffer from various security threats such as DDoS attacks, polling booth capturing, vote alteration and manipulation, malware attacks, etc, and also require huge amounts of paperwork, human resources, and time. "
              link="https://github.com/shraddha38/e-voting-system-Blockchain-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fitness}
              isBlog={false}
              title="Fitness Tracker"
              description="Fitness tracker is an app where you can register yourself for appointments with gym Trainers and view Fitness Trainer Appointment. It is build in Angular.js"
              link="http://fitness-tracker-zeta.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MindMapIt}
              isBlog={false}
              title="MindMap-It"
              description="Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list. 
              Todoist gives you the confidence that everything’s organized and accounted for, so you can make progress on the things that are important to you. 
              It is build in Vue.js"
              link="https://todo-vue-beryl.vercel.app/#/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shop}
              isBlog={false}
              title="Shopping-cart"
              description="Shopping Cart is build with the feature of adding items count and decreasing item count in ReactJS. It also contains cart where you can view pricing of products."
              link="https://shopping-cart-react-one.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tracker}
              isBlog={false}
              title="CovidCases-tracker"
              description="It is a tracker of Covid cases around the glob with features to know highest, lowest and null cases along with a graph in different countries. It uses covidanalysis api to analyse data. It is purely build in React.js"
              link="https://react-covid-data-analysis.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
