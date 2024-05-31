export function Items({ title }) {
  return (
    <li
      onClick={() => console.log("click")}
      className="flex text-white justify-center w-full py-4 hover:bg-blue-300 hover:text-blue-200"
    >
      {title}
    </li>
  );
}
