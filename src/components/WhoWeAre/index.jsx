import BGGradient from "../../assets/images/Blur.png";

export function WhoWeAre() {
  return (
    <section
      className="w-full flex items-center justify-center mt-40 "
      // style={{ backgroundImage: `url(${BGGradient})` }}
    >
      <div className="w-full flex flex-col max-w-[1400px] items-center justify-center bg-black px-20">
        <h2 className="text-4xl font-bold text-blue-200">Quem Somos</h2>
        <p className="text-lg font-medium text-blue-200 mt-8 text-center">
          A Simya Capital é mais do que uma consultoria ou uma empresa de
          investimentos. Somos uma equipe experiente e visionária, dedicada a
          transformar situações complexas em oportunidades de geração de valor
          para empresas e investidores.
        </p>
      </div>
    </section>
  );
}
