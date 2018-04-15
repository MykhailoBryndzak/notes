import React from 'react';

import Masonry from 'react-masonry-component';
import Note from './Note';
import './NoteGrid.less';

const NoteGrid = React.createClass({
    render() {
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <Masonry
                className="NotesGrid"
                options={masonryOptions}
            >
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            spendTime={note.spendTime}
                            onDelete={this.props.onNoteDelete.bind(null, note)}
                            onUpdate={this.props.onNoteUpdate.bind(null, note)}
                            color={note.color}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
});

export default NoteGrid;


