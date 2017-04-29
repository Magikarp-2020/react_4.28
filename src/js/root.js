/**
 * Created by lichao on 2017/4/29.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import {Router, Route, hashHistory } from 'react-router';

export default class Root extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Index} path="/"/>
            </Router>
        );
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
