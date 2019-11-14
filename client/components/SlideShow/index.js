import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {slides} from "./Slides";

export class SlideShow extends React.Component {
    render() {
        return  (
            <Switch>
                <Route path="/:index" component={slides}/>
                <Route>
                    <Redirect to="/1"/>
                </Route>
            </Switch>
        );
    }
}
