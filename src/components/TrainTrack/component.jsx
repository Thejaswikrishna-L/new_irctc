import React from "react";
import "./styles.scss";

const TrainTrack = () => {
  return (
    <div className="track-container">
      <h2>Track Your Train</h2>
      <input type="text" placeholder="Enter Train Number" />
      <button>Track</button>
    </div>
  );
};

export default TrainTrack;
