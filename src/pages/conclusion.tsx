import Layout from "../components/Layout";
import { Clipboard } from "../icons";
import { motion } from "framer-motion";

const TypeCombination = () => {
  return (
    <Layout>
      <section className="flex flex-col ">
        <div className="flex flex-col gap-y-9 lg:w-[90%] lg:gap-y-16">
          <div className="overflow-hidden conclusion w-fit relative border py-4 px-8 md:px-16 font-bold border-[#7660FF] lg:text-[36px]">
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              Conclusion
            </motion.h3>
          </div>

          <div className="flex flex-col gap-y-9 lg:flex-row ">
            <div className="flex flex-col gap-y-5 lg:text-[20px] lg:w-[70%]">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-light leading-[32px] "
              >
                Through these visualizations, we have gained valuable insights
                into the world of Pokémon. We discovered the distribution of
                different types, compared their attribute stats, and analyzed
                their overall strengths.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-light leading-[32px]"
              >
                These visualizations can assist trainers and enthusiasts in
                making strategic informed decisions when building their teams,
                understanding type matchups, and exploring the diverse
                characteristics of Pokémon when preparing for battles.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-light leading-[32px]"
              >
                Remember, a thorough understanding of attribute distribution and
                type-specific strengths can significantly impact the success of
                Pokémon trainers and increase the chances of victory in Pokémon
                battles.
              </motion.p>
            </div>

            <div className="lg:w-[30%] flex justify-center items-center">
              <div className="prize relative bg-light flex flex-col gap-y-5 items-center justify-center p-5 w-[50%]">
                <Clipboard />
                <p className="text-center text-black font-medium text-sm">
                  AngelHack Data Visualiazation and Storytelling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default TypeCombination;
