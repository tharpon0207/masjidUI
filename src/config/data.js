import Axios from 'axios';

let api_host = 'http://127.0.0.1:10010';
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};
export { api_host, axiosConfig}
