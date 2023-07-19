import Layout from "../components/Layout";
import pokemon from "../../public/img/pokemon.png";
import Image from "next/image";
import { Note } from "../icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="flex flex-col gap-y-9 lg:flex-row lg:gap-x-9 lg:items-center">
          <div>
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-medium lg:text-[16px] overflow-hidden"
            >
              WELCOME
            </motion.h3>

            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="title font-bold text-xl leading-[32px] mt-3 mb-6 md:text-2xl
            lg:text-[40px] lg:leading-[52px] lg:mb-16 lg:font-medium overflow-hidden"
            >
              Analysis of Pokémon Stats Across Different Types: Guide to
              Building the Ultimate Team
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex flex-col gap-y-5 xl:text-[20px]"
            >
              <p className="leading-[28px] xl:leading-[32px]">
                Pokémon is one of the most popular franchise in the world that
                features various creatures with unique abilities and attributes.
                It’s a media and merchandising empire that has spawned TV shows,
                video games, card games, and more.
              </p>

              <p className="leading-[28px] xl:leading-[32px]">
                There are currently eighteen types of Pokémon, each with its own
                strengths and weaknesses. Pokémon types include{" "}
                <span className="text-yellow">
                  grass, fire, water, flying, bug, normal, poison, electric,
                  ground, psychic, rock, ice, dragon, ghost, steel, dark,
                  fighting and fairy.
                </span>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-y-5"
          >
            <div>
              <div className="w-[100%] m-0">
                <Image
                  src={pokemon}
                  alt="pokemon"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="bg-[#433896] relative px-4 py-8 rounded-xl flex flex-col gap-y-5 lg:rounded-3xl lg:px-12 xl:px-12">
              <Note />
              <div className="bg-purple px-4 py-1 font-bold w-fit leading-none rounded-2xl flex items-center justify-between gap-x-2">
                <span className="bg-dark w-2 h-2 rounded-full inline-block"></span>

                <span className="text-dark text-[14px]">Brief History</span>
              </div>

              <div className="flex flex-col gap-y-5 text-light text-[14px]">
                <p className="leading-[28px]">
                  Pokémon (short for Pocket Monsters) is a media franchise owned
                  by Japanese video game company Nintendo and created by Satoshi
                  Tajiri in 1995. The franchise now spans video games, trading
                  card games, animated television shows and movies, comic books,
                  toys, and more.
                </p>

                <p className="leading-[28px]">
                  The word “Pokémon” comes from two Japanese words: “poké”,
                  meaning “pocket”, and “mon”, meaning “monster”. Pokémon is a
                  romanization of the Japanese brand Pocket Monsters
                  (ポケットモンスター, Poketto Monsutā). “Pokémon” is also the
                  name of the creatures that inhabit the Pokémon world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
