import React from "react";
import Col from "react-bootstrap/Col";
// import 'bootstrap/dist/css/bootstrap.min.css';

export class Titre extends React.Component {

    render() {
        let title = this.props.title;
        return  (
            <Col xs={6} className="text-center" >
                <h2>{title}</h2>
            </Col>
        );
    }
}
