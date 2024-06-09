import { Items } from "./Items";
import { itemsTexts } from "./itemsTexts";

export function Operation() {
  return (
    <div
      className="w-full flex justify-center items-center mt-40 mb-10"
      id="occupation"
    >
      <div className="w-full max-w-[1400px] items-center justify-center">
        <div className="w-full flex items-center justify-center mb-10">
          <h2 className="text-4xl font-bold text-blue-200">Nossa Atuação</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <Items props={itemsTexts.item1} />
          <Items props={itemsTexts.item2} />
          <Items props={itemsTexts.item3} />
          <Items props={itemsTexts.item4} />
          <Items props={itemsTexts.item5} />
          <Items props={itemsTexts.item6} />
          <Items props={itemsTexts.item7} />
          <Items props={itemsTexts.item8} />
        </div>
      </div>
    </div>
  );
}
