import React from "react";
import TrainList from "../../components/TrainList/component";
import "./styles.scss";

const TrainListPage = () => {
  return (
    <div className="train-list-page">
      <h2>Available Trains</h2>
      <TrainList />
    </div>
  );
};

export default TrainListPage;
