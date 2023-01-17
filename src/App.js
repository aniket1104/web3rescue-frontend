import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Working from "./components/Working";
import Private from "./components/Private";
import Accordian from "./components/Accordian";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Working />
      <Private />
      <Accordian />
    </div>
  );
};

export default App;
