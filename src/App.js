import React, { Component } from 'react';
import { MarkdownPreview } from 'react-marked-markdown';
import './App.css';

const placeholder='# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here\'s some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let\'s not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value: placeholder,
      editorMaximized: false,
      previewerMaximized: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.maximizeEditor = this.maximizeEditor.bind(this);
    this.maximizePreviewer = this.maximizePreviewer.bind(this);
  }
  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }
  maximizeEditor(){
    if(this.state.editorMaximized){
      this.setState({
        editorMaximized: false
      });
    } else{
      this.setState({
        editorMaximized: true
      });
    }
  }
  maximizePreviewer(){
    if(this.state.previewerMaximized){
      this.setState({
        previewerMaximized: false
      });
    } else{
      this.setState({
        previewerMaximized: true
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div id="editor" className={(this.state.editorMaximized ? 'ed-max ' : '')+(this.state.previewerMaximized ? 'hide' : '')}>
          <div id="editor-titlebar" className="titlebar">
            <span><i className="fa fa-edit fa-pull-left"></i>Editor</span><i className={this.state.editorMaximized ? "fas fa-window-minimize window-control" : "fas fa-expand-arrows-alt window-control"} onClick={this.maximizeEditor}></i>
          </div>
          <div id="editor-content">
            <textarea onChange={this.handleChange} value={this.state.value}/>
          </div>
        </div>
        <div id="previewer" className={(this.state.editorMaximized ? 'hide ' : '')+(this.state.previewerMaximized ? 'prev-max' : '')}>
          <div id="previewer-titlebar" className="titlebar">
          <span><i className="far fa-file-alt fa-pull-left"></i>Previewer</span><i className={this.state.previewerMaximized ? "fas fa-window-minimize window-control" : "fas fa-expand-arrows-alt window-control"} onClick={this.maximizePreviewer}></i>
          </div>
          <div id="previewer-content">
            <MarkdownPreview value={ this.state.value }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
