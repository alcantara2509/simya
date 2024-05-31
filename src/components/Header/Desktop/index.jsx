import { Buttons } from "./Buttons";

export function DesktopMenu({ handleClick }) {
  return (
    <div className="lg:flex hidden">
      <Buttons title="Home" handleClick={handleClick} />
      <Buttons title="Quem Somos" handleClick={handleClick} />
      <Buttons title="Special Situations" handleClick={handleClick} />
      <Buttons title="Nossa Atuação" handleClick={handleClick} />
      <Buttons title="Contato" handleClick={handleClick} />
      <Buttons title="instagram" handleClick={handleClick} />
      <Buttons title="linkedin" handleClick={handleClick} />
    </div>
  );
}
