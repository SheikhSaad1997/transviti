import React from "react";
import { FormControl, Form, Button } from "react-bootstrap";

const SearchJobs = () => {
  return (
    <div className="search-jobs cards-bg-primary">
      <FormControl placeholder="Job Title, Company, or Keywords" />
      <Form.Select className="select-location">
        <option>Select Location</option>
      </Form.Select>
      <Form.Select className="select-job">
        <option>Job Type</option>
      </Form.Select>
      <Button variant="primary" className="primary-button search">
        <img src="images/search-white.png" alt="" /> Search
      </Button>
    </div>
  );
};

export default SearchJobs;
