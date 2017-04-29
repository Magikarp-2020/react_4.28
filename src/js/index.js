/**
 * Created by lichao on 2017/4/28.
 */

import React, {Component} from 'react';
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyIndex';

export default class Index extends Component {
    render() {
        return (
            <div>
                <ComponentHeader/>
                <BodyIndex/>
                <ComponentFooter/>
            </div>
        );
    }
}

// ReactDOM.render(<Index/>);
