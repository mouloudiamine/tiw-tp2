import React from "react";
import {Button} from "react-bootstrap";
import {setSlide} from "../../../../../../redux/actions";
import {connect} from "react-redux";
import {Slide} from "../../index";

const mapStateToProps = (state) => {
    return {
        mode : state.mode,
        index: state.index,
        slides: state.slides
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setSlide: (index) => dispatch(setSlide(index))
    }
};

export class AddButton extends React.Component {

    render() {
        return  (
            <form className="form-inline" ref="textForm" >
                <div className="form-group">
                </div>
            </form>

        );
    }

}
export const addButton = connect(mapStateToProps, mapDispatchToProps)(AddButton);
