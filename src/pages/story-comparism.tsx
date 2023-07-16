import Layout from "../components/Layout";
import { Insight } from "../icons";
import BarChart from "@/components/BarChart";
import stacked from "@/constants/v2";

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
        <h3 className="font-medium lg:text-[16px] uppercase mb-5 lg:mb-8">
          Visualization 2: Stacked Bar Char – Type Comparison
        </h3>

        <div className="flex flex-col gap-y-5 lg:w-[90%] lg:text-[20px]">
          <p className="text-light leading-[32px] ">
            Next, let's create a stacked bar chart to compare the average stats
            of Pokémon types side by side. Each bar will represent a type, and
            the stacked segments within each bar will correspond to different
            attributes (HP, Attack, Defense, Special Attack, Special Defense,
            and Speed).
          </p>
        </div>

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
              The stacked bar chart will allow us to compare the overall
              performance of types across multiple attributes. By observing the
              relative heights of the stacked segments, we can identify which
              types have the highest average stats overall and which ones may
              have more balanced attributes. For example, Dragon-type Pokémon
              tend to have higher Attack and Special Attack, while Steel-type
              Pokemon exhibit high defense and Special Defense. This information
              can guide trainers in selecting types that align with their
              preferred playstyle.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default StoryComparism;
