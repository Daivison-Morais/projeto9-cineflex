import axios from "axios";
import { useState, useEffect, } from "react";
import { Link } from "react-router-dom";


function ItemFilme({ src, keys }) {

    return (
        <Link className="teste" to={`/filmes/${keys}`}>
            <img className="filme" src={src} alt="" />
            
        </Link>
        
    )
}

export default function FilmeEscolha() {

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
                    <ItemFilme keys={value.id} src={value.posterURL} />
                ))}
                
            </div>

        </>
    )


}