import { Draggable } from "react-beautiful-dnd";

import ItemList from "../ItemList";

const Column = ({ index, column, columnName, ...props }) => (
  <Draggable draggableId={columnName} index={index}>
    {(provided, snapshot) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <div>{columnName}</div>
        <ItemList
          column={column}
          columnName={columnName}
          index={index}
          {...props}
        />
      </div>
    )}
  </Draggable>
);

export default Column;
