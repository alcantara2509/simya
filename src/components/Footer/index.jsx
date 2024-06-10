import { Link } from "react-router-dom";
import Instagram from "../../assets/svg/instagram.svg";
import Linkedin from "../../assets/svg/linkedin.svg";

export function Footer() {
  return (
    <footer className="w-full bg-blue-200 flex flex-col items-center justify-center pb-24">
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-end justify-between px-10 py-10">
        <div className="w-full">
          <p className="text-base font-medium text-white">
            © 2024 Simya Capital. Todos os Direitos Reservados.
          </p>
        </div>
        <div className="flex flex-row-reverse mt-2 md:mt-0 md:flex-col w-full items-end justify-between">
          <div className="flex flex-row">
            <Link
              to={"https://www.instagram.com/simya.capital/"}
              target="_blank"
            >
              <img src={Instagram} alt="logo instagram" className="ml-8" />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/simyacapital/"}
              target="_blank"
            >
              <img src={Linkedin} alt="logo linkedin" className="ml-4" />
            </Link>
          </div>
          <p className="text-base font-medium text-white pt-6">
            contato@simya.com.br
          </p>
        </div>
      </div>
    </footer>
  );
}
