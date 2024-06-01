import "./App.css";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { WhoWeAre } from "./components/WhoWeAre";

function App() {
  return (
    <div className="w-screen h-screen items-center justify-center">
      <Header />
      <Banner />
      <WhoWeAre />
    </div>
  );
}

export default App;
