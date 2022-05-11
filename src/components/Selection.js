import React from "react";
import "../styles/Child.css";

export default function Selection({ applyColor }) {
  const [style, setStyle] = React.useState({ background: "" });
  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => {
        applyColor((color) => {
          setStyle(color);
        });
      }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
