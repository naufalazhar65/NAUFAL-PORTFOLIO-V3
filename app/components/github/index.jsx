"use client"; // This is a client component 👈🏽

import { useState } from "react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ margin: '0px auto', paddingBottom: "10px", textAlign: "center" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", fontSize: '23px' }}>
        Days I <strong className="purple" style={{ color: '#16f2b3' }}>Code</strong>
      </h1>
      <div style={{ display: "inline-block" }}>
        <GitHubCalendar
          username="naufalazhar65"
          blockSize={15}
          blockMargin={5}
          color="#C13584"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
