import React, { useState, useEffect, useRef } from "react";
import gauge from "../assets/sm.png";

function Speedometer() {
  var canvasRef = useRef(null);
  var contextRef = useRef(null);
  var cw = useRef(null);
  var ch = useRef(null);
  let [al, setal] = useState(0);
  var start = -4.05;
  var diff = useRef(null);
  var bar = useRef(null);

  useEffect(() => {
    function progressBar() {
      diff.current = (al / 220) * Math.PI * 1.57;

      contextRef.current.fillStyle = "#f3f3f3";

      contextRef.current.clearRect(0, 0, 600, 500);
      contextRef.current.beginPath();

      contextRef.current.fill();

      contextRef.current.strokeStyle = "#b3cf3c";
      contextRef.current.shadowBlur = 20;
      contextRef.current.shadowColor = "yellow";
      contextRef.current.textAlign = "center";
      contextRef.current.lineWidth = 10;
      contextRef.current.lineCap = "round";
      contextRef.current.fillStyle = "#000000";
      contextRef.current.font = "bold 60px Roboto";
      contextRef.current.beginPath();
      contextRef.current.arc(
        cw.current,
        ch.current + 10,
        210,
        start,
        diff.current + start,
        false
      );
      contextRef.current.stroke();
      context.fillStyle = "#ffffff";
      contextRef.current.shadowBlur = 0;
      contextRef.current.shadowColor = "yellow";
      contextRef.current.fillText(al, cw.current - 10, ch.current + 6);
      context.font = "10pt Verdana";
      context.fillStyle = "#AC793B";
      context.fillText("kmh", cw.current + 72, ch.current);

      if (al >= 220) {
        clearTimeout(bar.current);
      }
      al++;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    contextRef.current = context;
    ch.current = contextRef.current.canvas.height / 2;
    cw.current = contextRef.current.canvas.width / 2;
    console.log(contextRef.current.__proto__);

    bar.current = setInterval(progressBar, 1000);
  }, [al]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "black",
        position: "relative",
      }}
    >
      <img
        style={{
          position: "absolute",
          height: "400px",
          left: "50%",
          transform: "translateX(-50%)",
          top: "60px",
          zIndex: "0",
        }}
        src={gauge}
      />
      <div
        style={{
          position: "absolute",
          height: "200px",
          width: "200px",
          left: "50%",
          transform: "translateX(-50%)",
          top: "150px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.6)",
          background: "transparent",
          borderBottom: "black",
          borderRight: "black",
          borderLeft: "black",
          zIndex: 100,
        }}
      ></div>
      <canvas
        ref={canvasRef}
        id="myCanvas"
        width="500"
        height="500"
        style={{
          position: "absolute",
          color: "white",

          left: "50%",
          transform: "translateX(-50%)",
          top: "0",
        }}
      ></canvas>
    </div>
  );
}

export default Speedometer;
