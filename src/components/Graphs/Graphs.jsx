import React from "react";
import CustomChart from "../../utilsComponents/Chart/CustomChart";
import HorizContainer from "../../utilsComponents/Container/HorizContainer/HorizContainer";
import "./Graphs.sass";

const example = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales Data",
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderWidth: 1,
      data: [60, 26, 60, 55, 20],
    },
  ],
};

const Graphs = () => {
  return (
    <>
      <div className="inner graphs_container">
        <HorizContainer title={"Charte Graphique"}>
          <div className="container_block">
            <CustomChart
              title="First Chart"
              labels={example.labels}
              datasets={example.datasets}
              type="bar"
              positionTitle="top"
            />
          </div>
          <div className="container_block">
            <CustomChart
              title="Second Chart"
              labels={example.labels}
              datasets={example.datasets}
              type="bar"
              positionTitle="bottom"
            />
          </div>
        </HorizContainer>
      </div>
    </>
  );
};

export default Graphs;
