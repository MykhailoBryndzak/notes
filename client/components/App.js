import React from 'react';

import NoteStore from '../stores/NoteStore';
import NoteActions from '../actions/NoteActions';
import './App.less';

import NoteGrid from './NoteGrid';
import NoteEditor from './NoteEditor';

function getStateFromFlux() {
    return {
        isLoading: NoteStore.isLoading(),
        notes: NoteStore.getNotes()
    }
}

const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        NoteActions.loadNotes();
    },

    componentDidMount() {
        NoteStore.addChangeListener(this._onChange)
    },

    componentWillUnmount() {
        NoteStore.removeChangeListener(this._onChage)
    },

    handleNoteAdd(data) {
        NoteActions.createNote(data);
    },
    handleNoteDelete(note) {
        NoteActions.deleteNote(note.id);
    },

    render() {
        return (
            <div className="App">
                <h2 className="App__header">Notes App</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NoteGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        );
    },
    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;





