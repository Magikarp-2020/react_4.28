/**
 * Created by lichao on 2017/4/29.
 */
import React, {Component} from 'react';
import {Row, Col} from 'antd';
export default class PCFooter extends Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}/>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2016 ReactNews. All Right Reserved.
                    </Col>
                    <Col span={2}/>
                </Row>
            </footer>
        );
    }
}

// ReactDOM.render(<Index/>);
