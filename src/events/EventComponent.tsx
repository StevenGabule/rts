import { SyntheticEvent } from "react";

const EventComponent: React.FC = () => {
  const onChange = (e: SyntheticEvent) => {
    console.log(e);
  };

  const onDragStart = () => {
    console.log("I am being drag!");
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
