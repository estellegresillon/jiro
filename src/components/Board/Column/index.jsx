import { Draggable } from "react-beautiful-dnd";

import ItemList from "../ItemList";

const Column = ({ index, column, ...props }) => (
  <Draggable draggableId={column} index={index}>
    {(provided, snapshot) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <div>{column}</div>
        <ItemList column={column} index={index} {...props} />
      </div>
    )}
  </Draggable>
);

export default Column;
