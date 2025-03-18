import React from "react";
import TrainTrack from "../../components/TrainTrack/component.jsx";
import "./styles.scss";

const TrainTrackPage = () => {
  return (
    <div className="track-train-page">
      <h2>Track Your Train</h2>
      <TrainTrack />
    </div>
  );
};

export default TrainTrackPage;
