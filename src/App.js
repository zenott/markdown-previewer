import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="editor">
          <div id="editor-titlebar" className="titlebar">
            <span>Editor</span>
          </div>
          <div id="editor-content">
            <textarea />
          </div>
        </div>
        <div id="previewer">
          <div id="previewer-titlebar" className="titlebar">
          <span>Previewer</span>
          </div>
          <div id="previewer-content">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
