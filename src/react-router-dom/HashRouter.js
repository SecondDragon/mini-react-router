import React from 'react';
import { Router } from '../react-router';
import { createHashHistory } from '../history';
/* 
HashRouter的作用就是根据自身的props
的信息创建hash模式的history 对象，然后把history对象传给作为属性传给
Router组件。

Router组件。就把。这个属性进行一些加工，然后传给Context的provider 的value 属性以供
子组件（Route组件，route组件 内部有consumer组件可以用来获取相应的history对象信息。）们进行获取。

*/


class HashRouter extends React.Component {
    constructor(props) {
        super(props);
        this.history = createHashHistory(props)
    }
    render() {
        return (
            <Router history={this.history}>
                {this.props.children}
            </Router>
        )
    }
}
export default HashRouter;