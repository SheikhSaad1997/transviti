import React from "react";
import { Card, Row, Col, Stack, Button } from "react-bootstrap";

const FeaturedJobs = ({ title, secondaryText, jobCount }) => {
  return (
    <div className="featured-jobs">
      <div className="title">
        <p>{title}</p>
        <span className="secondary-color">{secondaryText}</span>
      </div>
      {[...Array(jobCount)].map((_, index) => (
        index % 5 === 0 ? <Row key={index} className="mb-md-4">
          {[...Array(Math.min(5, jobCount - index))].map((_, subIndex) => (
            <Col key={index + subIndex} className="mb-2 mb-md-0 job-col">
              <Card className="job-card">
                <Row>
                  <span className="promotion-status">Promoted</span>
                </Row>
                <Row className="title-wrapper">
                  <Col xl="3" sm="3" xs="3" className="center pe-0">
                    <img src="images/teams-two.png" alt="" className="img-fluid" />
                  </Col>
                  <Col className="title-column">
                    <p className="job-title">UI/UX Designer</p>
                    <span>Teams</span>
                  </Col>
                </Row>
                <Stack direction="horizontal" className="location">
                  <img src="images/location.png" alt="" />
                  <p>Seattle, USA (Remote)</p>
                </Stack>
                <Stack direction="horizontal" className="time-and-applicants">
                  <img src="images/time.png" alt="" />
                  <p>
                    1 day ago | <span className="applicants">22 applicants</span>
                  </p>
                </Stack>
                <Row className="mt-3">
                  <Col className="d-flex justify-content-start align-items-center">
                    <Button variant="primary" className="primary-button apply-now">
                      Apply Now
                    </Button>
                  </Col>
                  <Col className="d-flex justify-content-end align-items-center" xl="3" sm="3" xs="3">
                    <img src="images/bookmark.png" className="bookmark-job" alt="" />
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row> : null
      ))}
    </div>
  );
};

export default FeaturedJobs;
