import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
class Layer extends  React.Component{
    constructor(props){
        super(props);

        this.state={
          opacity:0,
        }
        this.closeAlert =this.closeAlert.bind(this);
    }
    componentDidMount(){
        let autoTime = setInterval(()=>{
          this.setState({
            opacity: this.state.opacity +0.1
          });
          if(this.state.opacity>1){
            this.setState({
              opacity: 1
            })
            clearInterval(autoTime);
            if(this.props.fade){
              setTimeout(()=>{
                let autoTimeEnd = setInterval(()=>{
                  this.setState({
                    opacity: this.state.opacity-0.1
                  });
                  if(this.state.opacity<0){
                    this.setState({
                      opacity: 0
                    });
                    clearInterval(autoTimeEnd);
                    document.body.removeChild(document.getElementById.parentID);
                  }
                },this.props.timeout)
              },600)
            }
          }
        },this.props.timeout)
    };
    closeAlert(){
      let autoTimeEnd = setInterval(()=>{
        this.setState({
           opacity: this.state.opacity-0.1
        });
          if(this.state.opacity<0){
            this.setState({
              opacity:0 
            })
            clearInterval(autoTimeEnd);
            document.body.removeChild(document.getElementById(this.props.parentID));
          }
      },this.props.timeout)
    }
    render(){
     let {opacity}=this.state;
      return(
        <div className="modlouter" ref="msgmodal" style={{opacity:opacity}}>
          <div>
            <span onclick={this.closeAlert}></span>
            <p>{this.props.msg}</p>
          </div>
        </div>
      )
    }
}
const Alert =class{
  static showMsg(item){
    let parentDOM = document.createElement("div");
    let ParentID = parseInt(Math.random()*10).toString();
    parentDOM.id = parentID;
    document.body.appendChild(parentDOM);
    ReactDom.render(
      <AlertBox {...item} parentID={parentID}/>,
      document.getElementById(parentID)
    );
  }
};
export default Layer;