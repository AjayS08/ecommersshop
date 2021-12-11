import axios from "axios";

const instance = axios.create({
    baseURL:'https://us-central1-challenge-8a28d.cloudfunctions.net/api'
    //'http://localhost:5001/challenge-8a28d/us-central1/api'
});

export default instance;