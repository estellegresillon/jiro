import { Droppable } from "react-beautiful-dnd";

import Item from "../Item";

const ItemList = ({ column, tickets }) => (
  <Droppable droppableId={column} type="TICKET">
    {(provided, snpashot) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        <div index={column} item={column}>
          {tickets?.length > 0 &&
            tickets.map((ticket, index) => (
              <Item index={index} key={ticket.id} ticket={ticket} />
            ))}
        </div>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default ItemList;
