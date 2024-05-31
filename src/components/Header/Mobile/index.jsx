import { Items } from "./Items";
import Instagram from "../../../assets/svg/instagram.svg";
import Linkedin from "../../../assets/svg/linkedin.svg";

export function MobileMenu({ handleClick }) {
  return (
    <div className="lg:hidden flex w-full justify-end px-8">
      <button className="space-y-1 group lg:hidden">
        <div className="w-7 rounded-full h-[3px] bg-blue-200" />
        <div className="w-6 rounded-full h-[3px] bg-blue-200" />
        <div className="w-7 rounded-full h-[3px] bg-blue-200" />
        <ul className="bg-blue-200 w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
          <button className="px-10 py-8 relative ml-auto">
            <div className="w-6 h-[3px] rounded-full rotate-45 absolute bg-white" />
            <div className="w-6 h-[3px] rounded-full -rotate-45 absolute bg-white" />
          </button>
          <Items title="Home" />
          <Items title="Quem Somos" />
          <Items title="Special Situations" />
          <Items title="Nossa Atualidade" />
          <Items title="Contato" />
          <div className="w-full flex flex-row items-center justify-center pr-4 pt-4">
            <button onClick={handleClick} className="ml-4">
              <img src={Instagram} alt="Simya Logo" />
            </button>
            <button onClick={() => console.log("link")} className="ml-4">
              <img src={Linkedin} alt="Simya Logo" />
            </button>
          </div>
        </ul>
      </button>
    </div>
  );
}
