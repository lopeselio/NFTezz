import { Navbar, Footer, About } from "../components";

const about = () => (
  <div className="w-full gradient-bg-welcome">
    <Navbar />
    <div className="text-4xl text-center text-white font-bold  mb-10">
      <h1> About Us Page</h1>
    </div>
    <About />
    <Footer />
  </div>
);

export default about;
