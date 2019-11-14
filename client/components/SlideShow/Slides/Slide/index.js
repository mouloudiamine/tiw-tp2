import React from "react";
import {Content} from "./Content";
import {Titre} from "./Titre";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        index: state.index,
        slide: state.slides[state.index - 1]
    }
};
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
export const slide = connect(mapStateToProps, null)(Slide);
