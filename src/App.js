import "./App.css";
import { Banner } from "./components/Banner";
import { CarouselComponent } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { SpecialSituations } from "./components/SpecialSituations";
import { WhoWeAre } from "./components/WhoWeAre";

function App() {
  return (
    <div className="w-full h-full items-center justify-center max-w-[100vw] ">
      <Header />
      <Banner />
      <WhoWeAre />
      <SpecialSituations />
      <CarouselComponent />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
