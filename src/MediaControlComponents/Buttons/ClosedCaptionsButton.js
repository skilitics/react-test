import React, { Component } from 'react';
import './Button.css';
import ClosedCaptions from './../../icons/ClosedCaptions';

class ClosedCaptionsButton extends Component{

    render(){
        return <div className='button-outer'>
            <ClosedCaptions className='button' />
            </div>
    }
}

export default ClosedCaptionsButton;