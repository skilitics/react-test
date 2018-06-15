import React, { Component } from 'react';
import './MediaControl.css';
import PlayButton from './MediaControlComponents/Buttons/PlayButton';
import ClosedCaptionsButton from './MediaControlComponents/Buttons/ClosedCaptionsButton';
import ExpandButton from './MediaControlComponents/Buttons/ExpandButton';
import PauseButton from './MediaControlComponents/Buttons/PauseButton';
import CollapseButton from './MediaControlComponents/Buttons/CollapseButton';

class MediaControl extends Component{

    render(){
        return <div className="media-control">
            <PlayButton />
            <ClosedCaptionsButton/>
            <ExpandButton />
            <PauseButton />
            <CollapseButton />
        </div>
    }
}

export default MediaControl;
