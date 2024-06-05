import BGGradient from "../../assets/images/Blur.png";
import { Cards } from "./Cards";
import { cardTexts } from "./cardTexts";
import {
  Expertise,
  Team,
  Strategy,
  Transparency,
  Lamp,
  Success,
  Security,
} from "../../assets/svg";
export function WhoWeAre() {
  return (
    <section
      className="w-full flex items-center justify-center pt-40"
      id="quemsomos"
    >
      <img
        src={BGGradient}
        alt="gradiente"
        className="absolute right-0 object-cover"
      />
      <div className="w-full flex flex-col max-w-[1400px] items-center justify-center ">
        <h2 className="text-4xl font-bold text-blue-200">
          {cardTexts.whoWeAre.title}
        </h2>
        <p className="text-lg font-medium text-blue-200 mt-8 max-w-[80%]">
          {cardTexts.whoWeAre.description}
        </p>
        <div className="flex flex-row flex-wrap mt-10 items-center justify-center">
          <Cards texts={cardTexts.expertise} icon={Expertise} />
          <Cards texts={cardTexts.multiTeam} icon={Team} />
          <Cards texts={cardTexts.strategy} icon={Strategy} />
          <Cards texts={cardTexts.transparency} icon={Transparency} />
          <Cards texts={cardTexts.lamp} icon={Lamp} />
          <Cards texts={cardTexts.success} icon={Success} />
          <Cards texts={cardTexts.security} icon={Security} />
        </div>
      </div>
    </section>
  );
}
