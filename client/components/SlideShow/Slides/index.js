import React from 'react';
import Container from "react-bootstrap/Container";
import {slide as Slide} from "./Slide";
import {connect} from "react-redux";
import {setSlide} from "../../../redux/actions";
import {Toolbar } from "./Toolbar";


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

export class Slides extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(
            parseInt(prevProps.match.params.index) === parseInt(this.props.match.params.index)
            && prevProps.index !== this.props.index
            && parseInt(this.props.match.params.index) !== this.props.index
        )
            this.props.history.push(`/${this.props.mode}/${this.props.index}`);

        if(
            parseInt(prevProps.match.params.index) !== parseInt(this.props.match.params.index)
            && prevProps.index === this.props.index
        )
            this.props.setSlide(parseInt(this.props.match.params.index) );


    }

    render() {
        let slides =  this.props.slides;
        let index  = this.props.index - 1;
        return  (
            <Container fluid={true} className="h-100">
                <Slide slide={slides[index]} />
                <Toolbar />
            </Container>
        );
    }
}

export const slides = connect(mapStateToProps, mapDispatchToProps)(Slides);
