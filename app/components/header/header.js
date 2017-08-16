import React from 'react'
import './styles.css'
class Header extends React.Component {
  constructor(props){
      super(props);
      this.state ={
          //定义状态
      }
  }
    conponentWillMount(){
        //do something   
        // 渲染dom之前发生的事件
    }
    componentDidMount(){
        //do something
        //渲染dom之后发生的事件
    }
    render(){
        return (
          <header>
          <nav>
           <h1>乐培生个人管理系统</h1>
           <div>
           <span>
             {this.props.userName}
             <sub onClick={this.props.registeLogin}>退出登录</sub>
           </span>
           </div>
          </nav>
          </header>
        )
    }
}

export default Header;