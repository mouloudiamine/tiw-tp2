import React from "react";
import Col from "react-bootstrap/Col";

export class Image extends React.Component {

    render() {
        return  (
            <Col xs={6}>
                <img src={"https://upload.wikimedia.org/wikipedia/fr/5/51/Logo_Chelsea.svg"}  alt={"image"}/>
            </Col>

        );
    }

}
