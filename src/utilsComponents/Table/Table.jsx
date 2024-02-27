import React from "react";
import { motion } from "framer-motion";
import { variantItem, variantTable } from "../Variants";
import CheckIcon from "../../assets/icons/CheckIcon";
import CrossIcon from "../../assets/icons/CrossIcon";
import "./Table.sass";

const isBooleanString = (str) => {
  const lowerCaseStr = (str + "").toLowerCase();
  return lowerCaseStr === "true" || lowerCaseStr === "false";
};

const BooleanMark = (value) => {
  console.log(value);
  return (
    <>
      {value + "" === "true" ? (
        <>
          <div className="icon_row_table checked">
            <CheckIcon />
          </div>
        </>
      ) : (
        <>
          <div className="icon_row_table unchecked">
            <CrossIcon />
          </div>
        </>
      )}
    </>
  );
};

const Table = ({ headerOn, body = [], index = [], titles = [], classes = [] }) => {
  return (
    <div className="table_container">
      {headerOn && (
        <>
          <div className="header_container">
            <div className="title">{headerOn.title} </div>
          </div>
          <div className="under_container">{headerOn.under_component}</div>
        </>
      )}
      <motion.table variants={variantTable} initial={"hidden"} animate={"visible"}>
        <thead>
          <tr>
            {titles.map((title, i) => (
              <th className="head_th" key={i}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        {body.map((row, i) => {
          const column = index.map((ind, ind__) => {
            let value = row;
            if (Array.isArray(ind)) {
              for (let i = 0; i < ind.length; i++) {
                value = value[ind[i]];
              }
            } else value = value[ind];

            return (
              <td key={ind__} className={classes[ind__]}>
                {isBooleanString(value) ? BooleanMark(value) : value}
              </td>
            );
          });

          return (
            <tbody key={i}>
              <motion.tr
                className={`tab_row ${(2 + i) % 2 === 0 ? "one" : "two"}`}
                variants={variantItem}
                transition={"transition"}
              >
                {column}
              </motion.tr>
            </tbody>
          );
        })}
      </motion.table>
    </div>
  );
};

export const dataDefault = {
  headerOn: { title: "Active users ", under_component: "" },
  titles: ["Name", "Email", "Total downloads", "Available", "Test unit", "", ""],
  index: [0, 1, 2, 3, 4, 5],
  body: [
    ["Lorem ing elit.", "Lorem ing elit.", "true", "Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit."],
    ["Lorem ing elit.", "Lorem ing elit.", "false", "Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit."],
    ["Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit."],
    ["Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit.", "Lorem ing elit."],
  ],
};

export default Table;
