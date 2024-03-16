import React from "react";
import Banner from "./Banner/Banner";
import ActuSwiper from "./ActuSwiper/ActuSwiper";
import { motion } from "framer-motion";
import { variantContainerStag } from "../../utilsComponents/Variants";
import "./Home.sass";
import PerspectiveBox from "./PerspectiveBox/PerspectiveBox";

const Home = () => {
  return (
    <>
      <div className="inner">
        <motion.div variants={variantContainerStag} initial="hidden" animate="visible" className="container_home_main">
          <motion.div className="row" variants={variantContainerStag}>
            <Banner />
            <ActuSwiper />
          </motion.div>

          <motion.div
            className="row grid_row"
            variants={variantContainerStag}
            style={{ minHeight: "fit-content", justifyContent: "center" }}
          >
            <PerspectiveBox />
            <PerspectiveBox bubbleBg="red" />
            <PerspectiveBox bubbleBg="green" />
            <PerspectiveBox bubbleBg="yellow" />
            <PerspectiveBox bubbleBg="green" />
            <PerspectiveBox bubbleBg="yellow" />
            <PerspectiveBox bubbleBg="green" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
