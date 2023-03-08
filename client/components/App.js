import React from 'react';

import NoteStore from '../stores/NoteStore';
import NoteActions from '../actions/NoteActions';
import './App.less';

import NoteGridLongTerm from './noteGridLongTerm/NoteGridLongTerm';
import NoteGridShortTerm from './noteGridShortTerm/NoteGridShortTerm';
import NoteEditor from './noteEditor/NoteEditor';

function getStateFromFlux() {
    return {
        isLoading: NoteStore.isLoading(),
        notes: NoteStore.getNotes(),
        longTermTasks: NoteStore.getLongTermTasks(),
        shortTermTasks: NoteStore.getShortTermTasks()
    }
}

export default class App extends React.Component {
    state = getStateFromFlux();
    
    componentWillMount() {
        NoteActions.loadNotes();
    }
    componentDidMount() {
        NoteStore.addChangeListener(this._onChange)
    }
    componentWillUnmount() {
        NoteStore.removeChangeListener(this._onChage)
    }
    handleNoteAdd(data) {
        NoteActions.createNote(data);
    }
    handleNoteUpdate(data, spendTime) {
        data.spendTime = spendTime;
        NoteActions.updateNote(data);
    }
    handleNoteDelete(note) {
        NoteActions.deleteNote(note.id);
    }

    render() {
        return (
            <div className="App">
                <h2 className="App__header">Notes App</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>

                <NoteGridShortTerm
                    longTermTasks={this.state?.longTermTasks}
                    shortTermTasks={this.state?.shortTermTasks}
                    onNoteDelete={this.handleNoteDelete}
                    onNoteUpdate={this.handleNoteUpdate}
                />
                <NoteGridLongTerm
                    longTermTasks={this.state?.longTermTasks}
                    shortTermTasks={this.state?.shortTermTasks}
                    onNoteDelete={this.handleNoteDelete}
                    onNoteUpdate={this.handleNoteUpdate}
                />
            </div>
        );
    }
    _onChange = () => {
        this.setState(getStateFromFlux());
    }
};






