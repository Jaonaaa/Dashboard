import React from "react";
import Box from "../../../utilsComponents/Box/Box";
import "./PerspectiveBox.sass";

const PerspectiveBox = ({
  bubbleBg = " #53b8a0",
  title = "Total Active Users",
  descriptionIcon = "",
  descriptionValue = "+2.6%",
  value = "18,756",
}) => {
  return (
    <Box className="container_perspective_box">
      <div className="left">
        <div className="title_box"> {title} </div>
        <div className="description_state">
          <div className="icon">{descriptionIcon}</div>
          <div className="value">{descriptionValue}</div>
        </div>
        <div className="value_box">{value}</div>
      </div>
      <div className="right" style={{ "--bubble-bg": bubbleBg }}>
        <div className="deco_bubble"></div>
        <div className="_pic_container"></div>
        <div className="border_glow"></div>
      </div>
    </Box>
  );
};

export default PerspectiveBox;
