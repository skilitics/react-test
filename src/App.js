import React, { Component } from 'react';
import * as Icons from './icons'
import preview from './preview.png';
import './App.css';
import MediaControl from './MediaControl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Media Controls</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/MediaControl.js</code> and save to reload.
        </p>

        <figure className="App-preview">
          <img src={preview} alt="Media controls preview" width="100%" />
          <figcaption className="App-previewCaption">Preview mockup. <a href="https://www.figma.com/file/LLzlPiHoK8S9U6nBVd9btY3W/React-Test">More details on Figma</a></figcaption>
        </figure>

        <div className="App-artboard">
          <MediaControl />
        </div>

        <ul className="App-iconList">
          <li className="App-iconItem"><Icons.ClosedCaptions width={28} /></li>
          <li className="App-iconItem"><Icons.Collapse width={28} /></li>
          <li className="App-iconItem"><Icons.Expand width={28} /></li>
          <li className="App-iconItem"><Icons.Pause width={28} /></li>
          <li className="App-iconItem"><Icons.Play width={28} /></li>
        </ul>
      </div>
    );
  }
}

export default App;
