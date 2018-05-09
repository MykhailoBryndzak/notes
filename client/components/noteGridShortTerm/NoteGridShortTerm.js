import React from 'react';

import Masonry from 'react-masonry-component';
import Note from '../note/Note';
import './NoteGridShortTerm.less';

const NoteGridShortTerm = React.createClass({
    render() {
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true,
        };

        return (
            <div className="NotesGridShortTerm">
                <h2>Short Term Tasks</h2>

                <Masonry
                    options={masonryOptions}
                >
                    {
                        this.props.shortTermTasks.map(note =>
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
            </div>
        );
    }
});

export default NoteGridShortTerm;


