import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../App/store";
import {sendTextTC} from "./charts-reducer";

export const Charts = () => {
    const dispatch = useDispatch()

    const text = useSelector((state: AppStateType) => state.fileInput.text)

    const sendRequestBtnHandler = () => {

        // @ts-ignore
        dispatch(sendTextTC(text))
    }
        return (
         <div>
             <p>{}</p>
             <button onClick={sendRequestBtnHandler}>send Request</button>
         </div>

        )



}
