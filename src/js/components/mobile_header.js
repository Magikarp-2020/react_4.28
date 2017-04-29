/**
 * Created by lichao on 2017/4/29.
 */
import React, {Component} from 'react';
export default class MobileHeader extends Component {
    render() {
        return (
            <div id="mobileheader">
                <header className="logo">
                    <img src={require('images/logo.svg')} alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    }
}

// ReactDOM.render(<Index/>);
