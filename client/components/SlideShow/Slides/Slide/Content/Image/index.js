import React from "react";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import {Items} from "../Items";

const mapStateToProps = (state) => {
    return {
        index: state.index,
        slides: state.slides
    }
};

export class Image extends React.Component {

    render() {
        return  (
            <Col xs={6}>
                <img width={"100%"} height={"100%"} src={this.props.slides[this.props.index-1].image}  alt={"IMAGE"}/>
            </Col>

        );
    }

}
export const images = connect(mapStateToProps, null)(Image);
