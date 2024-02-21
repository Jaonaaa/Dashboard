import React, { useState } from "react";
import { useMyNotifs } from "../../utilsComponents/Notif/useNotifs";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Modal from "../../utilsComponents/Modal/Modal";
import Select from "../../utilsComponents/Select/Select";
import Input from "../../utilsComponents/Input/Input";
import Spinner from "../../utilsComponents/Spinner/Spinner";
import SwitcherTheme from "./Switcher/SwitcherTheme";
import ValidationModal from "../../utilsComponents/Modal/Validation/ValidationModal";
import { variantItem, variantTable } from "../../utilsComponents/Variants";
import "./Home.sass";
import BoxTitle from "../../utilsComponents/Box/BoxTitle/BoxTitle";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalValidation, setOpenModalValidation] = useState(false);
  const { showRandomNotif, notifs } = useMyNotifs();

  const [options] = useState([
    { label: "Example 1 ", value: "example_1" },
    { label: "Example 2 ", value: "example_2" },
    { label: "Example 3", value: "example_3" },
  ]);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleModalValidation = () => {
    setOpenModalValidation(!openModalValidation);
  };

  return (
    <motion.div className="container_components" variants={variantTable} initial={"hidden"} animate={"visible"}>
      {/* MODAL */}
      <motion.div className="component_box" variants={variantItem} transition={"transition"}>
        <button onClick={handleModal}> Open Modal </button>
        <AnimatePresence>
          {openModal && (
            <Modal closer={handleModal}>
              <BoxTitle title={"Modal Test  (～￣▽￣)～"}>
                <Input
                  title={"Send some text"}
                  fullWidth
                  defaultValue="Hello, world!"
                  type="textarea"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </BoxTitle>
            </Modal>
          )}
        </AnimatePresence>
        <div className="title_compo">Modal</div>
      </motion.div>
      {/* NOTIFICATIONS */}
      <motion.div className="component_box" variants={variantItem} transition={"transition"}>
        <button onClick={showRandomNotif}> Add notifs</button>
        {notifs.map((notif) => notif)}
        <div className="title_compo">Notifications</div>
      </motion.div>
      {/* INPUT */}
      <motion.div className="component_box" variants={variantItem} transition={"transition"}>
        <Input onChange={() => {}} title={"Name"} name="title" />
        <div className="title_compo">Input </div>
      </motion.div>
      {/* SPINNER */}
      <motion.div className="component_box" variants={variantItem} transition={"transition"}>
        <Spinner On={true} size="5rem" />
        <div className="title_compo">Spinner</div>
      </motion.div>
      {/* DROPDOWN */}
      <motion.div className="component_box" variants={variantItem} transition={"transition"}>
        <Select
          onChange={(e) => {
            console.log(e);
          }}
          name={"select_input"}
          optionsType={options}
        />
        <div className="title_compo">Dropdown</div>
      </motion.div>
      {/* METHOD AND THEMES SWITCHER */}
      <motion.div className="component_box" variants={variantItem} transition={"transition"}>
        <div className="title_compo">Themes</div>
        <SwitcherTheme />
      </motion.div>
      {/* VALIDATION MODAL */}
      <motion.div className="component_box" variants={variantItem} transition={"transition"}>
        <div className="title_compo">Validation Box</div>
        <button onClick={handleModalValidation}> Confirm </button>
        <AnimatePresence>
          {openModalValidation && (
            <ValidationModal
              icon={""}
              callBack={handleModalValidation}
              title="Example Modal validation"
              content="
              Lorem ipsum dolor sit amet consectetur, adipisicing elit e. 
              Ipsum rerum voluptates nihil ullam non
              doloribus quia laudantium voluptatibus."
              validationText={"Valider"}
              cancelOn={false}
              closer={handleModalValidation}
            />
          )}
        </AnimatePresence>
      </motion.div>
      {/* //// */}
    </motion.div>
  );
};

export default Home;
