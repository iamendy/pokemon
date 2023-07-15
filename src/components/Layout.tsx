import Navbar from "./Navbar";
import Footer from "./Footer";
import SideNav from "./SideNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-dark text-white overflow-hidden">
      <div className="pancake lg:max-w-[1380px] lg:mx-auto">
        <Navbar />
        <div></div>
        <section className="font-manrope flex gap-x-2 px-4 pt-24 pb-9">
          <SideNav />
          <main className="w-[90%] pt-7 ml-auto md:px-7 lg:px-0">
            {children}
          </main>
        </section>
        <Footer />
      </div>
    </main>
  );
};
export default Layout;
