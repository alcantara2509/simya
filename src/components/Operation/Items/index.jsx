import { useState } from "react";
import { Check, ArrowDown } from "../../../assets/svg";
import { Item1 } from "./Item1";
import { Item2 } from "./Item2";
import { Item3 } from "./Item3";
import { Item4 } from "./Item4";
import { Item5 } from "./Item5";
import { Item6 } from "./Item6";
import { Item7 } from "./Item7";
import { Item8 } from "./Item8";

export function Items({ title, id }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col w-full max-w-[80%] border-b border-gray-300/70 py-6 items-start">
      <button
        onClick={handleClick}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center">
          <img src={Check} alt="check icon" />
          <p className="text-xl font-bold text-blue-200 mx-6 text-left">
            {title}
          </p>
        </div>
        <img
          src={ArrowDown}
          alt="check arrow down"
          className={show ? "rotate-180" : ""}
        />
      </button>
      {show && id === 1 && <Item1 />}
      {show && id === 2 && <Item2 />}
      {show && id === 3 && <Item3 />}
      {show && id === 4 && <Item4 />}
      {show && id === 5 && <Item5 />}
      {show && id === 6 && <Item6 />}
      {show && id === 7 && <Item7 />}
      {show && id === 8 && <Item8 />}
    </div>
  );
}
