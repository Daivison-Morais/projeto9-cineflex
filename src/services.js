import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v8/cineflex";

function getFilmes() {
  const promisse = axios.get(`${BASE_URL}/movies`);
  return promisse;
}

function getHorarios(params) {
  const promisse = axios.get(`${BASE_URL}/movies/${params.idfilme}/showtimes`);
  return promisse;
}
function getAssentos(params2) {
  const promisse = axios.get(`${BASE_URL}/showtimes/${params2.idsessao}/seats`);
  return promisse;
}

function postDados(body) {
  const promisse = axios.post(`${BASE_URL}/seats/book-many`, body);
  return promisse;
}

export { getFilmes, getHorarios, getAssentos, postDados };
