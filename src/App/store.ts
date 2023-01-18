import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})

export type AppRootStateType = ReturnType<typeof rootReducer>


export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


export default store

// @ts-ignore
window.store = store
