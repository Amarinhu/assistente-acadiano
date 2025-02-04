import React, { useEffect } from "react";
import render3D from "../../assets/script/render3D.js";

const CriadorPersonagem = () => {
  useEffect(() => {
    const container = document.getElementById("container3D");
    if (container) {
      render3D(container);
    }
  }, []);

  return (
    <div style={{ border: "red 3px solid", height: "90vh" }}>
      <div
        id="container3D"
        style={{ border: "green 3px solid", height: "35vh" }}
      ></div>
      <div style={{ border: "blue 3px solid", height: "55vh" }}></div>
    </div>
  );
};

export default CriadorPersonagem;
