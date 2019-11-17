import React, {Fragment} from "react";
import {connect} from "react-redux";
import {addDrawPoints, addSlide, resetDrawPoints, setSlide} from "../../../../redux/actions";

import {withRouter} from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";



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
    render() {
        let nvSlide = {type: 'content', title: 'Ajouter un titre ', text: "Ajouter un text", visible: true, notes: "Ajouter des notes ",items :[]};
        let index = this.props.index > this.props.slides.length ? this.props.slides.length  : (this.props.index < 1 ? 1 : this.props.index)
        return  (
            <div className={"m-20"}>
                <Row className="h-25">
                    <Fragment>
                        <p>page : {this.props.index} / {this.props.slides.length} </p>
                        <ButtonGroup>
                            <Button variant="success" onClick={() => this.props.setSlide(index-1)}>Précedent</Button>
                            <Button variant="success" onClick={() => this.props.setSlide(index+1)}>Next</Button>
                            <Button variant="success"  onClick={() => this.props.addSlide(nvSlide, index)} >Ajouter un slide</Button>
                            <Button variant="success" onClick={() => this.props.resetPoints()}>Réinitialiser</Button>
                        </ButtonGroup>
                    </Fragment>
                </Row>
            </div>

        );
    }
}

export const Toolbar = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));
