import axios from "axios";
import { useState, useEffect, } from "react";

function ItemFilme({ src }) {
    return (
        <div className="filme">
            <img src={src} alt="Catioro fofíneo" />
        </div>
    )
}

export default function FilmeEscolha() {

    const [image, setImage] = useState ([]);
useEffect(()=>{
    const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promisse.then((resposta)=>{
        setImage(resposta.data)
        
    })
},[])
    

    return (
        <>
            <div className="topo">
                CINEFLEX
            </div>
            
            <div className="txtselecionefilme">
                Selecione filme
            </div>

            <div className="blocofilmes">
                    
                   {image.map((value) => (
                        <ItemFilme src={value.posterURL}/>
                   ))  }            
                  
                   
            </div>

        </>
    )
}