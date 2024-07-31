import React from "react";

export default function ClockPointer({angle, width, heigth, color}) {
    return (
        <div style={{
          width: `${width}px`,
          marginRight: `${200 - width}px`,
          backgroundColor: color,
          height: `${heigth}px`,
          transform: `rotate(${angle-90}deg)`,
          position: "absolute",
          transformOrigin: "center left"
        }}>
        </div>
    )
}