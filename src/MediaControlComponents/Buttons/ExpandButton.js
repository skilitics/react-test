import React, { Component } from 'react';
import './Button.css';
import Expand from './../../icons/Expand';

class ExpandButton extends Component{

    render(){
        return <div className='button-outer'>
                    <Expand className='button'/>
                </div>
    }
}

export default ExpandButton;