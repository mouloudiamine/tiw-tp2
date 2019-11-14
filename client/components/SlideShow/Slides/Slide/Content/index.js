import React from "react";
import {Text} from "./Text";
import {Image} from "./Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export class Content extends React.Component {

    render() {
        return  (
            <Col xs={12}>
                <Row >
                    <Text />
                    <Image />
                </Row>
            </Col>
        );
    }

}
