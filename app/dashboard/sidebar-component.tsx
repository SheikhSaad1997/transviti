import React from "react";
import { Col, Row } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Col xl="3" className="d-flex align-items-center flex-column">
      {/* Profile Section */}
      <div className="profile-section d-flex justify-content-center align-items-center flex-column cards-bg-primary">
        <img src="images/cover-banner.png" alt="Cover Banner" className="profile-cover-banner" />
        <img src="images/profile.png" alt="Profile" className="profile-image" />
        <div className="text-center profile-data mb-3">
          <b>Albert Flores</b>
          <p>Senior Product Designer  |  UI/UX <br />
            Designer  |  Graphic Designer  |  Web...</p>
          <small>Clinton, Maryland</small>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="profile-stats cards-bg-primary mt-3">
        <p>Profile Visitors <span>140</span></p>
        <hr />
        <p>Resume Viewers <span>20</span></p>
        <hr />
        <p>My Jobs <span>88</span></p>
      </div>

      {/* Events Section */}
      <div className="events cards-bg-primary mt-2">
        <Row>
          <Col>
            <b>My Calendar</b>
            <p>Upcoming Interviews</p>
          </Col>
          <Col xs="3">
            <span className="chevron-down">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </span>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Sidebar;
