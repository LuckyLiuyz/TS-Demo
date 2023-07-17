import React, { Component } from 'react';
import { Button } from 'antd';

// 类的属性的类型
interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string;
}

// 类的状态类型
interface HelloState {
    count: number
}

/**
 * class Component<P = {}, S = {}, SS = any>
 * 1、P = {} 类的属性的类型
 * 2、S = {} 类的状态的类型
 * 3、SS = any 不用关注
 */
class HelloClass extends Component<Greeting, HelloState> {
    state: HelloState = {
        count: 0
    }
    static defaultProps = {
        firstName: '',
        lastName: ''
    }
    render() {
        return (
            <>
                <p>你点击了 {this.state.count} 次</p>
                <Button onClick={() => {this.setState({count: this.state.count + 1})}}>
                    Hello {this.props.name}
                </Button>
            </>
        )
    }
}

export default HelloClass;
