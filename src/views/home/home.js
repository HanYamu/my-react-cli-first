import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/action';
import {UiHead, UiContainer, UiLayout} from '../../components/uiComponents/uiComponents';
import "./home.less"

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {}
  }
  routerTo(path) {
    this.props.dispatch(actions.addTodo(path))
    console.log(this.props.state)
    this.props.history.push(path)
  }
  componentDidMount() {
    console.log(this.props)
    console.log(process)
    // console.log(this.props.dispatch)
    // this.props.actionsOne("cacdwcdascd")
  }
  
  render(){
    return (
      <UiLayout> 
        <UiHead headerOptions={{title: "首页"}}></UiHead>
        <UiContainer>
          <div className="itemTo" onClick={this.routerTo.bind(this, "/module1")}>To Module1</div>
          <div className="itemTo" onClick={this.routerTo.bind(this, "/module2")}>To Module2</div>
          <div className="itemTo" onClick={this.routerTo.bind(this, "/module3")}>To Module3</div>
          <img src={require("../../assets/img/loading-zqq.png")} alt=""/>
        </UiContainer>
      </UiLayout>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
    // actionsOne: (prams) => {
    //   dispatch(actions.addTodo(prams))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);