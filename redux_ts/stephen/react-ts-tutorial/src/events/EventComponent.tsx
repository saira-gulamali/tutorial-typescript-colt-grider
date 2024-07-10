import React from "react";

const EventComponent: React.FC = () => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
  }

  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    console.log("im being dragged", e);
  }
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <input
        type="text"
        onChange={(e) => console.log("inline change event", e)}
      />
      <div draggable onDragStart={handleDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
