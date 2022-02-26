import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import Item from "./Item";

const ItemList = ({ canDragColumns, column, columnName }) => (
  <ListWrapper>
    <Droppable droppableId={columnName} type="TICKET">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {column[columnName].tickets.map((ticket, index) => (
            <Item
              canDragColumns={canDragColumns}
              columnName={columnName}
              index={index}
              key={ticket.id}
              ticket={ticket}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </ListWrapper>
);

export default ItemList;

const ListWrapper = styled.div`
  height: 100%;

  > div {
    height: calc(100% - 50px);
    -ms-overflow-style: none;
    overflow: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
