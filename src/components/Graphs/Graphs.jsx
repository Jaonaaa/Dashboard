import React from "react";
import CustomChart from "../../utilsComponents/Chart/CustomChart";
import HorizContainer from "../../utilsComponents/Container/HorizContainer/HorizContainer";
import "./Graphs.sass";

const example1 = {
  labels: ["January 2024", "February 2024", "March 2024", "April 2024"],
  datasets: [
    {
      label: "Users",
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderWidth: 1,
      data: [0, 2, 10, 0, 0],
    },
  ],
};

const example2 = {
  labels: ["17-03", "18-03", "19-03", "20-03"],
  datasets: [
    {
      label: "Artworks",
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderWidth: 1,
      data: [0, 5, 10, 14],
    },
  ],
};

const Graphs = () => {
  return (
    <>
      <div className=" graphs_container">
        <HorizContainer>
          <div className="container_block">
            <CustomChart title="Number of Users" labels={example1.labels} datasets={example1.datasets} type="bar" positionTitle="default" />
          </div>
          <div className="container_block">
            <CustomChart title="Number of artworks" labels={example2.labels} datasets={example2.datasets} type="bar" positionTitle="default" />
          </div>
        </HorizContainer>
      </div>
    </>
  );
};

export default Graphs;
