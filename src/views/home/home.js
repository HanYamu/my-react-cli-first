import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/action';
import {UiHead, UiContainer, UiLayout} from '../../components/uiComponents/uiComponents';
import UiActionsheet from '../../components/uiActionsheet/uiActionsheet';
import "./home.less"

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showSelectActivity: false
    },
    this.eleRef = React.createRef()
    this.eleRefDiv = React.createRef()
    // this.eleRefDivNone
  }
  routerTo(path) {
    // let dateString = JSON.parse(JSON.stringify(modelObj.onlineTime));
    // if(dateString.split(" ").length > 1) {
    //   message.warning("请先选择CBM上线时间");
    //   return
    // }
    // let dateString = JSON.parse(JSON.stringify(modelObj.onlineTime));
    // let dateStringArrOne = dateString.split(" ")[0];
    // dispatch({
    //   type: `${namespace}/saveData`,
    //   payload: {
    //     parameterName: "新版合同上线时间",
    //     parameterType: "ONLINE_TIME",
    //     termName: "新版合同上线时间",
    //     termType: "ONLINE_TIME",
    //     value: dateStringArrOne + " 00:00"
    //   }
    // })
    // this.props.dispatch(actions.addTodo(path))
    console.log(this.props.state)
    this.props.history.push(path)
  }
  rodomOperate() {
    this.setState({showSelectActivity: true})
    let number = parseInt(Math.random() * 100);
    this.props.actionsBind.addTodo({number})
    // this.props.dispatch(actions.addTodo({number}));
    // console.log(this.props.state)
    console.log(this.eleRefDiv.current)
    console.log(this.eleRefDivNone)
  }
  closeActiveSelect(val) {
    console.log(val)
    this.setState({showSelectActivity: val})
    console.log(val)
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
          <div ref={this.eleRefDiv} className="itemTo" onClick={this.routerTo.bind(this, "/module1")}>To Module1</div>
          <div className="itemTo" onClick={this.routerTo.bind(this, "/module2")}>To Module2</div>
          <div ref={div => this.eleRefDivNone = div} className="itemTo" onClick={this.routerTo.bind(this, "/module3")}>To Module3</div>
          <img ref={this.eleRef} onClick={this.rodomOperate.bind(this)} src={require("../../assets/img/loading-zqq.png")} alt=""/>
        </UiContainer>
        <UiActionsheet className="leaderActionsheet_title" show={this.state.showSelectActivity} onClose={val=>{this.closeActiveSelect(val)}}></UiActionsheet>
      </UiLayout>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      state: state
  }
}

const mapDispatchToProps = (dispatch, getstate) => {
  return {
    // dispatch: dispatch
    actionsBind: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);