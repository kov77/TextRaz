import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { setText } from './fileInput-reducer';

export const FileInput = () => {
    const dispatch = useDispatch()

    const onSubmit = (event: any) => {

        event.preventDefault();

        const files = event.target.files;
        let reader = new FileReader()

        reader.readAsText(files[0]);

        reader.onload = function() {
            console.log(reader.result);
            dispatch(setText({text: reader.result}))
        };
    }

        return (
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control onChange={onSubmit} type="file"/>
            </Form.Group>
        )



}
