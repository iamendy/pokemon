import Layout from "../components/Layout";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <Layout>
      <section>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="font-medium lg:text-[16px] uppercase mb-5 lg:mb-8"
        >
          Introduction
        </motion.h3>

        <motion.div
          className="flex flex-col gap-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="story leading-[32px] lg:text-[28px] lg:leading-[50px]">
            In the world of Pokémon, different types have unique characteristics
            and strengths. In this data visualization story, we dive into the
            characteristics of Pokémon based on their types, focusing on key
            attributes such as HP, Attack, Defense, Special Attack, Special
            Defense, and Speed.
          </p>

          <p className="story leading-[32px] lg:text-[28px] lg:leading-[50px]">
            By visualizing these stats across different types, we aim to uncover
            insights into their strengths and vulnerabilities. This helps us
            gain better understanding of Pokémon battles and how their types
            affects battle outcomes.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};
export default Introduction;
