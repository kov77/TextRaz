import { createSlice, Dispatch } from "@reduxjs/toolkit"
import {textApi} from "../../App/api";


const initialState = {
}

const slice = createSlice({
    name: "fileInput",
    initialState,
    reducers: {

    },
})

export const chartsReducer = slice.reducer

export const {

} = slice.actions


//Thunk

export const sendTextTC = (text: string) => (dispatch: Dispatch) => {
        textApi.sendText(text)
            .then(response => {
                console.log(response)
            })
}
