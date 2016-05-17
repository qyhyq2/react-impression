import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * CardHeader组件.
 */
export default class CardHeader extends Component{
    //props校验
    static propTypes = {
        //自定义样式
        className: React.PropTypes.string,
    }
    //渲染
    render(){
        let { className, children } = this.props;

        return(
           <div className={classnames('card-header', className)}>
                {children}
           </div>
        );
    }
}