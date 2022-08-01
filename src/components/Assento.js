import { useState } from "react";


export default function Assento({ numAssento, isAvailable, idAssento, array, setArray, numpoutrona, SetNump, nump}) {

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