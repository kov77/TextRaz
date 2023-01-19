import ListGroup from 'react-bootstrap/esm/ListGroup';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../App/store";
// import {sendTextTC} from "../Сharts/charts-reducer";
import classes from "./table.module.css";

export function TextTable() {
    const textArr = useSelector((state: AppStateType): any => state.fileInput.textArr)
    const text = useSelector((state: AppStateType) => state.fileInput.text)

    const dispatch = useDispatch()

    const elementOnclickHandler = (e: any) => {
        // console.log(e.target.outerText)
        // // @ts-ignore
        // dispatch(sendTextTC(e.target.outerText))

        fetch('https://api.textrazor.com/', {
            method: 'POST',
            headers: {
                'x-textrazor-key': '13e757697a1b97498c8903d61079d0f2059a01dba5b35cfd336393ad',
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: 'extractors=entities,entailments&text=${text}'
        });
    }


    return (
        <ListGroup className={classes.container}>
            {textArr ? textArr.map((el: any, index: any) => {
                return <ListGroup.Item
                    key={index} onClick={elementOnclickHandler}>{el}
                </ListGroup.Item>
            }) : <div></div>}
        </ListGroup>

    );

}

