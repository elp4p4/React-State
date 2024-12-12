import React from "react";

const TimerComponent = ({ timeElapsed }) => (
  <strong>
    <p>Time since mounted: {timeElapsed} seconds</p>
  </strong>
);

export default TimerComponent;
