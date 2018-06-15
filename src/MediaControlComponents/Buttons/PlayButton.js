import React, { Component } from 'react';
import './Button.css';
import PlayIcon from './../../icons/Play';

class PlayButton extends Component{

    render(){
        return <div className='button-outer'>
                    <PlayIcon className='button'/>
                </div>
    }
}

export default PlayButton;