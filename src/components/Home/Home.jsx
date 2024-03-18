import React from "react";
import Banner from "./Banner/Banner";
import ActuSwiper from "./ActuSwiper/ActuSwiper";
import { motion } from "framer-motion";
import { variantContainerStag } from "../../utilsComponents/Variants";
import PerspectiveBox from "./PerspectiveBox/PerspectiveBox";
import ContentContainer from "../ContentContainer/ContentContainer";
import Graphs from "../Graphs/Graphs";
import "./Home.sass";
import Loader from "../../utilsComponents/Hider/Loader/Loader";

const Home = () => {
  return (
    <>
      <ContentContainer>
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
              <PerspectiveBox bubbleBg="red" title="Total Artwork" value="15" />
              <PerspectiveBox bubbleBg="green" title="Number of share" value="152" />
            </motion.div>
            <Graphs />
          </motion.div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;
