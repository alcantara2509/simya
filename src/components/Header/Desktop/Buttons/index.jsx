import Instagram from "../../../../assets/svg/instagram.svg";
import Linkedin from "../../../../assets/svg/linkedin.svg";

export function Buttons({ title, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`text-blue-200 hover:text-blue-100`}
    >
      {title === "instagram" && (
        <img src={Instagram} alt="logo instagram" className="ml-8" />
      )}
      {title === "linkedin" && (
        <img src={Linkedin} alt="logo linkedin" className="ml-4" />
      )}
      {title !== "instagram" && title !== "linkedin" && (
        <p className="font-medium text-xl ml-8">{title}</p>
      )}
    </button>
  );
}
