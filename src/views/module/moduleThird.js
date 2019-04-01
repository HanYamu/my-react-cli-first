import React, { Component } from 'react';
import {UiHead, UiContainer, UiLayout} from '../../components/uiComponents/uiComponents';
import "./module.less"

class ModuleThird extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  routerTo(path) {
    this.props.history.push(path)
  }
  
  render(){
    return (
      <UiLayout> 
        <UiHead headerOptions={{title: "模块3"}}></UiHead>
        <UiContainer>
          <div className="itemTo" onClick={this.routerTo.bind(this, "/module1")} >To Module1</div>
          <div className="itemTo" onClick={this.routerTo.bind(this, "/module2")} >To Module2</div>
          <div className="funcBtn" >功能按钮</div>
          <img className="imgClass" src={require("../../assets/img/loading-zqq.png")} alt=""/>
        </UiContainer>
      </UiLayout>
    )
  }
}

export default ModuleThird