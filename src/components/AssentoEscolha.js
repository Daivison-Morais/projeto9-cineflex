import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cpf as isCpf } from "cpf-cnpj-validator";
import Assento from "./Assento";
import Button from "./Button";
import { getAssentos, postDados } from "../services";

export default function AssentoEscolha() {
  const params2 = useParams();
  const navigate = useNavigate();

  const [sessao, setSessao] = useState([]);
  const [array, setArray] = useState([]);
  const [nump, SetNump] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
  });

  useEffect(() => {
    getAssentos(params2)
      .then((resposta) => {
        setSessao(resposta.data);
      })
      .catch(() => {});
  }, []);

  const body = {
    ids: array,
    nome: form.nome,
    cpf: form.cpf,
  };
  console.log(body);

  function handleForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();

    if (isCpf.isValid(form.cpf)) {
      navigate("/sucesso", {
        state: {
          name: form.nome,
          cpf: form.cpf,
          nump: nump,
          namefilme: sessao.movie.title,
          horariofilme: sessao.day.weekday,
          horario: sessao.name,
          data: sessao.day.date,
        },
      });
    } else {
      alert("cpf inválido");
    }

    postDados(body);
  }

  return (
    <>
      <div className="txt-selecione-filme">Selecione o(s) Assento(s)</div>

      <div className="faixa-centraliza">
        <div className="assentos">
          {sessao.seats?.map((assento, index) => (
            <Assento
              numpoutrona={`${index + 1} `}
              numAssento={assento.name}
              nump={nump}
              SetNump={SetNump}
              isAvailable={assento.isAvailable}
              idAssento={assento.id}
              array={array}
              setArray={setArray}
            />
          ))}
        </div>
      </div>

      <div className="faixa-centraliza">
        <div className="space-betweem">
          <div className="centraliza">
            <div className="selecionado"></div>
            <div>Selecionado</div>
          </div>

          <div className="centraliza">
            <div className="disponivel"></div>
            <div>Disponivel</div>
          </div>

          <div className="centraliza">
            <div className="indisponivel"></div>
            <div>Indisponivel</div>
          </div>
        </div>
      </div>

      <form onSubmit={submit}>
        <div className="bloco-input">
          Nome do comprador
          <input
            placeholder="Digite seu nome..."
            className="input"
            type="text"
            value={form.nome}
            name="nome"
            onChange={handleForm}
            required
          />
        </div>

        <div className="bloco-input">
          CPF do comprador
          <input
            placeholder="Digite seu CPF... xxx.xxx.xxx-xx"
            className="input"
            pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
            value={form.cpf}
            name="cpf"
            onChange={handleForm}
          ></input>
        </div>

        <div className="faixa-centraliza">
          <Button
            type="submit"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit();
              }
            }}
          >
            Reservar assentos
          </Button>
        </div>
      </form>

      <div className="rodape">
        <div>
          <img className="img-filme" src={sessao.movie?.posterURL} alt="" />
        </div>
        <div>
          <div className="txt-rodape">{sessao.movie?.title}</div>

          <div className="txt-rodape">
            {sessao.day?.weekday}-{sessao.name}
          </div>
        </div>
      </div>
    </>
  );
}
