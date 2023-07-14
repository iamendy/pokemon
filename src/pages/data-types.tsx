import Layout from "../components/Layout";
import { Insight } from "../icons";

const DataTypes = () => {
  return (
    <Layout>
      <section className="flex flex-col ">
        <h3 className="font-medium lg:text-[16px] uppercase mb-5 lg:mb-8">
          Visualization 1: Type distribution Bar chart
        </h3>

        <div className="flex flex-col gap-y-5 lg:w-[90%]">
          <p className="text-light leading-[32px] ">
            To begin our analysis, let's create a bar chart to visualize the
            distribution of Pokémon types. The X-axis will represent the
            different types, while the Y-axis will indicate the count or
            proportion of Pokémon belonging to each type.
          </p>

          <p className="text-light leading-[32px] lg:hidden">
            This visualization will provide an overview of the prevalence of
            different types within the Pokémon dataset.
          </p>
        </div>

        <div className="mt-10">
          <img src="/img/types-chart.svg" alt="types chart" />
        </div>

        <div className="bg-[#382747] mt-10 rounded-md p-3 flex gap-x-2 lg:items-center lg:gap-x-6">
          <div>
            <Insight />
          </div>
          <div className="flex flex-col gap-y-3 text-[#AB6D51] text-[14px] lg:gap-y-0">
            <h3 className="font-bold">Insight</h3>
            <p className="">
              The bar chart will reveal the most common and rare types among
              Pokémon. We might find that certain types, such as Normal or
              Water, are more prevalent, while others, like Flying or Fairly are
              less common. This insight can inform trainers about the diversity
              of types they may encounter in battles
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default DataTypes;
