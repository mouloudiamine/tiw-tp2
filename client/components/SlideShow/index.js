import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {slides} from "./Slides";
import {setMode} from "../../redux/actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        setMode: mode => dispatch(setMode(mode))
    }
};
export class SlideShow extends React.Component {
    componentDidMount() {
        this.props.setMode(this.props.mode)
    }

    render() {
        return  (
            <Switch>
                <Route exact path={`/${this.props.mode}/:index`} component={slides}/>
                <Route>
                    <Redirect to={`/${this.props.mode}/1`} />
                </Route>
            </Switch>
        );
    }
}
export const slideshow = connect(null, mapDispatchToProps)(SlideShow);

