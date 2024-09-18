import { forwardRef } from 'react';

const StickyNotes = forwardRef(({ note, handleDragStart }, ref) => {
  return (
    <div
      className="stickyNotes"
      ref={ref}
      style={{
        position: 'absolute',
        top: `${note.posY}px`,
        left: `${note.posX}px`,
      }}
      onMouseDown={(e) => handleDragStart(e, note)}
    >
      {note.note}
    </div>
  );
});

export default StickyNotes;
