import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.5:3333', // colocar o endereço ip local
});

// para startar o server, digite no terminal:
// json-server ./src/services/server.json --host 192.168.1.5 --port 3333
// usando o ip e porta adequada

export default api;