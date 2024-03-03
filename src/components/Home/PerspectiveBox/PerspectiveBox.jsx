import React from "react";
import Box from "../../../utilsComponents/Box/Box";
import "./PerspectiveBox.sass";

const PerspectiveBox = ({ bubbleBg = " #53b8a0" }) => {
  return (
    <Box className="container_perspective_box">
      <div className="left">
        <div className="title_box">Total Active Users </div>
        <div className="description_state">
          <div className="icon"></div>
          <div className="value">+2.6%</div>
        </div>
        <div className="value_box">18,756</div>
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
