import { Link } from "react-router-dom"


export default function AssentoEscolha() {
    return (
        <>
            <div className="txt-selecione-filme">
                Selecione o(s) Assento (s)
            </div>


            <div className="faixa-centraliza">
                <div className="assentos">

                    <Link to="/sucesso">
                        <div className="assento">
                            01
                        </div>
                    </Link>

                </div>
            </div>



            <div className="faixa-centraliza">
                <div className="space-betweem">
                    <div className="centraliza">
                        <div className="selecionado">
                        </div>
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

            <div className="bloco-input">
                Nome do comprador
                <input placeholder="Digite seu nome..." className="input"></input>
            </div>

            <div className="bloco-input">
                CPF do comprador
                <input placeholder="Digite seu CPF..." className="input"></input>
            </div>

            <div className="faixa-centraliza">
                <button className="button" > Reservar assentos</button>
            </div>



        </>
    )
}