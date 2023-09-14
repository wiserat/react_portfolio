import './App.css';
import {HeroSection} from "./sections/HeroSection";
import {About} from "./sections/About";

function App() {
  return (
    <div className="App p-2 lg:p-4 bg-gray-950 flex flex-col gap-4 text-font-family pb-4 overflow-hidden">
        <HeroSection />
        <About />
    </div>
  );
}

export default App;
