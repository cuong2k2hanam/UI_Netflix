import "./chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ title, datassets, dataKey }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: title ? title : "Chart.js Line Chart",
        color: "black",
        font: {
          family: "Source Sans Pro",
          size: 20,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (val, index) {
            return index !== -1 ? this.getLabelForValue(val) : "";
          },
          color: "#60b5ef",
          font: {
            family: "Comic Sans MS",
            size: 20,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        display: true,
        font: {
          family: "Comic Sans MS",
          size: 40,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
      y: {
        display: true,
        ticks: {
          callback: function (val, index) {
            return index !== -1 ? this.getLabelForValue(val) : "";
          },
          color: "#60b5ef",
          font: {
            family: "Comic Sans MS",
            size: 13,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        min: 0,
      },
    },

    elements: {
      point: {
        hoverRadius: 10,
        hoverBackgroundColor: "rgb(255, 99, 132)",
      },
    },
    layout: {
      padding: {
        left: 20,
      },
    },
  };

  const dataList = datassets
    ? datassets
    : [
        {
          name: "Jan",
          quantity: 4000,
        },
        {
          name: "Feb",
          quantity: 3000,
        },
        {
          name: "Mar",
          quantity: 5000,
        },
        {
          name: "Apr",
          quantity: 4000,
        },
        {
          name: "May",
          quantity: 3000,
        },
        {
          name: "Jun",
          quantity: 2000,
        },
        {
          name: "Jul",
          quantity: 4000,
        },
        {
          name: "Aug",
          quantity: 3000,
        },
        {
          name: "Sep",
          quantity: 4000,
        },
        {
          name: "Oct",
          quantity: 1000,
        },
        {
          name: "Nov",
          quantity: 4000,
        },
        {
          name: "Dec",
          quantity: 3000,
        },
      ];

  const labels = dataList.map((item, index) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: dataKey ? dataKey : "Label",
        data: dataList.map((item, index) => item.quantity),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
    ],
  };
  return <Line options={options} data={data} />;
}
