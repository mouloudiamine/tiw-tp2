import React, {Fragment} from "react";
import {connect} from "react-redux";
import {addDrawPoints, addSlide, resetDrawPoints, setSlide} from "../../../../redux/actions";
import {withRouter} from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";



const mapStateToProps = (state) => {
    return {
        mode: state.mode,
        index: state.index,
        slides: state.slides
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addSlide: (slide, pos) => dispatch(addSlide(slide, pos)),
        addPoints: (x, y, drag) => dispatch(addDrawPoints(x, y, drag)),
        resetPoints: () => dispatch(resetDrawPoints()),
        setSlide: (index) => dispatch(setSlide(index))

    }
};

class ToolBar extends React.Component {


    constructor(props, context) {
        super(props, context);
    }

    render() {
        let index = this.props.index > this.props.slides.length ? this.props.slides.length  : (this.props.index < 1 ? 1 : this.props.index)
        let nvSlide = {type: 'content', title: 'Ajouter un titre ', text: "Ajouter un text", visible: true, notes: "Ajouter des notes ",items :[]};
        return  (
                        <Row>
                            <Col xs={4}>
                                <Row className="justify-content-start">
                                    <ButtonGroup>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                                Edition
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item  onClick={() => this.props.addSlide(nvSlide, index)} >
                                                    Ajouter  <i className="material-icons left">add</i>
                                                </Dropdown.Item>
                                                <Dropdown.Item  onClick={() => this.props.addSlide(nvSlide, index)}>
                                                    Supprmier <i className="material-icons left">delete_forever</i>
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => this.props.addSlide(nvSlide, index)}>
                                                    Modifier <i className="material-icons left">edit</i>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                                Stylet
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item  onClick={() => this.props.resetPoints()} >
                                                    Réinitialiser le dession <i className="material-icons left">refresh</i>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </ButtonGroup>
                                </Row>
                            </Col>
                            <Col xs={4}>
                                <Row className=" page justify-content-center">
                                    <ButtonGroup>
                                        <Button variant={"dark"} onClick={() => this.props.setSlide(index-1)}>
                                            <i className="material-icons left">keyboard_arrow_left</i>
                                        </Button>
                                        <Button variant={"dark"} className="waves-effect waves-light btn text-white" >{this.props.index} / {this.props.slides.length}</Button>
                                        <Button variant={"dark"}   onClick={() => this.props.setSlide(index+1)}><i
                                            className="material-icons left">keyboard_arrow_right</i></Button>
                                    </ButtonGroup>
                                </Row>
                            </Col>
                            <Col xs={4}>
                                <Row className="justify-content-end">
                                    <ButtonGroup>
                                    </ButtonGroup>
                                </Row>
                            </Col>
                        </Row>
        );
    }
}

export const Toolbar = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));
