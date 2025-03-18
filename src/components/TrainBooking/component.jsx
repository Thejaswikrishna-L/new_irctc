import React from "react";
import "./styles.scss";

const TrainBooking = () => {
  return (
    <div className="booking-container">
      <h2>Book Your Train Ticket</h2>
      <form>
        <input type="text" placeholder="From" required />
        <input type="text" placeholder="To" required />
        <input type="date" required />
        <button type="submit">Search Trains</button>
      </form>
    </div>
  );
};

export default TrainBooking;
