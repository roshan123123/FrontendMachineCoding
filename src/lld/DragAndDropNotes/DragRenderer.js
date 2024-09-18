import NoteContainer from './component/NoteContainer';
import './index.css';
import { useState } from 'react';

const DragRenderer = () => {
  const [notes, setNotes] = useState(NotesArray);



  return (
    <div clasName="page">
      <div className="input-button">
        <input />
        <button>Add Note</button>
      </div>
      <div className="NotesContainer">
        <NoteContainer notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
};

export default DragRenderer;

const NotesArray = [
  {
    id: 1,
    note: 'hey this is the first note',
  },
  {
    id: 2,
    note: 'hey this is the second note',
  },
];
