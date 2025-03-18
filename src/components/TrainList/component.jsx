import React from "react";
import "./styles.scss";

const TrainList = () => {
  const trains = [
    { name: "Rajdhani Express", time: "10:00 AM" },
    { name: "Shatabdi Express", time: "11:30 AM" },
    { name: "Duronto Express", time: "1:00 PM" },
  ];

  return (
    <div className="train-list">
      <h2>Available Trains</h2>
      <ul>
        {trains.map((train, index) => (
          <li key={index}>
            {train.name} - {train.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
