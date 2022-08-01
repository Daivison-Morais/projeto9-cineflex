import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cpf as isCpf } from "cpf-cnpj-validator";

export default function AssentoEscolha() {

    function handleForm(event) {
        event.preventDefault();
        if (isCpf.isValid(cpf)) {
            navigate("/sucesso", { state: { name: nome,  cpf: cpf, nump: nump, namefilme: namefilme, horariofilme: horariofilme} })
        }

         const body = {
            ids: array,
            name: nome,
            cpf: cpf
        }

        const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", body);

    }

    
    const params2 = useParams();
    const navigate = useNavigate();
    const [assentos, setAssentos] = useState([]);
    const [postrodape, setPostrodape] = useState([]);
    const [sessaorodape, setsessaorodape] = useState([]);
    const [horariofilme, setHorariofilme] = useState([]);
    const [namefilme, setNamefilme] = useState([]);
    const [array, setArray] = useState([]);
    const [nump, SetNump] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    
    useEffect(() => {

        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params2.idsessao}/seats`);
        promisse.then((resposta) => {
            setAssentos(resposta.data.seats);
            setPostrodape(resposta.data.movie.posterURL);
            setNamefilme(resposta.data.movie.title);
            setsessaorodape(resposta.data);
            setHorariofilme(resposta.data.day.weekday);
        })
    }, [])

    console.log("array:", array);
    console.log(nump);

    function Assento({ numAssento, isAvailable, idAssento, array, setArray, numpoutrona }) {

        let corSelecionado = "";
        const [assentoselecionado, setAssentoselecionado] = useState(false);
        if(assentoselecionado === true){
            corSelecionado = "cor-selecionado";
        } else{
            corSelecionado = "";
        }
    
        function ehSelecionado() {

            setAssentoselecionado(!assentoselecionado);
         
            if(array.includes(idAssento) === true){
                const arrayaux = [...array];
                const numpaux = [...nump];
                for(let i = 0; i < array.length; i++){
                    if(idAssento === array[i]){
                        arrayaux.splice(i, 1);
                        setArray(arrayaux);
                       
                    }
                    if(numpoutrona === nump[i]){
                        numpaux.splice(i, 1);
                        SetNump(numpaux);
                       
                    }
                }

            } else{
                setArray([...array, idAssento])
                SetNump([...nump, numpoutrona])

            }
           
        }

        if (isAvailable) {
            return (
                <div className={`assento cor-disponivel ${corSelecionado}`} onClick={ehSelecionado}>
                    {numAssento}
                </div>
            )
        } else {
            return (
                <div className="assento cor-indisponivel" onClick={() => alert("Esse assento não está disponível")} >
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

                    {assentos.map((assento, index)=> (

                        <Assento  numpoutrona={`${index+1} `} numAssento={assento.name} isAvailable={assento.isAvailable} idAssento={assento.id} array={array} setArray={setArray}/>

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
                        type="text"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        required />
                </div>

                <div className="bloco-input">
                    CPF do comprador
                    <input placeholder="Digite seu CPF... xxxxxxxxxxx" className="input"
                        type="text"
                        pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                        required

                    ></input>
                </div>

                <div className="faixa-centraliza">
                    <button className="button" type="submit"> Reservar assentos</button>
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