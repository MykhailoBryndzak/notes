import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _notes = [];
let _loadingError = null;
let _isLoading = true;

function formatNote(note) {
    return {
        id: note._id,
        title: note?.title,
        text: note.text,
        color: note.color || '#fff',
        createdAt: note.createAt,
        spendTime: note.spendTime,
        isLongTerm: note.isLongTerm
    };
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },
    getNotes() {
        return _notes;
    },
    getLongTermTasks() {
        return _notes.filter(e => e.isLongTerm === true)
    },
    getShortTermTasks() {
        return _notes.filter(e => e.isLongTerm === false)
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.type) {
        case AppConstants.LOAD_NOTES_REQUEST: {
            _isLoading = true;

            TasksStore.emitChange();
            break;
        }
        case AppConstants.LOAD_NOTES_SUCCESS: {
            _isLoading = false;

            _notes = action.notes?.map(formatNote);
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }
        case AppConstants.LOAD_NOTES_FAIL: {
            _loadingError = action.error;

            console.error(_loadingError);

            TasksStore.emitChange();
            break;
        }
        default: {
            console.warn('No Such Handler!!!');
        }
    }
});

export default TasksStore;
