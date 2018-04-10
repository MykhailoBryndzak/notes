import mongoose from 'mongoose'

import '../models/note.js';
import {db} from '../../etc/configs.json';


const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
}

export function listNotes() {
    return Note.find();
}

export function creteNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createAt: new Date(),
        spendTime: data.spendTime
    }) ;

    return note.save();
}

export function updateNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createAt: new Date()
    }) ;

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

