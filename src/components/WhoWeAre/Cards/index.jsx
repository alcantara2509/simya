export function Cards({ texts, icon: Icon }) {
  return (
    <div
      className="w-full max-w-[40%] min-w-[250px] min-h-[250px] p-6 m-3 flex flex-col items-center justify-center rounded-2xl"
      style={{
        boxShadow: "1px 1px 8px 2px #CFE0E8",
      }}
    >
      <img src={Icon} alt="icon" width={36} height={36} />
      <h3 className="text-lg font-bold text-blue-200 mt-4 text-center">
        {texts.title}
      </h3>
      <p className="text-sm font-medium text-blue-200 mt-4 text-center max-w-[80%]">
        {texts.description}
      </p>
    </div>
  );
}
