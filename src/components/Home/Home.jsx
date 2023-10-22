import React, { useState } from "react";
import Modal from "../../utilsComponents/Modal/Modal";
import Notifs from "../../utilsComponents/Notif/Notifs";
import { getUid } from "../../utils/Uid";
import Select from "../../utilsComponents/Select/Select";
import Input from "../../utilsComponents/Input/Input";
import Spinner from "../../utilsComponents/Spinner/Spinner";

import "./Home.sass";
import SwitcherTheme from "./Switcher/SwitcherTheme";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [options] = useState([
    { label: "Example 1", value: "example_1" },
    { label: "Example 2", value: "example_2" },
    { label: "Example 3", value: "example_3" },
  ]);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  const addNotifs = () => {
    const status = ["OK", "warning", "info", "error", "succes", "star"];
    const words = [
      "I'm ok",
      "Worryy (╬▔皿▔)╯",
      "Hey I got some news !",
      "Danger danger (ㆆ_ㆆ)",
      "GG dude , nice one (～￣▽￣)～",
      " Star boyy (￣y▽￣)╭ Ohohoho.....",
    ];
    let index = Math.floor(Math.random() * status.length);
    setNotifs([
      ...notifs,
      <Notifs
        key={getUid()}
        notif={{ status: status[index], details: words[index] }}
      />,
    ]);
  };

  return (
    <div className="container_components">
      <div className="component_box">
        <button onClick={handleModal}> Open Modal </button>
        {openModal && (
          <Modal closer={handleModal}> I'm a modal (～￣▽￣)～ </Modal>
        )}
        <div className="title_compo">Modal</div>
      </div>
      <div className="component_box">
        <button onClick={addNotifs}> Add notifs</button>
        {notifs.map((notif) => notif)}
        <div className="title_compo">Notifications</div>
      </div>

      <div className="component_box">
        <Input onChange={() => {}} title={"Name"} />

        <div className="title_compo">Input </div>
      </div>

      <div className="component_box">
        <Spinner On={true} size="5rem" />
        <div className="title_compo">Spinner</div>
      </div>

      <div className="component_box">
        <Select
          onChange={(e) => {
            //   console.log(e);
          }}
          name={"select_input"}
          optionsType={options}
        />
        <div className="title_compo">Dropdown</div>
      </div>

      <div className="component_box">
        <div className="title_compo">Themes</div>
        <SwitcherTheme />
      </div>
    </div>
  );
};

export default Home;
