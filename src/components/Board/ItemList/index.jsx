import { Droppable } from "react-beautiful-dnd";

import Item from "../Item";

const ItemList = ({ column, columnName }) => (
  <Droppable droppableId={columnName} type="TICKET">
    {(provided, snpashot) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        {column[columnName].tickets.map((ticket, index) => (
          <Item index={index} key={ticket.id} ticket={ticket} />
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default ItemList;
