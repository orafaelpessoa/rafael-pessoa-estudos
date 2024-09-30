import { useState } from "react";

const Piada = ({ id, joke, response, onDelete }) => {
  const [viewResponse, setviewResponse] = useState(false);
  const [button, setbutton] = useState("Ver Resposta");
  function responseControl() {
    if (viewResponse) {
      setviewResponse(false);
      setbutton("Ver Resposta");
    } else {
      setviewResponse(true);
      setbutton("Esconder Resposta");
    }
  }

  return (
    <div>
      <div>
        <p>{joke}</p>
        {viewResponse && <p>{response}</p>}
        <button
          onClick={responseControl}
          className="w-30 bg-indigo-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-indigo-700 transition-colors"
        >
          {button}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="w-30 bg-indigo-300 text-black px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors"
        >
          Deletar
        </button>
      </div>
    </div>
  );
};

export default Piada;
