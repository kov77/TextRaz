import axios from "axios";
// "13e757697a1b97498c8903d61079d0f2059a01dba5b35cfd336393ad"
export const textApi = {
    sendText() {
        return axios.post("https://api.textrazor.com/")
    }
}

