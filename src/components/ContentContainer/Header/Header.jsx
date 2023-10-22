import React from "react";
import Indexation from "./Indexation/Indexation";
import "./Header.sass";

const Header = () => {
  return (
    <div className="container_header">
      <Indexation />
      <div className="search_bar"></div>
      <div className="params"></div>
    </div>
  );
};

export default Header;
