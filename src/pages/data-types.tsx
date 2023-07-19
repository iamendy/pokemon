import Layout from "@/components/Layout";
import { Insight } from "@/icons";
import BarChart from "@/components/BarChart";
import types from "@/constants/types";
import { motion } from "framer-motion";

const DataTypes = () => {
  const chartData = {
    labels: types.map((d) => d.type),
    datasets: [
      {
        label: "Number of Pokémon",
        data: types.map((d) => d.count),
        backgroundColor: "#8255f2",
        borderColor: "transparent",
        width: 5,
        borderWidth: 1,
        borderRadius: 15,
      },
    ],
  };
  return (
    <Layout>
      <section className="flex flex-col ">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="font-medium lg:text-[16px] uppercase mb-5 lg:mb-8"
        >
          Visualization 1: Type distribution Bar chart
        </motion.h3>

        <div className="flex flex-col gap-y-5 lg:w-[90%] lg:text-[20px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-light leading-[32px] "
          >
            To begin our analysis, here's a bar chart that visualize the
            distribution of Pokémon types. The X-axis represents the different
            types, while the Y-axis will indicate the count or proportion of
            Pokémon belonging to each type.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-light leading-[32px] lg:hidden"
          >
            This visualization provides an overview of the prevalence of
            different types within the Pokémon dataset.
          </motion.p>
        </div>
        <div className="">
          <BarChart chartData={chartData} />
        </div>
        <div className="bg-[#382747] mt-10 rounded-md p-3 flex gap-x-2 lg:items-center lg:gap-x-6">
          <div>
            <Insight />
          </div>
          <div className="flex flex-col gap-y-3 text-[#AB6D51] text-[14px] lg:gap-y-0">
            <h3 className="font-bold">Insight</h3>
            <p className="">
              The bar chart reveals the most common and rare types among
              Pokémon. Here, we see that certain types, such as Normal or Water,
              are more prevalent, while others, like Flying or Fairly are less
              common. This insight can inform trainers about the diversity of
              types they may encounter in battles.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default DataTypes;
