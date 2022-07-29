import axios from "axios";
import { useState, useEffect, } from "react";
import { Link, useParams } from "react-router-dom";
import HorarioEscolha from "./HorarioEscolha";



function ItemFilme({ src }) {
    return (
        <Link className="teste" to="/filmes/:idfilme">
            <img className="filme" src={src} alt="" />
        </Link>
    )
}

export default function FilmeEscolha() {

    const params = useParams();

    const [image, setImage] = useState([]);
    
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/`);
        promisse.then((resposta) => {
            setImage(resposta.data)

        })
    }, [])


    return (
        <>
            <div className="txt-selecione-filme">
                Selecione filme
            </div>

            <div className="blocofilmes">

                {image.map((value) => (
                    <ItemFilme src={value.posterURL} />
                ))}
            </div>

        </>
    )


}