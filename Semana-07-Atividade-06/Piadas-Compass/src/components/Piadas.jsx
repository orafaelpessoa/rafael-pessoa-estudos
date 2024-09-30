import { useEffect, useInsertionEffect, useState } from "react";
import Piada from "./Piada";
import axios from "axios";
import Loading from "./Loading";

const Piadas = () => {
  const [jokes, setJokes] = useState([]);
  const [tituloPiada, settituloPiada] = useState("");
  const [respostaPiada, setrespostaPiada] = useState("");
  const [addPiada, setAddPiada] = useState(false);
  const [deletePiada, setDeletePiada] = useState(false);
  

  useEffect(() => {
    axios
      .get("http://localhost:3100/Jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  async function FormSubmit(e) {

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

    const NovaPiada = {
      id: Number(jokes.at(-1).id) + 1,
      joke: tituloPiada,
      response: respostaPiada,
    };
    
    setAddPiada(true);

    await axios 
      .post("http://localhost:3100/Jokes", NovaPiada)
      .then((response) => {
        console.log(response.data, 'adicionado com sucesso')
        setJokes([...jokes, NovaPiada]);
        alert("Piada adicionada com sucesso!");
      })
      .catch((error) => {
        alert(error);
      });
      setAddPiada(false)
  
  }

  async function DeletarPiada(id) {

    setDeletePiada(true)
    await axios
      .delete(`http://localhost:3100/Jokes/${id}`)
      .then((response) => {
        const PiadasRestantes = jokes.filter(
          (joke) => Number(joke.id) !== Number(id)
        );
        setJokes(PiadasRestantes);
        console.log(response.data, 'Piada deletada')
        alert("Piada deletada!");
      })
      .catch((error) => {
        alert(error);
      });
      setDeletePiada(false);

  }

  if(addPiada){
   
   return <div><Loading msg='Adicionando nova piada'/></div>
  }   

  if(deletePiada){
  
   return <div><Loading msg='Deletando Piada'/></div>
  } 

  if(jokes.length == 0){
   
   return <div><Loading msg='Carregando...'/></div>
  }

  

  return (
    <div className="bg-gray-800 min-h-screen text-white p-6">
      <form
        onSubmit={FormSubmit}
        className="bg-gray-700 p-6 rounded-md shadow-md max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Adicionar Nova Piada
        </h2>
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
          <label
            htmlFor="novaReposta"
            className="block text-sm font-medium mb-1"
          >
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
