import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Typewriter"
import { ParticlesWrapper } from "../particles-wrapper";
import Home2 from "./Home2";
import myAvatar from "../../Assets/myAvatar.png"

function Home() {
  return (
    <>
      <ParticlesWrapper options={{ background: { color: '' }}} />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I AM
                <strong className="main-name"> SRADDHA SHARMA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

           <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myAvatar}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px", borderRadius:7 }}
              />
            </Col> 
          </Row>
        </Container>
      </Container>
      <Home2 />
    </>
  );
}

export default Home;
