import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../../Assets/myPhoto.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br /> Currently living in <b className="purple"> Winnipeg,Manitoba, Canada </b>
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript,React,Typescript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest's are providing solutions;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Blockchain and Information Security.</b>
              </i>
              <br />
              <br />
              Designing and developing <i>
                <b className="purple">
                  {" "}
                  high-volume,
                  low-latency
                </b>
              </i>applications for mission-critical systems and delivering high-availability and performance.
              <br />
              <br />
              {" "}
              Contributing in all phases of the
              <i>
                <b className="purple"> development lifecycle</b>
              </i>
              and writing well
              <i>
                <b className="purple"> designed, testable, efficient
                </b>
              </i>code.  </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shraddha38"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sraddha-sharma-794847178/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/___shraddha3___/"
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
export default Home2;
