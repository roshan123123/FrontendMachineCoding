import StickyNotes from './StickyNotes';
import { createRef, useRef, useEffect } from 'react';

const NoteContainer = ({ notes, setNotes }) => {
  const noteRefs = useRef([]);

  const handleDragStart = (downEvent, note) => {
    const handleMouseMove = (moveEvent) => {};

    const handleMouseUp = (moveEvent) => {
      console.log('inside handleMouseMove', moveEvent);
      const rect = noteRefs.current[note.id].current.getBoundingClientRect();
      const offsetX = downEvent.clientX - rect.left;
      const offsetY = downEvent.clientY - rect.top;
      const posX = moveEvent.clientX - offsetY;
      const posY = moveEvent.clientY - offsetX;

      const newPosition = { posX, posY };
      setNotes((prev) => {
        const newNotes = prev.filter((ele) => ele.id != note.id);
        return [...newNotes, { ...note, ...newPosition }];
      });
      console.log('inside handlemouseup');
      const canvas = document.querySelector('.NotesContainer');
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
    const canvas = document.querySelector('.NotesContainer');
    // canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    const getNewCordinates = () => {
      const canvasWidth = window.innerWidth - 250;
      const canvasHeight = window.innerHeight - 250;

      return {
        posX: (Math.random() * canvasWidth).toFixed(),
        posY: (Math.random() * canvasHeight).toFixed(),
      };
    };

    const updatedNotes = notes.map((element) => {
      const position = getNewCordinates();
      return { ...element, ...position };
    });
    setNotes(updatedNotes);
  }, [notes.length]);

  console.log('notes', notes);
  return (
    <>
      {notes.map((ele, index) => {
        return (
          <StickyNotes
            ref={
              noteRefs.current[ele.id]
                ? noteRefs.current[ele.id]
                : (noteRefs.current[ele.id] = createRef())
            }
            note={ele}
            key={ele.id}
            handleDragStart={handleDragStart}
          />
        );
      })}
    </>
  );
};
export default NoteContainer;
