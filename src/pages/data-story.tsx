import Layout from "../components/Layout";

const DataStory = () => {
  return (
    <Layout>
      <section>
        <h3 className="font-medium lg:text-[16px] uppercase mb-5 lg:mb-8">
          data story & Visualization
        </h3>

        <div className="flex flex-col gap-y-5">
          <p className="story leading-[32px] lg:text-[28px] lg:leading-[50px]">
            In the world of Pokémon, different types have unique characteristics
            and strengths. In this data visualization story using this Pokémon
            dataset, we will delve into the characteristics of Pokémon based on
            their types, focusing on key attributes such as HP, Attack, Defense,
            Special Attack, Special Defense, and Speed.
          </p>

          <p className="story leading-[32px] lg:text-[28px] lg:leading-[50px]">
            By visualizing these stats across different types, we aim to uncover
            insights into their strengths and vulnerabilities. By visualizing
            the type distribution and analyzing type matchups, we can gain a
            deeper understanding of Pokémon battles and how they vary based on
            their type classification.
          </p>
        </div>
      </section>
    </Layout>
  );
};
export default DataStory;
