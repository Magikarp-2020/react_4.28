/**
 * Created by lichao on 2017/4/28.
 */

import React, {Component} from 'react';
import { Input } from 'antd';
import { BackTop } from 'antd';

export default class BodyIndex extends Component {
    render() {
        return (
            <div>
                <Input />
                <BackTop/>
                主题部分
            </div>
        )
    }
}