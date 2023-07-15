import Layout from "../components/Layout";
import { Insight } from "../icons";

const TypeCombination = () => {
  return (
    <Layout>
      <section className="flex flex-col ">
        <div className="flex flex-col gap-y-9 lg:w-[90%] lg:gap-y-16">
          <div className="conclusion w-fit relative border py-4 px-8 md:px-16 font-bold border-[#7660FF] lg:text-[36px]">
            <h3>Conclusion</h3>
          </div>

          <div className="flex flex-col gap-y-5 lg:text-[20px]">
            <p className="text-light leading-[32px] ">
              Through these visualizations, we have gained valuable insights
              into the world of Pokémon. We discovered the distribution of
              different types, compared their attribute stats, and analyzed
              their overall strengths.
            </p>
            <p className="text-light leading-[32px]">
              These visualizations can assist trainers and enthusiasts in making
              strategic informed decisions when building their teams,
              understanding type matchups, and exploring the diverse
              characteristics of Pokémon when preparing for battles.
            </p>
            <p className="text-light leading-[32px]">
              Remember, a thorough understanding of attribute distribution and
              type-specific strengths can significantly impact the success of
              Pokémon trainers and increase the chances of victory in Pokémon
              battles.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default TypeCombination;
