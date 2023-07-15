import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ chartData }: { chartData: any }) => {
  const options = {
    scales: {
      y: {
        stacked: true,
      },
      x: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bar relative mt-10 lg:w-[90%] lg:mx-auto ">
      <Bar data={chartData} options={options} />
    </div>
  );
};
export default BarChart;
