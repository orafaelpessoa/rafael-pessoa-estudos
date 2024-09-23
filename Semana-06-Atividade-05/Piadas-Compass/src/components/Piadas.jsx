import { useState } from "react";
import piadas from "../data/piadas.json";
import Piada from "./Piada";

const Piadas = () => {
  const [jokes, setJokes] = useState(piadas);
  const [tituloPiada, settituloPiada] = useState("");
  const [respostaPiada, setrespostaPiada] = useState("");

  function FormSubmit(e) {
    e.preventDefault();
    if (tituloPiada === "") {
      alert("Preencha os campos");
      return;
    }
    if (respostaPiada === "") {
      alert("Preencha os campos");
      return;
    }
    if (jokes.length >= 10) {
      alert("Delete uma piada para adicionar outra!");
      return;
    }
    alert("Piada adicionada com sucesso!");

    document.getElementById("novaPiada").value = "";
    document.getElementById("novaReposta").value = "";

    setJokes([
      ...jokes,
      { id: Number(jokes.at(-1).id) + 1, joke: tituloPiada, response: respostaPiada },
    ]);
  }

  function DeletarPiada(id) {
    const PiadasRestantes = jokes.filter((joke) => Number(joke.id) !== Number(id));
    setJokes(PiadasRestantes);
  }

  return (
    <div className="bg-gray-800 min-h-screen text-white p-6">
      <form onSubmit={FormSubmit} className="bg-gray-700 p-6 rounded-md shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Adicionar Nova Piada</h2>
        <div className="mb-4">
          <label htmlFor="novaPiada" className="block text-sm font-medium mb-1">
            Nova Piada
          </label>
          <input
            type="text"
            name="novaPiada"
            id="novaPiada"
            className="w-full p-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-500 focus:outline-none text-black"
            onChange={(e) => settituloPiada(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="novaReposta" className="block text-sm font-medium mb-1">
            Nova Resposta
          </label>
          <input
            type="text"
            name="novaReposta"
            id="novaReposta"
            className="w-full p-2 rounded-md border border-gray-300 focus:ring focus:ring-indigo-500 focus:outline-none text-black"
            onChange={(e) => setrespostaPiada(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Adicionar nova piada
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {jokes.map((joke) => (
          <Piada
            key={joke.id}
            id={joke.id}
            joke={joke.joke}
            response={joke.response}
            onDelete={DeletarPiada}
          />
        ))}
      </div>
    </div>
  );
};

export default Piadas;
