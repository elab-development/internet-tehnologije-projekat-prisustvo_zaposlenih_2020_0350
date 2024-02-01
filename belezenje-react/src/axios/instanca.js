import axios from "axios";
let instanca = null;
const token = window.sessionStorage.getItem("token");

if (token) {
    instanca = axios.create({
        baseURL: "http://127.0.0.1:8000/api",
        timeout: 30000,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}else{
    instanca = axios.create({
        baseURL: "http://127.0.0.1:8000/api",
        timeout: 30000,
    });
}
export default instanca;