import { HashLink as Link } from "react-router-hash-link";

export function Buttons({ title, handleClick, path }) {
  return (
    <Link
      to={path}
      onClick={handleClick}
      className={`text-blue-200 hover:text-blue-100`}
    >
      <p className="font-medium text-xl ml-8">{title}</p>
    </Link>
  );
}
