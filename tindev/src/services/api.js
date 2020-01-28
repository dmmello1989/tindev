import axios from "axios";

const api = axios.create({
  //configuração para executar no emulador Genymotion
  baseURL: "http://10.0.3.2:3333"
});

export default api;