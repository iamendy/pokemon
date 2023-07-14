import Link from "next/link";

const SideNav = () => {
  return (
    <nav className="w-[10%] flex flex-col fixed left-0 pt-6 h-full lg:pt-16 lg:static xl:pt-28">
      <div className="h-[10%] flex items-start pt-2 justify-center lg:h-[30%]">
        <div className="page-holder relative">
          <div className="flex justify-center items-center border border-white w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] rotate-45">
            <span className="-rotate-45 text-[12px] lg:text-[24px] font-bold">
              1
            </span>
          </div>
        </div>
      </div>

      <div className="h-[50%] flex items-center justify-center">
        <div className="flex flex-col items-start pl-2 gap-y-9">
          <Link href="#">
            <div className="w-8 h-4 rounded-xl bg-orange lg:w-10"></div>
          </Link>

          <Link href="#" className="w-full group">
            <div className="w-4 h-4 rounded-full bg-[#382747] p-2 group-hover:w-8 transition-all group-hover:bg-orange"></div>
          </Link>

          <Link href="#" className="w-full group">
            <div className="w-4 h-4 rounded-full bg-[#382747] p-2 group-hover:w-8 transition-all group-hover:bg-orange"></div>
          </Link>

          <Link href="#" className="w-full group">
            <div className="w-4 h-4 rounded-full bg-[#382747] p-2 group-hover:w-8 transition-all group-hover:bg-orange"></div>
          </Link>

          <Link href="#" className="w-full group">
            <div className="w-4 h-4 rounded-full bg-[#382747] p-2 group-hover:w-8 transition-all group-hover:bg-orange"></div>
          </Link>

          <Link href="#" className="w-full group">
            <div className="w-4 h-4 rounded-full bg-[#382747] p-2 group-hover:w-8 transition-all group-hover:bg-orange"></div>
          </Link>

          <Link href="#" className="w-full group">
            <div className="w-4 h-4 rounded-full bg-[#382747] p-2 group-hover:w-8 transition-all group-hover:bg-orange"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default SideNav;
