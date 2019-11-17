import React from 'react';
import Form from "react-bootstrap/Form";

export default class Notes extends React.Component {
    render() {
        return(
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control  as="textarea"  placeholder={"Ajouter des commentaires"} rows="3" />
                </Form.Group>
            </Form>
        )
    }
}
