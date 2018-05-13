import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cool from 'cool-ascii-faces';

import {serverPort} from '../etc/configs.json';

import * as db from './utils/DataBaseUtils';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});
app.post('/notes', (req, res) => {
    db.creteNote(req.body).then(data => res.send(data));
});
app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});
app.post('/notesUpdateSendData', (req, res) => {
    db.updateNote(req.body).then(data => res.send(data));
});
app.get('/cool', (req, res) => res.send(cool()));

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}!!!`);
});