import React, { Component } from 'react';
import './Button.css';
import Collapse from './../../icons/Collapse';

class CollapseButton extends Component{

    render(){
        return <div className='button-outer'>
            <Collapse className='button'/>
        </div>
    }
}

export default CollapseButton;