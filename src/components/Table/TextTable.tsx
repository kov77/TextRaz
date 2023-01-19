import ListGroup from 'react-bootstrap/esm/ListGroup';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../App/store";
import {sendTextTC} from "../Сharts/charts-reducer";
import classes from "./table.module.css";

export function TextTable() {
    const textArr = useSelector((state: AppStateType) => state.fileInput.textArr)
    const text = useSelector((state: AppStateType) => state.fileInput.text)

    const dispatch = useDispatch()

    const elementOnclickHandler = (e: any) => {
        console.log(e.target.outerText)
        // @ts-ignore
        dispatch(sendTextTC(e.target.outerText))
    }


    return (
        <ListGroup className={classes.container}>
            {textArr.map((el, index) => {
                return <ListGroup.Item
                    key={index} onClick={elementOnclickHandler}>{el}
                </ListGroup.Item>
            })}
        </ListGroup>

    );

}

