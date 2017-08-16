import React from 'react';
import {router,Link} from 'react-router';
import classNames from 'classnames';
import Button from '../components/button/button';
import Layer from   '../components/layer/layer';
import Dialog from   '../components/dialog/dialog'
class myBt extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.context.router;
    this.testClick = this.testClick.bind(this);
  }
  testClick() {
    this.context.router.push({ pathname: '/button/6', query: { name: 'dog',age:2}});
  }
  render() {
    return (
      <div>
        <div>
         <h1><Link to='/'>跳到根目录</Link></h1>
         <h1><Link to='/button'>本页</Link></h1>
         <h1><Link to='/button/3'>第三个点击</Link></h1>
         <h1><Link to={{ pathname: '/button/4', query: { name: 'big',age:1}}}>第四个点击</Link></h1>
         <h1><Link to='/button/5'>重定向到轮播</Link></h1>
         <Button type="warn" onClick={this.testClick}>按钮事件跳转</Button>
          <Button type="primary" disabled>点击是没有用的</Button>  
        </div>
        {this.props.children}  
      </div>
    );
  }
};

myBt.contextTypes = {
    router: Object
};
export default myBt;