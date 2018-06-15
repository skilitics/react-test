import React, { Component } from 'react';
import './Button.css';
import Pause from './../../icons/Pause';

class PauseButton extends Component{

    render(){
        return <div className='button-outer'>
            <Pause className='button'/>
        </div>
    }
}

export default PauseButton;