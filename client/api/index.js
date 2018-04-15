import axios from 'axios';

import { apiPrefix } from '../../etc/configs.json';

export default {
    listNotes() {
        return axios.get(`${apiPrefix}/notes`);
    },
    createNote(data) {
        return axios.post(`${apiPrefix}/notes`, data);
    },
    deleteNote(noteId) {
        return axios.delete(`${apiPrefix}/notes/${noteId}`);
    },
    updateNote(data) {
        return axios.post(`${apiPrefix}/notesUpdateSendData`, data);
    }
}