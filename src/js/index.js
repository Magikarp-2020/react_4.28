/**
 * Created by lichao on 2017/4/28.
 */

import React, {Component} from 'react';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';

export default class Index extends Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <PCIndex/>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    }
}

// ReactDOM.render(<Index/>);
