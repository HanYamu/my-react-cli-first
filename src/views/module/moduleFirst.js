import React, { Component } from 'react';
import {UiHead, UiContainer, UiLayout} from '../../components/uiComponents/uiComponents';
import "./module.less"

class ModuleFirst extends Component {
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
        <UiHead headerOptions={{title: "模块1"}}></UiHead>
        <UiContainer>
          <div className="itemTo" onClick={this.routerTo.bind(this, "/module2")} >To Module2</div>
          <div className="itemTo" onClick={this.routerTo.bind(this, "/module3")} >To Module3</div>
          <div className="funcBtn" >功能按钮</div>
          <img className="imgClass" src={require("../../assets/img/loading-zqq.png")} alt=""/>
        </UiContainer>
      </UiLayout>
    )
  }
}

export default ModuleFirst