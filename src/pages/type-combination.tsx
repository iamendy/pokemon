import Layout from "../components/Layout";
import { Insight } from "../icons";

const TypeCombination = () => {
  return (
    <Layout>
      <section className="flex flex-col ">
        <h3 className="font-medium lg:text-[16px] uppercase mb-5 lg:mb-8">
          Visualization 3: Type Combination Bubble Chart
        </h3>

        <div className="flex flex-col gap-y-5 lg:w-[90%]">
          <p className="text-light leading-[32px] lg:text-[20px]">
            Lastly, To further understand the diversity of Pokémon types, let's
            create a bubble chart to visualize the frequency of different type
            combinations. Each bubble represents a unique type combination, with
            the size of the bubble indicating the count of Pokémon with that
            specific combination. This visualization will illustrate the variety
            and popularity of type combinations.
          </p>
        </div>

        <div className="mt-10">
          <img src="/img/graph.svg" alt="types chart" />
        </div>

        <div className="bg-[#382747] mt-10 rounded-md p-3 flex gap-x-2 lg:items-center lg:gap-x-6">
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
