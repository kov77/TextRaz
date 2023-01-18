import axios from "axios";
// API-KEY: "13e757697a1b97498c8903d61079d0f2059a01dba5b35cfd336393ad"


export const textApi = {
    sendText(text: string) {
        return axios.post("https://api.textrazor.com", {"extractors": "entities,entailments", "text": "32324234wefwvfsdb s nb ns  c"}, {
            headers: {
                "X-TextRazor-Key": "13e757697a1b97498c8903d61079d0f2059a01dba5b35cfd336393ad"
            }
        })
    }
}







