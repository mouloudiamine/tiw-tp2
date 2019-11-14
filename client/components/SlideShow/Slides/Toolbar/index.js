import React, {Fragment} from "react";
import {connect} from "react-redux";
import {addSlide, nextSlide, previousSlide} from "../../../../redux/actions";
import {withRouter} from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";



const mapStateToProps = (state) => {
    return {
        index: state.index,
        slides: state.slides
    }
};

const mapDispatchToProps = dispatch => {
    return {
        nextSlide: () => dispatch(nextSlide(true)),
        previousSlide: () => dispatch(previousSlide(true)),
        addSlide: (slide, pos) => dispatch(addSlide(slide, pos))
    }
};

class ToolBar extends React.Component {
    render() {
        let nvSlide = {type: 'content', title: 'Ajouter un titre ', text: "Ajouter un text", visible: true, notes: "Ajouter des notes "};
        return  (
                <Fragment>
                    <p>page : {this.props.index} / {this.props.slides.length} </p>
                    <ButtonGroup>
                        <Button variant="success" onClick={() => this.props.previousSlide()}>Précedent</Button>
                        <Button variant="success" onClick={() => this.props.nextSlide()}>Next</Button>
                        <Button variant="success"  onClick={() => this.props.addSlide(nvSlide, this.props.index)} >Ajouter un slide</Button>
                    </ButtonGroup>

                </Fragment>
        );
    }
}

export const Toolbar = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));
