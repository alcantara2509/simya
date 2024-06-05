export function Cards({ texts, icon: Icon }) {
  return (
    <div
      className="w-full max-w-[90%] min-w-[250px] min-h-[250px] p-6 m-3 flex flex-col items-center justify-center rounded-2xl md:max-w-[40%]"
      style={{
        boxShadow: "1px 1px 8px 2px #CFE0E8",
        zIndex: 1,
        backgroundColor: "white",
      }}
    >
      <div className="min-h-[40px] flex items-end">
        <img src={Icon} alt="icon" width={32} height={40} />
      </div>
      <h3 className="text-lg font-bold text-blue-200 mt-2 text-center">
        {texts.title}
      </h3>
      <p className="text-lg font-medium text-blue-200 mt-1 pb-2 text-center max-w-[80%]">
        {texts.description}
      </p>
    </div>
  );
}
