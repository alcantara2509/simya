import { useState } from "react";
import Logo from "../../assets/images/Logo-Simya_Horizontal-Dark.png";
import { DesktopMenu } from "./Desktop";
import { HamburgerMenu } from "react-hamburger-menu-responsive";

export function Header() {
  const [trigger, setTrigger] = useState(false);
  const handleClick = () => {
    console.log("click");
  };

  return (
    <header className="w-full flex justify-center">
      <div className="w-full flex flex-row items-center justify-between px-10 py-10 max-w-[1400px]">
        <img src={Logo} alt="Simya Logo" />
        <DesktopMenu handleClick={handleClick} />
        <HamburgerMenu
          barsColor="#3C617A"
          closeColor="black"
          trigger={trigger}
          setTrigger={setTrigger}
          backgroundColor="#3C617A"
          breakPoint={1024}
          childrenStyle={{
            marginTop: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            paddingBottom: "20px",
          }}
        >
          <button className="text-white py-6 w-full hover:bg-white hover:text-blue-200">
            Home
          </button>
          <button className="text-white py-6 w-full hover:bg-white hover:text-blue-200">
            Contact
          </button>
          <button className="text-white py-6 w-full hover:bg-white hover:text-blue-200">
            About Us
          </button>
        </HamburgerMenu>
      </div>
    </header>
  );
}
