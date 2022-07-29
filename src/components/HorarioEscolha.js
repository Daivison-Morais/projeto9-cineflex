import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";



function ItemHorario (){
    return (
        <>
                Quinta-feira-24/06/21
                <div className="bloco-hora">
                    <div>15:00</div>
                    <div>17:00</div>
                </div>
        </>
    )
}


export default function HorarioEscolha (){

    const navigate = useNavigate();

    
    return (
        <>
      <div className="txt-selecione-filme">
                Selecione Horário
            </div>
            
            <div className="bloco-horario" onClick={()=>navigate("/sessao/:idsessao")}>
                <ItemHorario/>
            </div>
        </>
    )
}