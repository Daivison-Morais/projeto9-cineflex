import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function TelaSucesso() {
  const location = useLocation();
  const navigate = useNavigate();

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      navigate("/");
    }
  });

  return (
    <>
      <div className="txt-pedido-efetuado">
        <div>Pedido feito </div>
        <div> com sucesso!</div>
      </div>

      <div className="bloco-geral">
        <div className="bloco-finalizacao">
          <div className="titulo">Filme e sessão</div>
          <div className="txt-finalizacao">{location.state.namefilme}</div>

          <div className="txt-finalizacao">
            {" "}
            {location.state.data} {location.state.horario}
          </div>
        </div>

        <div className="bloco-finalizacao">
          <div className="titulo">Ingressos</div>
          <div className="txt-finalizacao">
            {" "}
            Assento(s): {location.state.nump}
          </div>
        </div>

        <div className="bloco-finalizacao">
          <div className="titulo">Comprador</div>
          <div className="txt-finalizacao">Nome: {location.state.name}</div>
          <div className="txt-finalizacao">CPF: {location.state.cpf}</div>
        </div>
      </div>

      <div className="faixa-centraliza">
        <Button onClick={() => navigate("/")}>Voltar para Home</Button>
      </div>
    </>
  );
}
