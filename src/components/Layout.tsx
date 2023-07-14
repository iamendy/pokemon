import Navbar from "./Navbar";
import Footer from "./Footer";
import SideNav from "./SideNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pancake bg-dark text-white">
      <Navbar />

      <section className="font-manrope flex gap-x-2 px-4 pt-24 pb-9">
        <SideNav />
        <main className="w-[90%] pt-1 ml-auto md:px-7">{children}</main>
      </section>
      <Footer />
    </main>
  );
};
export default Layout;
