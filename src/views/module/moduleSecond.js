import React, { Component } from 'react';
import {UiHead, UiContainer, UiLayout} from '../../components/uiComponents/uiComponents';
import "./module.less"

// class ModuleSecond extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {}
//   }
//   routerTo(path) {
//     this.props.history.push(path)
//   }
  
//   render(){
//     return (
//       <UiLayout> 
//         <UiHead headerOptions={{title: "模块2"}}></UiHead>
//         <UiContainer>
//           <div className="itemTo" onClick={this.routerTo.bind(this, "/module1")} >To Module1</div>
//           <div className="itemTo" onClick={this.routerTo.bind(this, "/module3")} >To Module3</div>
//           <div className="funcBtn" >功能按钮</div>
//           <img className="imgClass" src={require("../../assets/img/loading-zqq.png")} alt=""/>
//         </UiContainer>
//       </UiLayout>
//     )
//   }
// }

// export default ModuleSecond
const ModuleSecond = (props => {
  <div>{props}</div>
})
export default ModuleSecond
