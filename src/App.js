import "./App.css";
import { Banner } from "./components/Banner";
import { Operation } from "./components/Operation";
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
      <Operation />
      <Form />
      <Footer />
      <Link
        to={
          "https://wa.me/+5531997980033?text=Olá,%20gostaria%20de%20receber%20mais%20informações"
        }
        target="_blank"
        className="fixed right-[40px] bottom-[40px] z-10"
      >
        <img src={Whatsapp} alt="whatsapp" width={80} height={80} />
      </Link>
    </div>
  );
}

export default App;
