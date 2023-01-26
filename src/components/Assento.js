import { useState } from "react";

export default function Assento({
  numAssento,
  isAvailable,
  idAssento,
  array,
  setArray,
  numpoutrona,
  SetNump,
  nump,
}) {
  const [assentoselecionado, setAssentoselecionado] = useState(false);

  function ehSelecionado() {
    if (!isAvailable) {
      return alert("Esse assento não está disponível");
    }

    setAssentoselecionado(!assentoselecionado);

    // idAssento 887
    if (array.includes(idAssento) === true) {
      for (let i = 0; i < array.length; i++) {
        if (idAssento === array[i]) {
          //[887] para Api
          array.splice(i, 1);
          setArray(array);
        }
        if (numpoutrona === nump[i]) {
          //["37"]  para a tela de sucesso
          nump.splice(i, 1);
          SetNump(nump);
        }
      }
    } else {
      setArray([...array, idAssento]);
      SetNump([...nump, numpoutrona]);
    }
  }

  return (
    <div
      className={`${
        isAvailable ? "assento cor-disponivel" : "assento cor-indisponivel"
      }  ${assentoselecionado ? "cor-selecionado" : ""}`}
      onClick={ehSelecionado}
    >
      {numAssento}
    </div>
  );
}
