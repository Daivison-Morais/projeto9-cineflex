import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFilmes } from "../services";

function ItemFilme({ src, keys }) {
  return (
    <Link className="teste" to={`/filmes/${keys}`}>
      <img className="filme" src={src} alt="" />
    </Link>
  );
}

export default function FilmeEscolha() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    getFilmes()
      .then((resposta) => {
        setImage(resposta.data);
      })
      .catch(() => {
        alert("efssssssssssss");
      });
  }, []);

  return (
    <>
      <div className="txt-selecione-filme">Selecione filme</div>

      <div className="blocofilmes">
        {image.map((value) => (
          <ItemFilme keys={value.id} src={value.posterURL} />
        ))}
      </div>
    </>
  );
}
