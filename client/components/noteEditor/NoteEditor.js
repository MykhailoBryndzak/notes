import React from 'react';

import './NoteEditor.less'
import ColorPiker from '../colorPiker/ColorPiker';

const initialNote = {
    title: '',
    text: '',
    color: '#fff',
    isLongTerm: false
}

const NoteEditor = React.createClass({
    getInitialState() {
        return initialNote
    },

    handleTextChange(event) {
        this.setState({text: event.target.value});
    },
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    },
    handleIsLongTermChange(event) {
        this.setState({isLongTerm: event.target.checked});
    },
    handleColorChange(color) {
        this.setState({color});
    },

    handleNoteAdd() {
      const newNote = {
          title: this.state.title,
          text: this.state.text,
          color: this.state.color,
          isLongTerm: this.state.isLongTerm
      };

      this.props.onNoteAdd(newNote);

      this.setState(initialNote);
      document.getElementById('NoteEditor__isLongTerm').checked = false;
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
                <label className='NoteEditor__isLongTerm'>
                    Long term?
                    <input
                        type='checkbox'
                        id='NoteEditor__isLongTerm'
                        title='Is it long term task?'
                        onChange={this.handleIsLongTermChange}
                    />
                </label>
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





