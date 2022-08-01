import { useLocation, useNavigate } from "react-router-dom"

export default function TelaSucesso() {

    const location = useLocation();
    console.log(location)

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
                <div className="txt-finalizacao">{ location.state.namefilme }</div>
                <div className="txt-finalizacao">{ location.state.horariofilme}</div>
            </div>

            <div className="bloco-finalizacao">
                <div className="titulo">Ingressos</div>
                <div className="txt-finalizacao">{ location.state.ids }</div>
            </div>

            <div className="bloco-finalizacao">
                <div className="titulo">Comprador</div>
                <div className="txt-finalizacao">Nome: { location.state.name }</div>
                <div className="txt-finalizacao">CPF: { location.state.cpf }</div>
            </div>
            </div>

            <div className="faixa-centraliza">
                
                <button className="button" onClick={()=>navigate("/")}> Voltar para Home</button>
                
            </div>
            

        </>
    )
}