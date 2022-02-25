import { Draggable } from "react-beautiful-dnd";

const Item = ({ index, ticket }) => (
  <Draggable draggableId={ticket.id} index={index}>
    {(provided) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <div index={index}>ticket {ticket.id}</div>
      </div>
    )}
  </Draggable>
);

export default Item;
