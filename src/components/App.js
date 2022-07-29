import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmeEscolha from "./FilmeEscolha";
import HorarioEscolha from './HorarioEscolha';
import AssentoEscolha from './AssentoEscolha';
import "../assets/css/styles.css";
import Topo from "./Topo";
import TelaSucesso from "./TelaSucesso";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Topo />
        <Routes>
          <Route path="/" element={<FilmeEscolha />}/>
          <Route path="/filmes/:idfilme" element={<HorarioEscolha />}/>
          <Route path="/sessao/:idsessao" element={<AssentoEscolha />}/>
          <Route path="/sucesso" element={<TelaSucesso />}/>
      
        </Routes>
      </BrowserRouter>

    </>
  )
}