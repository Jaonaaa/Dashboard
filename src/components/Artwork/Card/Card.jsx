import React, { useState } from "react";
import Templ from "../../../assets/img/brume.jpg";
import { motion } from "framer-motion";
import { URL } from "../../../utils/Alaivo";
import "./style.sass";

const Card = ({
  title = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  category = "Ancienne",
  date = "2019/02/07",
  icon = <></>,
  picture = undefined,
  params = "",
  loading = false,
  onClick = () => {},
}) => {
  return (
    <motion.div className="card_container_artwork" exit={{ width: 0, opacity: 0 }}>
      {loading ? (
        <div className="loader_card skeleton"></div>
      ) : (
        <>
          <div className="picture">
            <img src={picture ? URL + picture : Templ} alt="card_artwork" />
          </div>
          <div className="hider_picture"></div>
          <div className="top">
            <div className="title_">{title}</div>
          </div>
          <div className="bottom">
            <div className="about">
              <p className="category"> {category} </p>
              <div className="date"> {date} </div>
            </div>
            <div
              className="go_to"
              onClick={() => {
                onClick(params);
              }}
            >
              {icon}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Card;
