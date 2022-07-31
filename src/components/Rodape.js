
export default function Rodape ({infrodape}){
    return (
        <div className="rodape">
        <div >
             <img className="img-filme" src={infrodape.posterURL} alt=""/>
        </div>
        <div>
            <div className="txt-rodape">
                    {infrodape.title}
            </div>

        </div>
    </div>
    )
} 