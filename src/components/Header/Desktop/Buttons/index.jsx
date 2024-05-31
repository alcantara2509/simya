import Instagram from "../../../../assets/svg/instagram.svg";
import Linkedin from "../../../../assets/svg/linkedin.svg";

export function Buttons({ title, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`ml-${
        title === "linkedin" ? 4 : 8
      } text-blue-200 hover:text-blue-100`}
    >
      {title === "instagram" && <img src={Instagram} alt="logo instagram" />}
      {title === "linkedin" && <img src={Linkedin} alt="logo linkedin" />}
      {title !== "instagram" && title !== "linkedin" && (
        <p className="font-medium text-xl">{title}</p>
      )}
    </button>
  );
}
