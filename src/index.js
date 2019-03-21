import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//1.通过元素渲染生成页面内容
const element = <h1>example1</h1>
ReactDOM.render(element, document.getElementById('example1'));

//2.修改页面内容需要重新渲染，这里通过定时任务，每隔1秒渲染一次对象来实现页面元素的更新
function  tick() {
    const element = (
        <div>
            <h1>example2</h1>
            <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('example2'));
}
setInterval(tick, 1000);

//3.将需要展示的部分封装，这里将显示始终的部分封装成Clock
function Clock(props) {
    return (
        <div>
            <h1>example3</h1>
            <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}
function tick2() {
    ReactDOM.render(<Clock date={new Date()} />, document.getElementById('example3'));
}
setInterval(tick2, 2000);

//4.通过函数创建Component类来封装要展示的元素
class Clock2 extends React.Component{
    render() {
        return (
            <div>
                <h1>example4</h1>
                <h2>现在是{this.props.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
function tick3() {
    ReactDOM.render(
        <Clock2 date={new Date()}/>, document.getElementById('example4')
    );
}
setInterval(tick3, 3000)

//5.使用多层props来传值
var myStyle = {color:'red'}
class Name extends React.Component{
    render() {
        return <h1 style={myStyle}>网站名称：{this.props.name}</h1>;
    }
}
class Url extends React.Component{
    render() {
        return <h1>网站地址：{this.props.url}</h1>;
    }
}
class Nickname extends React.Component{
    render() {
        return <h1>网站别名：{this.props.nickname}</h1>;
    }
}
function Website(props) {
    return (
        <div>
            <Name name={props.name}/>
            <Url url={props.url}/>
            <Nickname nickname={props.nickname}/>
        </div>
    );
}
//多个属性的传入用空格符隔开
ReactDOM.render(
    <Website name={"xc's app"} url={"http:www.xuec.com"} nickname={"allen"}/>,
    document.getElementById('example5')
);
