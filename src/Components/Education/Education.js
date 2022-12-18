import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ParticlesWrapper } from "../particles-wrapper";
import { TbArrowNarrowDown } from "react-icons/tb";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import myAvatar from "../../Assets/myAvatar.png";

function Education() {
  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Container fluid className="project-section">
      <ParticlesWrapper options={{ background: { color: "" } }} />
      <Container>
        <h1 className="project-heading">
          My Personal <strong className="purple">Qualifications </strong>
        </h1>
        <p style={{ color: "white" }}>Basic Qualification and Certifcations </p>
        <div>
          <Box
            sx={{
              width: "50%",
              maxWidth: "50%",
              justifyItems: "center",
              alignItems: "center",
              mt: "5%",
              ml: "auto",
              mr: "auto",
              mb: "0px",
              borderRadius: 1,
            }}
            component="nav"
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{
                backgroundColor: "#ad3e92",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <TbArrowNarrowDown
                    sx={{
                      fontStyle: "bold",
                    }}
                  />
                }
              >
                <Typography
                  variant="h5"
                  sx={{ fontStyle: "oblique", fontFamily: "Monospace" }}
                >
                  EDUCATION
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{ maxWidth: 900 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      p: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <>Medi-Caps University Indore, MP</>
                    <div padding="8px"> 2017-2021</div>
                  </Typography>
                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      Bachelor of Technology in Information Technology
                      specialization in Information Security (8.3 CGPA)
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ pl: 60, pb: 3 }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      href="https://www.medicaps.ac.in/"
                    >
                      Visit Website
                    </Button>
                  </CardActions>
                </Card>
              </AccordionDetails>
              <AccordionDetails>
                <Card sx={{ maxWidth: 900 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      p: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <>Army Public School Mhow, MP</>
                    <div padding="8px"> 2016-2017</div>
                  </Typography>
                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      Higher Secondary, Army Public School Mhow (8.0 CGPA)
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ pl: 60, pb: 3 }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      href="https://www.apsmhow.edu.in/"
                    >
                      Visit Website
                    </Button>
                  </CardActions>
                </Card>
              </AccordionDetails>
              <AccordionDetails>
                <Card sx={{ maxWidth: 900 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      p: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <>Army Public School Nasirabad, Rajasthan </>
                    <div padding="8px"> 2014-2015</div>
                  </Typography>
                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      Senior Secondary,Army Public School Nasirabad (9.4 CGPA)
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ pl: 60, pb: 3 }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      href="https://www.apsmhow.edu.in/"
                    >
                      Visit Website
                    </Button>
                  </CardActions>
                </Card>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            sx={{
              width: "50%",
              maxWidth: "80%",
              justifyItems: "center",
              alignItems: "center",
              mt: "5%",
              ml: "auto",
              mr: "auto",
              mb: "0px",
              borderRadius: 1,
            }}
            component="nav"
          >
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{
                backgroundColor: "#8a2da1",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <TbArrowNarrowDown
                    sx={{
                      fontStyle: "bold",
                    }}
                  />
                }
              >
                <Typography
                  variant="h5"
                  sx={{ fontStyle: "oblique", fontFamily: "Monospace" }}
                >
                  WORK EXPERIENCE
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{ maxWidth: 900 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      p: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <>Xoriant Solutions Pvt.Ltd, Pune - Software Developer</>
                    <div padding="8px"> June,2022- October,2022</div>
                  </Typography>
                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      <p className="purple">
                        Three real time projects so far - Xorpay(Citibank), IO
                        Flow (Cloudio.inc), Image Capture Application (Microsoft
                        Azure){" "}
                      </p>
                      <strong>Role- </strong>
                      To develop efficient code for backend and frontend.
                      Succesfully delievering expected features as per clients
                      need within limits of time. Worked on cutting edge
                      technologies like Java, React,Typescript and Javascript.
                      Took initiatives and responsibility to learn for the task
                      at hand.
                      <br />
                      {""}
                      Having indepth knowledge of Restfull webservices of
                      Salesforce, Confluence Spaces, Google Sites and Github
                      Pages. Worked with interesting databases like Oracle, IBM
                      Cloud, Postgres, MySql, MongoDB, Jira etc
                      <br />
                      {""}
                      Having privledge to work with Clients like- Citibank,
                      Microsoft Azure and Cloudio
                    </Typography>

                  </CardContent>
                  <CardActions sx={{ pl: 60, pb: 3 }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      href="https://www.xoriant.com/"
                    >
                      Visit Website
                    </Button>
                  </CardActions>
                </Card>
              </AccordionDetails>
              <AccordionDetails>
                <Card sx={{ maxWidth: 900 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      p: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <>Xoriant Solutions Pvt.Ltd, Pune - Intern</>
                    <div padding="8px">2021 (JANUARY-MAY)</div>
                  </Typography>
                  <Divider />
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      <strong>Role- </strong>
                      To design a module for Pancard (Document Image Analysis).
                      <br />
                      {""}
                      Succesfully completed the project within limits of time.
                      Worked on cutting technologies like Spring, AWS, Flask,
                      MongoDB etc.
                      <br />
                      {""}
                      Took initiatives and responsibility to learn for the task
                      at hand.
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ pl: 60, pb: 3 }}>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      href="https://www.xoriant.com/"
                    >
                      Visit Website
                    </Button>
                  </CardActions>
                </Card>
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      </Container>
      <Col md={5} style={{ paddingBottom: 20 }}>
        <img
          src={myAvatar}
          alt="home pic"
          className="img-fluid"
          style={{ maxHeight: "400px", borderRadius: 7 }}
        />
      </Col>
    </Container>
  );
}

export default Education;
