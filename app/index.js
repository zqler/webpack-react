import React from 'react';
import ReactDOM from 'react-dom';
import MyBt from './views/myBt';
import Carousel from './views/myCarousel';
import ActionSheet from './views/myActionSheet';
import { Router, Route, IndexRoute, browserHistory, hashHistory, Redirect, IndexRedirect} from 'react-router';
// import {BrowserRouter as Router,Route,Link,hashHistory,HashRoute} from 'react-router-dom'
import Index from './views/index/index.js';
import Header from './components/header/header'
import BtDetail from './views/myBtDetail';

class ThisPage extends React.Component {
  constructor(props){
     super(props);
     this.state={
       userName: '',
       isLogin: true,
       permission: null,
     };
      this.registeLogin = this.registeLogin.bind(this);
  }
    registeLogin(){
      this.setState({
        isLogin: false,
      })
    }
    render () {
      // 获取屏幕高度
      // console.log(window.screen.height);
        //渲染子组件 this.props.children
        if(!this.state.isLogin){
          return (
            <div className="mainbox">
               <p  className="relogin">请重新登录</p>
            </div>
          )
        }else{
          return (
          <div className="mainbox">
          <Header userName={'张权'} registeLogin={this.registeLogin}/>
         <div className="bodybox">  
          {this.props.children}
         </div>
          </div>
        );
        }
      
    }
}

const enterTest = () => {
    console.log("进入轮播");
};
ThisPage.contextTypes={
  router:React.PropTypes.object
}
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={ThisPage} >
      {/* 默认根路由 */}
      <IndexRoute component={Index}/>
      {/* 根路由重定向 */}
      {/* <IndexRedirect to="/carousel" /> */}
      {/* 轮播图组件页 */}
      <Route path="/carousel" onEnter={enterTest} component={Carousel}/>
      {/* 按钮跳转及传值测试 */}
      <Route path="/button" component={MyBt}>
        <Redirect from="/button/5" to="/carousel"/>
        {/* path向子页面传值 */}
        <Route path=":id"  component={BtDetail}/>
      </Route>
      {/* 重定向 */}
      {/* <Redirect from="/actionSheet" to="/carousel"/> */}
      {/* 弹出菜单组件 */}
      <Route path="/actionSheet" component={ActionSheet}/>
    </Route>
  </Router>
),
  document.getElementById('content')
);
