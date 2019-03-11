/**
 * Created by hanyamu(song que / zqq) on 2018/10/31. Contains 3 components: UiHead 、 UiContainer 、 UiLayout
 */
import React, { Component } from 'react';
import './uiComponents.less';
class UiHead extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            headerOptions:{
                left: "",
                title: "titile",
                right: ""
            }
        }
    }
    render(){
        return (
            <div className="ui_head" ref="uiHeaderRef">
                <div className="ui_head_left" onClick={this.leftClick.bind(this)}>{this.props.headerOptions && this.props.headerOptions.left ? this.props.headerOptions.left : <img src={require("../../assets/img/back-zqq.png")} alt=""/>}</div>
                <div className="ui_head_middle">{this.props.headerOptions && this.props.headerOptions.title ? this.props.headerOptions.title : this.state.headerOptions.title}</div>
                <div className="ui_head_right" onClick={this.rightClick.bind(this)}>{this.props.headerOptions && this.props.headerOptions.right ? this.props.headerOptions.right : this.state.headerOptions.right}</div>
            </div>
        )
    }
    componentDidMount() {
        this.setDefaultHead();
    }
    setDefaultHead() {
        /** 该方法用于设置头部组件的默认值，如果父组件有传入更改则采用父组件的值 
         * left为头部左边内容，title为头部中间标题内容，right为头部右边内容
        */
        /** 该判断用于添加头部组件的class */
        if(this.props.className) {
            this.refs.uiHeaderRef.classList.add(this.props.className)
        }
    }
    leftClick() {
        /** 该方法用于判断是否有传入点击头部左边icon的事件，有则用之，无则默认返回 */
        if(this.props.leftClick) {
            this.props.leftClick();
        } else {
            window.history.go(-1);
        }
    }
    rightClick() {
        /** 该方法用于判断是否有传入点击头部右边icon的事件，有则用之，无默认事件 */
        if(this.props.rightClick) {
            this.props.rightClick();
        }
    }
}

class UiContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }
    render(){
        /** this.props.children放在内部使得在其他页面调用该组件时可以向里面插入html标签，
         * 需要注意，this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;
         * 如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array 。
         * */
        return (
            <div className="ui_container" ref="uiContainer">{this.props.children}</div>
        )
    }
    componentDidMount() {
        /** 该判断用于添加内容组件的class */
        if(this.props.className) {
            this.refs.uiContainer.classList.add(this.props.className)
        }
    }
}

class UiLayout extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }
    render(){
        /** this.props.children放在内部使得在其他页面调用该组件时可以向里面插入html标签，
         * 需要注意，this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;
         * 如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array 。
         * */
        return (
            <div className="ui_layout" ref="uiLayout">{this.props.children}</div>
        )
    }
    componentDidMount() {
        /** 该判断用于添加外层布局组件的class */
        if(this.props.className) {
            this.refs.uiLayout.classList.add(this.props.className)
        }
    }
}

export {UiHead, UiContainer, UiLayout}