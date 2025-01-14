import React from "react";
import "animate.css";

function Loader() {
  return (
    <div className="loader-container">
      <div>
        <img
          className="loader animate__animated animate__rotateIn animate__infinite animate__fast"
          src="/icons8-loader-52.png"
          alt="Loading..."
        />
      </div>
    </div>
  );
}

export default Loader;
