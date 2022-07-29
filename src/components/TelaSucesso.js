import { useNavigate } from "react-router-dom"


export default function TelaSucesso() {

    const navigate = useNavigate();

    return (
        <>
            <div className="txt-pedido-efetuado">
                <div>Pedido feito </div>
                <div> com sucesso!</div>
            </div>

<div className="bloco-geral">
            <div className="bloco-finalizacao">
                <div className="titulo">Filme e sessão</div>
                <div className="txt-finalizacao">nome do filme</div>
                <div className="txt-finalizacao">horario</div>
            </div>

            <div className="bloco-finalizacao">
                <div className="titulo">Ingressos</div>
                <div className="txt-finalizacao">Ingresso</div>
            </div>

            <div className="bloco-finalizacao">
                <div className="titulo">Comprador</div>
                <div className="txt-finalizacao">Nome:</div>
                <div className="txt-finalizacao">CPF:</div>
            </div>
            </div>

            <div className="faixa-centraliza">
                
                <button className="button" onClick={()=>navigate("/")}> Voltar para Home</button>
                
            </div>
            

        </>
    )
}