import Layout from "../components/Layout";
import { Insight } from "../icons";
import BarChart from "@/components/BarChart";
import stacked from "@/constants/v2";
import { motion } from "framer-motion";

const StoryComparism = () => {
  //filtered list by types
  const filterTypes = stacked.filter((value, index, self) => {
    return self.findIndex((v) => v.type === value.type) === index;
  });

  /* Individual properties */

  const averageSpeed = stacked.filter((d) => d.measureName == "Avg. Speed");

  const averageSpeedDefence = stacked.filter(
    (d) => d.measureName == "Avg. Sp. Def"
  );

  const averageSpeedAttack = stacked.filter(
    (d) => d.measureName == "Avg. Sp. Atk"
  );

  const averageHP = stacked.filter((d) => d.measureName == "Avg. HP");

  const averageDefence = stacked.filter((d) => d.measureName == "Avg. Defense");

  const averageAttack = stacked.filter((d) => d.measureName == "Avg. Attack");

  //data composition
  const chartData = {
    labels: filterTypes.map((d) => d.type),
    datasets: [
      {
        label: averageSpeed[0].measureName,
        data: averageSpeed.map((d) => d.measureValue),
        backgroundColor: "#5F23EF",
        borderColor: "transparent",
        width: 5,
        borderWidth: 1,
        borderRadius: 15,
      },
      {
        label: averageSpeedDefence[0].measureName,
        data: averageSpeedDefence.map((d) => d.measureValue),
        backgroundColor: "#8355F1",
        borderColor: "transparent",
        width: 5,
        borderWidth: 1,
        borderRadius: 15,
      },
      {
        label: averageSpeedAttack[0].measureName,
        data: averageSpeedAttack.map((d) => d.measureValue),
        backgroundColor: "#CBBBEF",
        borderColor: "transparent",
        width: 5,
        borderWidth: 1,
        borderRadius: 15,
      },
      {
        label: averageHP[0].measureName,
        data: averageHP.map((d) => d.measureValue),
        backgroundColor: "#CAF0F8",
        borderColor: "transparent",
        width: 5,
        borderWidth: 1,
        borderRadius: 15,
      },
      {
        label: averageDefence[0].measureName,
        data: averageDefence.map((d) => d.measureValue),
        backgroundColor: "#48CAE4",
        borderColor: "transparent",
        width: 5,
        borderWidth: 1,
        borderRadius: 15,
      },
      {
        label: averageAttack[0].measureName,
        data: averageAttack.map((d) => d.measureValue),
        backgroundColor: "#0096C7",
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
          Visualization 2: Stacked Bar Char – Stats Overview
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-y-5 lg:w-[90%] lg:text-[20px]"
        >
          <p className="text-light leading-[32px] ">
            Next, we create a stacked bar chart that compares the average stats
            of Pokémon types side by side. Each bar represents a type, and the
            stacked segments within type corresponds to the type's attributes
            (HP, Attack, Defense, Special Attack, Special Defense, and Speed).
          </p>
        </motion.div>

        <div>
          <BarChart chartData={chartData} />
        </div>

        <div className="bg-[#382747] mt-10 rounded-md p-3 flex gap-x-2 lg:items-center lg:gap-x-6">
          <div>
            <Insight />
          </div>
          <div className="flex flex-col gap-y-3 text-[#AB6D51] text-[14px] lg:gap-y-0">
            <h3 className="font-bold">Insight</h3>
            <p className="">
              The stacked bar chart allows us to compare the overall performance
              of types across multiple attributes. By observing the relative
              heights of the stacked segments, we can identify which types have
              the highest average stats overall and which ones may have more
              balanced attributes. For example, Dragon-type Pokémon tend to have
              higher Attack and Special Attack, while Steel-type Pokemon exhibit
              high defense and Special Defense. This information can guide
              trainers in selecting types that align with their preferred
              playstyle.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default StoryComparism;
