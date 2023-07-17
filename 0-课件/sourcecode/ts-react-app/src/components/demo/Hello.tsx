import React from 'react';
import { Button } from 'antd';

interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}

const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>

/**
 * 不建议使用React.FC,没有明显的好处，后续有可能被官方弃用
 * React.FC类型的函数组件自带children属性，但很多时候并不需要，在使用上可能造成困惑；
 * 无法使用defaultProps的默认值。本身函数组件使用defaultProps的情况也比较少。实际可以使用es6语法，给参数赋予初始默认值。
 * 加上React.FC和不加 没有区别，还会造成多写代码。
 */
// const Hello: React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName,
//     children
// }) => <Button>Hello {name}</Button>

Hello.defaultProps = {
    firstName: '',
    lastName: ''
}

export default Hello;
