import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux';
import { setText, setTextArr } from './fileInput-reducer';
import {AppStateType} from "../../App/store";

export const FileInput = () => {
    const dispatch = useDispatch()
    const textArr = useSelector((state: AppStateType) => state.fileInput.textArr)

    const onSubmit = (event: any) => {

        event.preventDefault();

        const files = event.target.files;
        let reader = new FileReader()

        reader.readAsText(files[0]);

        reader.onload = function() {
            if(reader.result) {
                dispatch(setText({text: reader.result}))
                // @ts-ignore
                dispatch(setTextArr({textArr: reader.result.split('.')}))
            }
        };
    }

        return (
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Please upload your text file</Form.Label>
                <Form.Control style={{width: "300px"}} onChange={onSubmit} type="file"/>
            </Form.Group>
        )



}
