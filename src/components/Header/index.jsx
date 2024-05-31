import Logo from "../../assets/images/Logo-Simya_Horizontal-Dark.png";
import { DesktopMenu } from "./Desktop";
import { MobileMenu } from "./Mobile";

export function Header() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <header className="w-full flex flex-row items-center justify-between px-10 py-10">
      <img src={Logo} alt="Simya Logo" />
      <DesktopMenu handleClick={handleClick} />
      <MobileMenu handleClick={handleClick} />
    </header>
  );
}
