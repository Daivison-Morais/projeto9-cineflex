import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cpf as isCpf } from "cpf-cnpj-validator";

export default function AssentoEscolha() {

    function handleForm(event) {
        event.preventDefault();
        if (isCpf.isValid(cpf)) {
            navigate(`/sucesso`)
        }
    }

    
    const [cpf, setCpf] = useState("")
    const params2 = useParams();
    const navigate = useNavigate();
    const [assentos, setAssentos] = useState([]);
    const [postrodape, setPostrodape] = useState([]);
    const [sessaorodape, setsessaorodape] = useState([]);
    const [horariofilme, setHorariofilme] = useState([]);
    const [namefilme, setNamefilme] = useState([]);
    const [controleAssentos, setControleAssentos] = useState([]);
    

    
   
   


    useEffect(() => {
        console.log("params2:", params2);
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params2.idsessao}/seats`);
        promisse.then((resposta) => {
            setAssentos(resposta.data.seats);
            setPostrodape(resposta.data.movie.posterURL);
            setNamefilme(resposta.data.movie.title);
            setsessaorodape(resposta.data);
            setHorariofilme(resposta.data.day.weekday);
            setControleAssentos(resposta.data.seats.isAvailable);
         
            
        })
    }, [])
     

    function Assento({numAssento, isAvailable}) {
       
        const [corSelecionado, setCorSelecionado] = useState("");

        function EhDisponivel (){
         
            if(corSelecionado === ""){
                setCorSelecionado("cor-selecionado")      
            }
            if(corSelecionado === "cor-selecionado"){
                setCorSelecionado("")  
            }

        } 

        if(isAvailable){
            return (
                <div className={`assento cor-disponivel ${corSelecionado}`}  onClick={EhDisponivel}>
                    {numAssento}
                </div>
            )
        } else{
            return (
                <div className="assento cor-indisponivel"  onClick={()=>alert("está indisponível")}  >
                    {numAssento}
                </div>
            )
        }
        
    }

    return (

        <>
            <div className="txt-selecione-filme">
                Selecione o(s) Assento(s)
            </div>

            <div className="faixa-centraliza">
                <div className="assentos">

                    {assentos.map(assento => (

                        <Assento numAssento={assento.name} isAvailable={assento.isAvailable}/>
                        
                    ))}

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


            <form onSubmit={handleForm}>
                <div className="bloco-input">
                    Nome do comprador
                    <input placeholder="Digite seu nome..." className="input"
                        required></input>
                </div>

                <div className="bloco-input">
                    CPF do comprador
                    <input placeholder="Digite seu CPF..." className="input"
                        type="text"
                        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                        required

                    ></input>
                </div>

                <div className="faixa-centraliza">
                    <button className="button" > Reservar assentos</button>
                </div>
            </form>

            <div className="rodape">
                <div >
                    <img className="img-filme" src={postrodape} alt="" />
                </div>
                <div>
                    <div className="txt-rodape">
                        {namefilme}
                    </div>

                    <div className="txt-rodape">
                        {horariofilme}-{sessaorodape.name}
                    </div>

                </div>
            </div>

        </>
    )
}