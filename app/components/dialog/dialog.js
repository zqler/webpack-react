/*
 * @Author:xer
 * @Date: 2017-08-15 16:53:43 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-08-15 17:17:42
 */

import React from "react";
import "./dialog.css"
class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show: true
        };
        this.handleClose=this.handleClose.bind(this)
    }
    componentDidMount() {
    }
    handleClose() {
        let {onClose} = this.props;
        if (onClose){onClose()}
    }
    render() {
        let { width, title , hideCloseBtn } = this.props;
        return (<div className="dialog-wrapper" id={this.props.newId}>
            <div className="over-layer"></div>
            <div className="dialog-mod" style={{width: width + 'px', marginLeft: -(width/2) + 'px'}}>
                <h5>{title}</h5>
                {
                    !hideCloseBtn ?
                        <div className="close" onClick={this.handleClose}></div> : null
                }
                <div className="dialog-content">
                    {this.props.children}
                </div>
            </div>
        </div>);
    }
}
Dialog.propTypes={
    onClose: React.PropTypes.func,
    width: React.PropTypes.any,
    title: React.PropTypes.string
};
export default Dialog

