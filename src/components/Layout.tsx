import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pancake bg-dark text-white">
      <Navbar />
      <div className=" font-manrope">{children}</div>
      <Footer />
    </main>
  );
};
export default Layout;
