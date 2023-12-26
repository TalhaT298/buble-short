import React from 'react';
import "./Bar.css"

function Bar({ length, colorKey }) {
  const COLOR_SET = ["grey", "maroon", "CadetBlue"];

  let color = COLOR_SET[colorKey];

  let style = {
    height: length,
    backgroundColor: color,
  }

  return (
    <div className="bar" style={style} ></div>
  )
}

export default Bar;