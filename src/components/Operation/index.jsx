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
          <Items title={itemsTexts.item1.title} id={1} />
          <Items title={itemsTexts.item2.title} id={2} />
          <Items title={itemsTexts.item3.title} id={3} />
          <Items title={itemsTexts.item4.title} id={4} />
          <Items title={itemsTexts.item5.title} id={5} />
          <Items title={itemsTexts.item6.title} id={6} />
          <Items title={itemsTexts.item7.title} id={7} />
          <Items title={itemsTexts.item8.title} id={8} />
        </div>
      </div>
    </div>
  );
}
