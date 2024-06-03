export function Cards({ texts, image }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="max-w-[80%] min-w-[250px] min-h-[250px] py-10 px-12 lg:px-16 m-3 flex flex-col items-center justify-center rounded-2xl"
        style={{
          boxShadow: "1px 1px 8px 2px #CFE0E8",
        }}
      >
        <img src={image} alt="icon" />
        <div className="mt-10">
          <h3 className="text-lg font-bold text-blue-200 mt-4">
            {texts.title}
          </h3>
          <p className="text-sm font-medium text-blue-200 mt-4 max-w-[90%]">
            {texts.description}
          </p>
        </div>
      </div>
    </div>
  );
}
