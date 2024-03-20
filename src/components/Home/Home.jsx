import React from "react";
import Banner from "./Banner/Banner";
import ActuSwiper from "./ActuSwiper/ActuSwiper";
import { motion } from "framer-motion";
import { variantContainerStag } from "../../utilsComponents/Variants";
import PerspectiveBox from "./PerspectiveBox/PerspectiveBox";
import ContentContainer from "../ContentContainer/ContentContainer";
import "./Home.sass";

const Home = () => {
  return (
    <>
      <ContentContainer>
        <div className="inner">
          <motion.div variants={variantContainerStag} initial="initial" animate="animate" className="container_home_main">
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
              <PerspectiveBox bubbleBg="#9acbe4" />
              <PerspectiveBox bubbleBg="#9acbe4" />
              <PerspectiveBox bubbleBg="#9acbe4" />
            </motion.div>
          </motion.div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;
