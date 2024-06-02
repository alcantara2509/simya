export function Form() {
  return (
    <section className="w-full flex items-center justify-center py-20 ">
      <div className="w-full max-w-[800px] flex flex-col items-center justify-between px-10 py-10 bg-blue-100 rounded-3xl">
        <div>
          <h2 className="text-4xl font-bold text-blue-200 mb-10">
            Formulário de contato
          </h2>
        </div>

        <form className="w-full flex flex-col items-center justify-center px-10">
          <div className="w-full">
            <p className="text-lg font-medium text-blue-200">Nome</p>
            <input
              type="text"
              placeholder="João da Silva"
              className="w-full p-3  bg-gray-100 mt-2"
            />
          </div>

          <div className="w-full mt-4">
            <p className="text-lg font-medium text-blue-200">Email</p>
            <input
              type="text"
              placeholder="seemail@email.com"
              className="w-full p-3  bg-gray-100 mt-4"
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-lg font-medium text-blue-200">Telefone</p>
            <input
              type="phone"
              placeholder="(00) 00000-0000"
              className="w-full p-3  bg-gray-100 mt-4"
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-lg font-medium text-blue-200">
              Mensagem (opcional)
            </p>
            <textarea
              placeholder="Digite sua mensagem aqui"
              className="w-full p-4  bg-gray-100 mt-4"
            />
          </div>
          <button
            type="submit"
            className="px-20 p-4 rounded-full bg-blue-200 mt-14 mb-10 hover:bg-blue-300 text-white text-lg"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
}
