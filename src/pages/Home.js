import React from "react";
import south from "../assets/south.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${south})` }}>
      <div className="headerContainer"></div>
    </div>
  );
}

export default Home;
