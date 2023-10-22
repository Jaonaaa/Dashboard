import React, { useEffect, useState } from "react";
import "./Navbar.sass";
import HeadNav from "./HeadNav/HeadNav";
import MenuNav from "./MenuNav/MenuNav";
import useNav from "./hook/useNav";
import linksNavData from "./NavLink";

const Navbar = () => {
  const { setActiveLink, putActiveLink } = useNav("row_link_nav");
  const initialNavSize = localStorage.getItem("navbar_mini");
  const [miniNav, setMiniNav] = useState(
    initialNavSize === "true" ? true : false
  );
  const switchNav = () => {
    setMiniNav(!miniNav);
    setTimeout(() => {
      putActiveLink();
    }, 10);
  };
  useEffect(() => {
    localStorage.setItem("navbar_mini", JSON.stringify(miniNav));
  }, [miniNav]);
  return (
    <div className={`navbar_container ${miniNav ? "mini" : ""}`}>
      <HeadNav miniNav={miniNav} switchNav={switchNav} />
      {linksNavData.map((menuData, key) => (
        <MenuNav
          key={key}
          miniNav={miniNav}
          {...menuData}
          setActiveLink={setActiveLink}
        />
      ))}
    </div>
  );
};

export default Navbar;
