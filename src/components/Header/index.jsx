import { useState } from "react";
import Logo from "../../assets/images/Logo-Simya_Horizontal-Dark.png";
import { DesktopMenu } from "./Desktop";
import { HamburgerMenu } from "react-hamburger-menu-responsive";
import { HashLink as Link } from "react-router-hash-link";

export function Header() {
  const [trigger, setTrigger] = useState(false);

  return (
    <header className="w-full flex justify-center">
      <div className="w-full flex flex-row items-center justify-between px-10 py-10 max-w-[1400px]">
        <img src={Logo} alt="Simya Logo" />
        <DesktopMenu />
        <HamburgerMenu
          barsColor="#3C617A"
          closeColor="white"
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
          <Link to="#quemsomos" onClick={() => setTrigger(false)}>
            <div className="text-white py-6 w-full">Quem Somos</div>
          </Link>
          <Link to="#special" onClick={() => setTrigger(false)}>
            <div className="text-white py-6 w-full">Special Situations</div>
          </Link>
          <Link to="#occupation" onClick={() => setTrigger(false)}>
            <div className="text-white py-6 w-full">Nossa Atuação</div>
          </Link>
          <Link to="#contact" onClick={() => setTrigger(false)}>
            <div className="text-white py-6 w-full">Contato</div>
          </Link>
        </HamburgerMenu>
      </div>
    </header>
  );
}
