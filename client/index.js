import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {SlideShow} from "./components/SlideShow";
import {Provider} from "react-redux";
import store from "./redux/store";

class Index extends React.Component {
    render() {
        return  (
            <Provider store={store}>
                <Router>
                    <Route path="/" component={SlideShow} />
                </Router>
            </Provider>
        );
    }

}
ReactDOM.render(<Index />, document.getElementById('app'));
