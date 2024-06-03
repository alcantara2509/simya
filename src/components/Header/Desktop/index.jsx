import { Link } from "react-router-dom";
import { Buttons } from "./Buttons";
import Instagram from "../../../assets/svg/instagram.svg";
import Linkedin from "../../../assets/svg/linkedin.svg";

export function DesktopMenu() {
  return (
    <div className="lg:flex hidden">
      <Buttons title="Quem Somos" path={"#quemsomos"} />
      <Buttons title="Special Situations" path={"#special"} />
      <Buttons title="Nossa Atuação" path={"#occupation"} />
      <Buttons title="Contato" path={"#contact"} />
      <Link to={"https://www.instagram.com/simya.capital/"} target="_blank">
        <img src={Instagram} alt="logo instagram" className="ml-8" />
      </Link>
      <Link
        to={"https://www.linkedin.com/company/simyacapital/"}
        target="_blank"
      >
        <img src={Linkedin} alt="logo linkedin" className="ml-4" />
      </Link>
    </div>
  );
}
