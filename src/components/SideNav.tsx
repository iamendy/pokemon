import Link from "next/link";
import { useRouter } from "next/router";

const SideNav = () => {
  const router = useRouter();

  return (
    <aside className="w-[10%] flex flex-col fixed left-0 pt-6 gap-y-24 lg:gap-y-16 lg:pt-16 lg:static lg:h-scree xl:pt-28 xl:w-20%]">
      <div className="h-[10%] flex items-start pt-2 justify-center lg:h-[30%]">
        <div className="page-holder relative">
          <div className="flex justify-center items-center border border-white w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] rotate-45">
            <span className="-rotate-45 text-[12px] lg:text-[24px] font-bold">
              {router.asPath == "/"
                ? "1"
                : router.asPath == "/introduction"
                ? "2"
                : router.asPath == "/data-types"
                ? "3"
                : router.asPath == "/story-comparism"
                ? "4"
                : router.asPath == "/type-combination"
                ? "5"
                : "6"}
            </span>
          </div>
        </div>
      </div>

      <div className="h-[30%] flex items-center justify-center xl:h-[20%] 2xl:h-[0%]">
        <div className="flex flex-col items-start pl-4 gap-y-9">
          <Link href="/" className="block w-full group">
            <div
              className={`${
                router.asPath == "/"
                  ? "bg-orange w-8 lg:w-10"
                  : "bg-[#382747] w-4 group-hover:bg-orange group-hover:w-full"
              } 
             block h-4 rounded-full transition-all group-hover:bg-orange`}
            ></div>
          </Link>

          <Link href="/introduction" className="block w-full group">
            <div
              className={`${
                router.asPath == "/introduction"
                  ? "bg-orange w-8 lg:w-10"
                  : "bg-[#382747] w-4 group-hover:bg-orange group-hover:w-full"
              } 
             block h-4 rounded-full transition-all group-hover:bg-orange`}
            ></div>
          </Link>

          <Link href="/data-types" className="block w-full group">
            <div
              className={`${
                router.asPath == "/data-types"
                  ? "bg-orange w-8 lg:w-10"
                  : "bg-[#382747] w-4 group-hover:bg-orange group-hover:w-full"
              } 
             block h-4 rounded-full transition-all group-hover:bg-orange`}
            ></div>
          </Link>

          <Link href="/story-comparism" className="block w-full group">
            <div
              className={`${
                router.asPath == "/story-comparism"
                  ? "bg-orange w-8 lg:w-10"
                  : "bg-[#382747] w-4 group-hover:bg-orange group-hover:w-full"
              } 
             block h-4 rounded-full transition-all group-hover:bg-orange`}
            ></div>
          </Link>

          <Link href="/type-combination" className="block w-full group">
            <div
              className={`${
                router.asPath == "/type-combination"
                  ? "bg-orange w-8 lg:w-10"
                  : "bg-[#382747] w-4 group-hover:bg-orange group-hover:w-full"
              } 
             block h-4 rounded-full transition-all group-hover:bg-orange`}
            ></div>
          </Link>

          <Link href="/conclusion" className="block w-full group">
            <div
              className={`${
                router.asPath == "/conclusion"
                  ? "bg-orange w-8 lg:w-10"
                  : "bg-[#382747] w-4 group-hover:bg-orange group-hover:w-full"
              } 
             block h-4 rounded-full transition-all group-hover:bg-orange`}
            ></div>
          </Link>
        </div>
      </div>
    </aside>
  );
};
export default SideNav;
