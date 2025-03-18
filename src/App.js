import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/component.jsx";
import Footer from "./components/Footer/component.jsx";
import Home from "./pages/Home/component.jsx";
import Login from "./pages/Login/component.jsx";
import Booking from "./pages/Booking/component.jsx";
import TrainListPage from "./pages/TrainList/component.jsx";
import TrainTrackPage from "./pages/TrainTrack/component.jsx";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/train-list" element={<TrainListPage />} />
            <Route path="/track-train" element={<TrainTrackPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

