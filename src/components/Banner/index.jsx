import HeroImage from "../../assets/images/heroimage.svg";
import ArrowRight from "../../assets/svg/arrow-right.svg";

export function Banner() {
  return (
    <section className="flex flex-row justify-center mt-10 pt-24 z-[999]">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-between px-10">
        <div>
          <h1 className="text-[42px]/[42px] md:text-5xl font-bold text-blue-200">
            Transformando <br />
            desafios em
            <br />
            oportunidades
          </h1>
          <p className="text-lg font-medium text-blue-200 mt-8 max-w-[80%]">
            Somos uma equipe experiente e visionária, dedicada a transformar
            situações complexas em oportunidades de geração de valor para
            empresas e investidores
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/+5531997980033?text=Olá,%20gostaria%20de%20mais%20informações"
              )
            }
            className="z-10 flex flex-row items-center bg-blue-100 rounded-full py-3 px-6 mt-8 hover:bg-blue-200"
          >
            <p className="text-lg font-medium text-white uppercase mr-2">
              fale conosco
            </p>
            <img src={ArrowRight} alt="arrow right" />
          </button>
        </div>
        <img src={HeroImage} alt="diamond lamp" className="hidden lg:flex" />
      </div>
    </section>
  );
}
