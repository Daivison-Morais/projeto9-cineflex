import Rodape from "./Rodape";
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function HorarioEscolha() {
    const navigate = useNavigate();
    const params = useParams();
    
    const [sessoes, setSessoes] = useState([]);
    const [infrodape, setInfrodape] = useState([]);

    useEffect(() => {
        console.log(params);
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idfilme}/showtimes`);
        promisse.then((resposta) => {
            setSessoes(resposta.data.days);
            setInfrodape(resposta.data);
        })
    }, [])

    return (
        <>
            <div className="txt-selecione-filme">
                Selecione Horário
            </div>

            {sessoes.map(value => (

                <div className="bloco-horario" >
                    {value.weekday}-{value.date}
                    <div className="bloco-hora">
                        <div className="hora" onClick={() => navigate(`/sessao/${value.showtimes[0].id}`)}>{value.showtimes[0].name}</div>
                        <div className="hora" onClick={() => navigate(`/sessao/${value.showtimes[1].id}`)}>{value.showtimes[1].name}</div>
                    </div>

                </div>

            ))}

            <Rodape infrodape={infrodape}/>


        </>
    )
}