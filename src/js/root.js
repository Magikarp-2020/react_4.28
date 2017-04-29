/**
 * Created by lichao on 2017/4/29.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import bodyIndex from './components/bodyIndex.js';
import {Router, Route, hashHistory } from 'react-router';

export default class Root extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route component={Index} path="/"/>
                <Route component={bodyIndex} path="/a"/>
            </Router>
        );
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
