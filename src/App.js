import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
// import HomePage from "./pages/homepage/homepage.component";

import ShopPage from "./Shop/shop.component.jsx";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};
const TopicsList = () => {
  return (
    <div>
      <h1>Topic List Page</h1>
    </div>
  );
};
const TopicsDetail = (props) => {
  return (
    <div>
      <h1>Topic Detail Page {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/hats" element={<HatsPage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/topics" element={<TopicsList />} />
        <Route path="/topics/:topicId" component={TopicsDetail} />
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
