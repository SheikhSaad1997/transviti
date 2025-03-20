import React from "react";
import { Container, Row, Col, Navbar, Nav, FormControl, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Container fluid className="py-2 px-lg-5" id="navigationBar">
      <Row className="d-flex align-items-center">
        <Col md="1" sm="2" xs="2" className="d-flex align-items-center">
          <img src="images/logo.png" alt="Logo" />
        </Col>
        <Col className="d-flex align-items-center justify-content-end justify-content-md-center" md="auto" sm="10" xs="10">
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="active" href="/">Find Jobs</Nav.Link>
                <Nav.Link href="#top-companies">Top Companies</Nav.Link>
                <Nav.Link href="#job-tracker">Job Tracker</Nav.Link>
                <Nav.Link href="#my-calendar">My Calendar</Nav.Link>
                <Nav.Link href="#documents">Documents</Nav.Link>
                <Nav.Link href="#messages">Messages</Nav.Link>
                <Nav.Link href="#notifications">Notifications</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col className="d-flex justify-content-center align-items-center top-search-wrapper m-3 m-md-0 ms-md-auto" md="2" xs="12">
          <img src="images/search.png" alt="Search Icon" />
          <FormControl id="globalSearch" className="top-search" placeholder="Search" />
        </Col>
        <Col md="2" className="d-flex align-items-center">
          <div className="header-logged-in">
            <Button variant="primary" className="primary-button resume">Resume Builder</Button>
            <img src="images/avatar.png" alt="User Avatar" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationBar;
