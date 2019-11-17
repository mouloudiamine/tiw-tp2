import React from "react";
import {text as Text} from "./Text";
import {items as Items} from "./Items";
import {Image} from "./Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";
import {addItem} from "../../../../../redux/actions";
import {connect} from "react-redux";




const mapStateToProps = (state) => {
    return {
        index: state.index,
        slides: state.slides
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
};

export class Content extends React.Component {

   render() {
       let item ="ana item";
        return  (
            <Col xs={12}>
                <Row>
                    <Col  xs={6}>
                        <Text />
                        <br/>
                        <Items/>
                        <Button onClick={() => this.props.addItem(item)}  variant="danger" className=" btn btn-circle"><i className="fa fa-check"/>+</Button>
                    </Col>
                    <Col  xs={6}>
                        <Image />
                    </Col>
                </Row>
            </Col>
        );
    }
}
export const content = connect(mapStateToProps, mapDispatchToProps)(Content);
