import React from 'react';
import styled from "styled-components";

import { Link } from "react-router-dom";

const NoteWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2em;
  padding-bottom: 2em;
  border-bottom: 1px solid #f5f5f0;
`;

import Note from './Note';
const NoteFeed = ({ notes }) => {
    return (
        <div>
        {notes.map(note => (
            <div key={note.id}>
                <NoteWrapper>
                    <Note note={note} />
                    <Link to={'note/${note.id}'}>Permalink</Link>
                </NoteWrapper>
            </div>
            ))}
        </div>
    )
}

export default NoteFeed;