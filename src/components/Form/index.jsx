import { useState } from "react";

export function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <section
      className="w-full flex items-center justify-center py-20"
      id="contact"
    >
      <div className="w-full max-w-[800px] flex flex-col items-center justify-between px-2 md:px-10 py-10 bg-blue-100 rounded-3xl">
        <div>
          <h2 className="text-4xl font-bold text-blue-200 mb-10 text-center">
            Formulário de contato
          </h2>
        </div>

        <form
          className="w-full flex flex-col items-center justify-center px-10"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(
              `https://wa.me/+5531997980033?text=*Nome:*%20${data.name}%0A*Email:*%20${data.email}%0A*Telefone:*%20${data.phone}%0A*Mensagem:*%20${data.message}`
            );
          }}
        >
          <div className="w-full">
            <p className="text-lg font-medium text-blue-200">Nome</p>
            <input
              type="text"
              placeholder="João da Silva"
              className="w-full p-3  bg-gray-100 mt-2"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-lg font-medium text-blue-200">Email</p>
            <input
              type="email"
              placeholder="seuemail@email.com"
              className="w-full p-3  bg-gray-100 mt-4"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-lg font-medium text-blue-200">Telefone</p>
            <input
              type="phone"
              placeholder="(00) 00000-0000"
              className="w-full p-3  bg-gray-100 mt-4"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
          <div className="w-full mt-4">
            <p className="text-lg font-medium text-blue-200">
              Mensagem (opcional)
            </p>
            <textarea
              placeholder="Digite sua mensagem aqui"
              className="w-full p-4  bg-gray-100 mt-4"
              onChange={(e) => setData({ ...data, message: e.target.value })}
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
