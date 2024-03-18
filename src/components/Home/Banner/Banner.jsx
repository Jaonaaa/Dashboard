import React from "react";
import People from "../../../assets/img/people.png";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./Banner.sass";

const Banner = (_props) => {
  const nav = useNavigate();

  return (
    <div className="banner_container">
      <div className="left">
        <div className="title">
          Welcome back 🤞
          <br />
          Peter Parker
        </div>
        <div className="subtitle">
          If you are going to see a passage of Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
        <div className="button_">
          <button
            onClick={() => {
              nav("/overview");
            }}
          >
            Look recent artwork <GoArrowUpRight className="up_right_arrow" />{" "}
          </button>
        </div>
      </div>
      <div className="right">
        <div className="picture">
          <img src={People} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
