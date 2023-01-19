import axios from "axios";
// API-KEY: "13e757697a1b97498c8903d61079d0f2059a01dba5b35cfd336393ad"


// export const textApi = {
//     sendText(text: string) {
//         return axios.post("https://api.textrazor.com", {text: text, extractors: "entities,entailments"}, {
//             headers: {
//                 "X-TextRazor-Key": "13e757697a1b97498c8903d61079d0f2059a01dba5b35cfd336393ad"
//             }
//         })
//     }
// }
export const textApi = {
    sendText(text: string) {
        return fetch('https://api.textrazor.com/', {
            method: 'POST',
            headers: {
                'x-textrazor-key': 'YOUR_API_KEY',
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: 'extractors=entities,entailments&text=Spain\'s stricken Bankia expects to sell off its vast portfolio of industrial holdings that includes a stake in the parent company of British Airways and Iberia.'
        });
    }
}

// curl -X POST \
//     -H "x-textrazor-key: 13e757697a1b97498c8903d61079d0f2059a01dba5b35cfd336393ad" \
//     -d "extractors=entities,entailments" \
//     -d "text=${text}" \
//     https://api.textrazor.com/


