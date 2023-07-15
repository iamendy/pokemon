import { Logo, Menu, LinkExt } from "@/icons";

const Navbar = () => {
  return (
    <nav className="overflow-hidden px-4 py-5 md:py-5 md:px-5 lg:py-6 lg:px-12 fixed top-0 w-full bg-dark z-50">
      <div className="flex items-center justify-between md:justify-start md:gap-x-9 lg:gap-x-12">
        <div className="logo relative">
          <Logo />
        </div>

        <Menu />

        <div className="hidden md:flex gap-x-5 md:text-base md:font-medium lg:gap-x-12 lg:text-[16px]">
          <a
            href="#"
            className="flex items-center gap-x-1 hover:text-orange transition-colors"
          >
            <span>Resources</span>
            <LinkExt />
          </a>

          <a
            href="#"
            className="flex items-center gap-x-1 hover:text-orange transition-colors"
          >
            Pokémon Stats
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
