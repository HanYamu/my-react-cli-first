import React, { Component } from 'react';
import {UiHead, UiContainer, UiLayout} from '../../components/uiComponents/uiComponents';
import "./home.less"

class TestOne extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  render(){
    return (
      <UiLayout> 
        <UiHead></UiHead>
        <UiContainer>
          <div className="testname">test22222</div>
          <div className="testBg">to 111111</div>
          <img src={require("../../assets/img/loading-zqq.png")} alt=""/>
        </UiContainer>
      </UiLayout>
    )
  }
  toTest() {
      console.log(this.props.history)
      this.props.history.push("/testo")
  }
  componentDidMount() {}
}

export default TestOne