import { Logo, Menu, LinkExt } from "@/icons";

const Navbar = () => {
  return (
    <nav className="overflow-hidden px-4 py-4 md:py-5 md:px-5 lg:py-6 lg:px-6">
      <div className="flex items-center justify-between md:justify-start md:gap-x-9">
        <div className="logo relative">
          <Logo />
        </div>

        <Menu />

        <div className="flex gap-x-5 md:text-base md:font-medium">
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
