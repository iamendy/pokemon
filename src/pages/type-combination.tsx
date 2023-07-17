import Layout from "../components/Layout";
import { Insight } from "../icons";
import {
  Chart as ChartJs,
  Legend,
  Tooltip,
  RadarController,
  RadialLinearScale,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import stacked from "@/constants/v2";
import { useEffect, useState } from "react";

ChartJs.register(
  Legend,
  Tooltip,
  RadialLinearScale,
  RadarController,
  LineController,
  LineElement,
  PointElement
);

const options = {
  elements: {
    line: {
      borderWidth: 2,
      fill: true,
    },
  },
  scales: {
    r: {
      pointLabels: {
        color: "white",
      },
      ticks: {
        color: "#000000",
        backgroundColor: "yellow",
        opacity: 0,
        fontSize: "16px",
      },
    },
  },
};

const TypeCombination = () => {
  const [typeA, setTypeA] = useState("Flying");
  const [typeB, setTypeB] = useState("Rock");

  //filtered list by types
  const filterTypes = stacked.filter((value, index, self) => {
    return self.findIndex((v) => v.type === value.type) === index;
  });

  const filterLabels = stacked.filter((value, index, self) => {
    return self.findIndex((v) => v.measureName === value.measureName) === index;
  });

  //get data for type A
  const getDataA = () => {
    return stacked.filter((d) => d.type == typeA).map((d) => d.measureValue);
  };

  //get data for type B
  const getDataB = () => {
    return stacked.filter((d) => d.type == typeB).map((d) => d.measureValue);
  };

  //monitors type A changes
  useEffect(() => {
    getDataA();
    getDataB();
  }, [typeA, typeB]);

  const chartData = {
    //generate the features from data
    labels: filterLabels?.map((d) => d.measureName),

    datasets: [
      {
        label: `${typeA} Type`,
        data: getDataA(),
        fill: true,
        color: "red",
        backgroundColor: "rgba(222, 95, 85, 0.2)",
        borderColor: "rgb(222, 95, 85)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: `${typeB} Type`,
        data: getDataB(),
        fill: false,
        textColor: "#ffffff",
        color: "blue",
        backgroundColor: "rgba(118,96,255, 0.2)",
        borderColor: "rgba(118,96,255)",
        pointBackgroundColor: "blue",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return (
    <Layout>
      <section className="flex flex-col ">
        <h3 className="font-medium lg:text-[16px] uppercase mb-5 lg:mb-8">
          Visualization 3: Radar Chart - Interactive comparation
        </h3>

        <div className="flex flex-col gap-y-5 lg:w-[90%]">
          <p className="text-light leading-[32px] lg:text-[20px]">
            Lastly, To further understand the strengths and weaknesses of
            Pokémon types, Here is an interactive visualization tool, that helps
            users compare two types of pokemon. Each radar represents a type,
            with the pointers showing the average features being compared. This
            chat gives better insights on how two types stack up against each
            other in the battle field.
          </p>
        </div>

        <div className="flex flex-col gap-y-9 mt-10 lg:flex-row">
          <div className="text-black flex bg-transparent justify-between bg-dark lg:w-[50%] lg:order-1 lg:justify-end gap-x-2">
            <div className="p-3">
              <select
                className="p-3 outline-none rounded-lg bg-light"
                onChange={(e) => setTypeA(e.target.value)}
              >
                <option value="">Select Type A</option>
                {filterTypes?.map((d) => (
                  <option key={d.type} value={d.type}>
                    {d.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-3">
              <select
                className="p-3 outline-none rounded-lg bg-light"
                onChange={(e) => setTypeB(e.target.value)}
              >
                <option value="">Select Type B</option>
                {filterTypes?.map((d) => (
                  <option key={d.type} value={d.type}>
                    {d.type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="lg:w-[50%]">
            <div className="">
              <Radar data={chartData} options={options}></Radar>
            </div>
          </div>
        </div>

        <div className="bg-[#382747] hidden mt-10 rounded-md p-3 gap-x-2 lg:items-center lg:gap-x-6">
          <div>
            <Insight />
          </div>

          <div className="flex flex-col gap-y-3 text-[#AB6D51] text-[14px] lg:gap-y-0">
            <h3 className="font-bold">Insight</h3>
            <p className="">
              The bubble chart will reveal the most common and rare type
              combinations in the Pokémon dataset. We might find that certain
              combinations, such as Normal-Flying, Grass-Poison & Bug-Flying,
              are more prevalent, while others, like Electric-Dragon,
              Ghost-Fighting, etc are less common. It also shows there are only
              50 extremely rare combination types with only one occurrence. This
              insight can help trainers in identifying unique or niche type
              combinations for their teams.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default TypeCombination;
