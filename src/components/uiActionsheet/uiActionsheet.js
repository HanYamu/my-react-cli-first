/**
 * Created by hanyamu(song que / zqq) on 2018/10/31. Contains 3 components: UiHead 、 UiContainer 、 UiLayout
 */
import React, { Component } from 'react';
import './uiActionsheet.less';

class UiActionsheet extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            componentExists: this.props.show,
            zqquiActionsheetTimer: null,
            headTitle: {
                left: "cancel",
                title: "Actionsheet",
                right: "close"
            }
        }
        this.zqquiActionsheetMaskRef = React.createRef()
        this.zqqUiActionsheetContRef = React.createRef()
        this.zqquiActionsheetHeadRef = React.createRef()
    }
    componentDidMount() {
        /** 该判断用于添加组件头部的class */
        if (this.props.className && this.props.show) {
            this.zqquiActionsheetHeadRef.current.classList.add(this.props.className);
        }
    }
    componentWillUnmount() {
        /** 卸载组件的时候清除掉action组件,清除计时器 */
        clearTimeout(this.state.zqquiActionsheetTimer);
    }
    hideUiActionsheet() {
        /** class控制的动画效果 */
        this.zqquiActionsheetMaskRef.current.classList.remove("zqqui_actionsheet_mask_block");
        this.zqqUiActionsheetContRef.current.classList.remove("zqqui_actionsheet_inner_block");
        this.zqquiActionsheetMaskRef.current.classList.add("zqqui_actionsheet_mask_none");
        this.zqqUiActionsheetContRef.current.classList.add("zqqui_actionsheet_inner_none");
        clearTimeout(this.state.zqquiActionsheetTimer);
        this.state.zqquiActionsheetTimer = setTimeout(()=>{
            /** 给父组件传递消息，父组件接收到消息后更新this.props.show以此销毁actionsheet组件 */
            this.props.onClose(false)
        },210)
    }
    render() {
        return (
            this.props.show ? 
            <div className="zqqui_actionsheet_outer">
                <div className="zqqui_actionsheet_mask zqqui_actionsheet_mask_block" ref={this.zqquiActionsheetMaskRef} onClick={this.hideUiActionsheet.bind(this)}></div>
                <div className="zqqui_actionsheet_container">
                    <div className="zqqui_actionsheet_inner zqqui_actionsheet_inner_block" ref={this.zqqUiActionsheetContRef}>
                        <div className="zqqui_actionsheet_title" ref={this.zqquiActionsheetHeadRef}>
                            <div className="zqqui_actionsheet_title_left">{this.props.titleMessage && this.props.titleMessage.left ? this.props.titleMessage.left : this.state.headTitle.left}</div>
                            <div className="zqqui_actionsheet_title_middle">{this.props.titleMessage && this.props.titleMessage.title ? this.props.titleMessage.title : this.state.headTitle.title}</div>
                            <div className="zqqui_actionsheet_title_right" onClick={this.hideUiActionsheet.bind(this)}>{this.props.titleMessage && this.props.titleMessage.right ? this.props.titleMessage.right : this.state.headTitle.right}</div>
                        </div>
                        <div className="zqqui_actionsheet_content">{this.props.children}</div>
                    </div>
                </div>
            </div> : null
        )
    }
}

export default UiActionsheet