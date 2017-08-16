
import React from 'react';
import "./index.css"
 class  Index  extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{padding:20}}>
       <img src={require("../../components/common/img/indexBg.png")} alt=""/>
       <h1>欢迎来到乐培生个人后台网页</h1>
        <a href="#carousel" style={{marginLeft:20,color: '#ff5100',}}>
          carousel
        </a>
        <a href="#button" style={{marginLeft:20,color:'blue',}}>
          button
        </a>
        <a href="#actionSheet" style={{marginLeft:20,color:'yellow',}}>
          actionSheet
        </a>
      </div>
    );
  }
};
export default Index;