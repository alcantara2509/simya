import { useState } from "react";
import { Check, ArrowDown } from "../../../assets/svg";

export function Items({ props }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  console.log(show);

  return (
    <div className="flex flex-col w-full max-w-[80%] border-b border-gray-300/70 py-6 items-start z-[100]">
      <button onClick={handleClick} className="flex items-center">
        <img src={Check} alt="check icon" />
        <p className="text-base md:text-xl font-bold text-blue-200 mx-6 text-center">
          {props.title}
        </p>
        <img
          src={ArrowDown}
          alt="check arrow down"
          className={show ? "rotate-180" : ""}
        />
      </button>
      {show && (
        <p className="text-lg font-medium text-blue-200 mt-6">
          {props.description}
        </p>
      )}
    </div>
  );
}
