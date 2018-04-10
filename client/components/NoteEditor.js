import React from 'react';

import './NoteEditor.less'
import ColorPiker from './ColorPiker';

const NoteEditor = React.createClass({
    getInitialState() {
      return {
          title: '',
          text: '',
          color: '#fff'
      };
    },

    handleTextChange(event) {
        this.setState({text: event.target.value});
    },
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    },
    handleColorChange(color) {
        this.setState({color});
    },

    handleNoteAdd() {
      const newNote = {
          title: this.state.title,
          text: this.state.text,
          color: this.state.color
      };

      this.props.onNoteAdd(newNote);
      this.setState({text: '', title: '', color: '#fff'})
    },

    render() {
        return (
            <div className="NoteEditor">
                <input
                    type="text"
                    className="NoteEditor__title"
                    placeholder="Enter Title"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder="Enter Note Text"
                    rows={5}
                    className="NoteEditor__text"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="NoteEditor__footer">

                    <ColorPiker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button
                        className="NoteEditor__button"
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        )
    }
});

export default NoteEditor;




