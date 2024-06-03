import "./App.css";
import { Banner } from "./components/Banner";
import { CarouselComponent } from "./components/Carousel";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { SpecialSituations } from "./components/SpecialSituations";
import { WhoWeAre } from "./components/WhoWeAre";
import Whatsapp from "./assets/svg/whatsapp.svg";
import { Link } from "react-router-dom";

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
      <Link
        to={"https://wa.me/+5531997980033"}
        target="_blank"
        className="fixed right-[40px] bottom-[40px]"
      >
        <img src={Whatsapp} alt="whatsapp" width={80} height={80} />
      </Link>
    </div>
  );
}

export default App;
