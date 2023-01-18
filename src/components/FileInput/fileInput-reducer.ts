import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    text: ""
}

const slice = createSlice({
    name: "fileInput",
    initialState,
    reducers: {
        setText(state, action) {
            return{...state, text: action.payload.text}
        }
    },
})

export const fileInputReducer = slice.reducer

export const {
    setText,

} = slice.actions
