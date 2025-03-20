import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Router } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, FormControl, Button, Stack, Navbar, Nav, NavDropdown, Form, Card } from "react-bootstrap";
import FeaturedJobs from "~/dashboard/jobs-component";
import React, { useEffect, useState } from "react";
import NavigationBar from "~/dashboard/header-component";
import Sidebar from "~/dashboard/sidebar-component";
import Greeting from "~/dashboard/greeting-component";
import SearchJobs from "~/dashboard/search-component";
import SimilarOptions from "~/dashboard/similar-component";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Talent Vare" },
    { name: "description", content: "Find your dream job!" },
  ];
}

export default function Home() {
  const [availableHeight, setAvailableHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector("#navigationBar");
      const secondHeader = document.querySelector(".greeting-container");
      const thirdHeader = document.querySelector(".search-jobs");
      const fourthHeader = document.querySelector(".similar-options");

      const headerHeight = header ? header.offsetHeight : 0;
      const secondHeaderHeight = secondHeader ? secondHeader.offsetHeight : 0;
      const thirdHeaderHeight = thirdHeader ? thirdHeader.offsetHeight : 0;
      const fourthHeaderHeight = fourthHeader ? fourthHeader.offsetHeight : 0;

      setAvailableHeight(window.innerHeight - (headerHeight + secondHeaderHeight + thirdHeaderHeight + fourthHeaderHeight + 80) + "px");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <>
      <NavigationBar></NavigationBar>
      <Container fluid className="py-4 body-bg-primary px-lg-5">
        <Row>
          <Sidebar></Sidebar>
          <Col xl='9'>
            <Greeting></Greeting>
            <SearchJobs></SearchJobs>
            <SimilarOptions></SimilarOptions>
            <div className="jobs-scroller mt-3" style={{ maxHeight: availableHeight, overflowY: "auto" }}>
              <FeaturedJobs title={"Featured Jobs"} secondaryText={"See Featured Jobs"} jobCount={5}></FeaturedJobs>
              <hr />
              <FeaturedJobs title={"Recommended Jobs"} secondaryText={"See Recommended Jobs"} jobCount={10}></FeaturedJobs>
              <hr />
              <FeaturedJobs title={"Latest Jobs"} secondaryText={"See Latest Jobs"} jobCount={10}></FeaturedJobs>
            </div>
          </Col>
        </Row>
      </Container>
    </ >
  )
}
