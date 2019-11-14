import React from "react";
import {Content} from "./Content";
import {Titre} from "./Titre";
import Row from "react-bootstrap/Row";

export class Slide extends React.Component {
    render() {
        let type  = this.props.slide.type;
        let title  = this.props.slide.title;
        if(type === "title")
            return (
                <Row className="justify-content-center align-items-center h-75 bg-success text-white" >
                    <Titre title={title} />
                </Row>);
        else
            return  (
                <Row className="justify-content-center align-items-center h-75 bg-success text-white">
                    <Titre title={title} />
                    <Content />
                </Row>
            );
    }
}
