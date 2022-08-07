import { Navbar, Footer, Transactions } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="bg-gradient-to-r from-blue-800 to-black">
      <Navbar />
    </div>
    <Transactions />
    <Footer />
  </div>
);

export default App;
