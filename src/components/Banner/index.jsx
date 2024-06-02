import HeroImage from "../../assets/images/heroimage.png";
import ArrowRight from "../../assets/svg/arrow-right.svg";

export function Banner() {
  return (
    <section className="flex flex-row justify-center mt-10">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-between px-10">
        <div>
          <h1 className="text-5xl font-bold text-blue-200">
            Transformando <br />
            desafios em
            <br />
            oportunidades
          </h1>
          <p className="text-lg font-medium text-blue-200 mt-8">
            Somos uma equipe experiente e visionária, <br /> dedicada a
            transformar situações complexas <br /> em oportunidades de geração
            de valor para <br /> empresas e investidores
          </p>
          <button className="flex flex-row items-center bg-blue-100 rounded-full py-3 px-6 mt-8 hover:bg-blue-200">
            <p className="text-lg font-medium text-white uppercase mr-2">
              fale conosco
            </p>
            <img src={ArrowRight} alt="arrow right" />
          </button>
        </div>
        <img src={HeroImage} alt="diamond lamp" />
      </div>
    </section>
  );
}
