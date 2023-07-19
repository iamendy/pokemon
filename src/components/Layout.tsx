import Navbar from "./Navbar";
import Footer from "./Footer";
import SideNav from "./SideNav";
import { ChevronLeft, ChevronRight } from "../icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  const handleRoute = () => {
    switch (router.asPath) {
      case "/":
        setPrev("/");
        setNext("/introduction");
        break;

      case "/introduction":
        setPrev("/");
        setNext("/data-types");
        break;

      case "/data-types":
        setPrev("/introduction");
        setNext("/story-comparism");
        break;

      case "/story-comparism":
        setPrev("/data-types");
        setNext("/type-combination");
        break;

      case "/type-combination":
        setPrev("/story-comparism");
        setNext("/conclusion");
        break;

      case "/conclusion":
        setPrev("/type-combination");
        setNext("/#");
        break;
    }
  };

  useEffect(() => {
    handleRoute();
  }, []);

  return (
    <main className="bg-dark text-white overflow-hidden">
      <div className="pancake lg:max-w-[1380px] lg:mx-auto ">
        <Navbar />
        <div></div>
        <section className="content flex gap-x-2 px-4 pt-24 pb-9 lg:h-screen lg:overflow-y-scroll">
          <SideNav />
          <main className="w-[90%] pt-7 ml-auto md:px-7 lg:px-0">
            {children}

            <div className=" flex items-center gap-x-4 mt-4 lg:py-6 justify-end">
              <Link
                href={prev}
                className={`${
                  router.asPath == "/" && "hidden"
                } flex items-center hover:text-orange`}
              >
                <ChevronLeft />
                <span>Prev</span>
              </Link>

              <Link
                href={next}
                className={`${
                  router.asPath == "/conclusion" && "hidden"
                } flex items-center hover:text-orange`}
              >
                <span>Next</span>
                <ChevronRight />
              </Link>
            </div>
          </main>
        </section>
        <Footer />
      </div>
    </main>
  );
};
export default Layout;
