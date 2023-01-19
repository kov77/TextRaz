import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    text: "",
    textArr: []
}

const slice = createSlice({
    name: "fileInput",
    initialState,
    reducers: {
        setText(state, action) {
            return{...state, text: action.payload.text}
        },
        setTextArr(state, action) {
            return{...state, textArr: action.payload.textArr}
        },
    },
})

export const fileInputReducer = slice.reducer

export const {
    setText,
    setTextArr,

} = slice.actions
