import React from "react";
import { LinearScale, CategoryScale, LineElement, Chart, PointElement, BarElement, ArcElement } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./style/CustomChart.sass";
Chart.register(LinearScale, CategoryScale, LineElement, PointElement, BarElement, ArcElement);

const chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales Data",
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "#f49090a1", "#2e99a099", "#018a00d9", "#e97123a1"],
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      data: [60, 59, 60, 55, 56],
    },
  ],
};

const CustomChart = () => {
  return (
    <div className="chart_container">
      <div className="title">CustomChart</div>
      <Line data={chartData} />
    </div>
  );
};

export default CustomChart;
