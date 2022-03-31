import axios from "axios";

const _axios = axios.create({
    baseURL: "http://34.123.15.119/api/"
})

export default _axios;