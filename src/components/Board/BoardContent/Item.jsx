import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import { useBoardContext } from "contexts";

const Item = ({ canDragColumns, columnName, index, ticket }) => {
  const { removeItem } = useBoardContext();

  return (
    <Draggable
      draggableId={ticket.id}
      index={index}
      isDragDisabled={canDragColumns}
    >
      {(provided) => (
        <ItemWrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div onClick={() => removeItem("ticket", columnName, ticket.id)}>
            x
          </div>
          <div>{ticket.title}</div>
        </ItemWrapper>
      )}
    </Draggable>
  );
};

export default Item;

const ItemWrapper = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;

  > div:first-child {
    align-items: center;
    background-color: #e0dede;
    border-radius: 50%;
    display: flex;
    font-size: 10px;
    height: 20px;
    justify-content: center;
    margin-bottom: 5px;
    width: 20px;

    &:hover {
      background-color: #d2d2d2;
    }
  }
`;
