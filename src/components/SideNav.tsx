import Link from "next/link";

const SideNav = () => {
  return (
    <nav className="w-[10%] flex flex-col fixed left-0  h-full">
      <div className="h-[10%] flex items-start pt-2 justify-center ">
        <div className="page-holder relative">
          <div className="flex justify-center items-center border border-white w-[20px] h-[20px] lg:w-[50px] lg:h-[50px] rotate-45">
            <span className="-rotate-45 text-[12px] lg:text-[24px] font-bold">
              1
            </span>
          </div>
        </div>
      </div>

      <div className="h-[50%] flex items-center justify-center">
        <div className="flex flex-col items-start pl-2 gap-y-9">
          <Link href="#" className="w-8 h-4 rounded-xl bg-orange"></Link>

          <Link href="#" className="w-4 h-4 rounded-full bg-[#382747]"></Link>

          <Link href="#" className="w-4 h-4 rounded-full bg-[#382747]"></Link>

          <Link href="#" className="w-4 h-4 rounded-full bg-[#382747]"></Link>

          <Link href="#" className="w-4 h-4 rounded-full bg-[#382747]"></Link>

          <Link href="#" className="w-4 h-4 rounded-full bg-[#382747]"></Link>

          <Link href="#" className="w-4 h-4 rounded-full bg-[#382747]"></Link>
        </div>
      </div>
    </nav>
  );
};
export default SideNav;
