import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import IconClose from "components/common/IconClose";
import { useBoardContext } from "contexts";

const Item = ({ canDragColumns, columnName, index, ticket }) => {
  const { removeItem } = useBoardContext();

  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(provided) => (
        <ItemWrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {canDragColumns && (
            <div
              className="remove-ticket"
              onClick={() => removeItem("ticket", columnName, ticket.id)}
            >
              <IconClose />
            </div>
          )}
          <div>{ticket.title}</div>
        </ItemWrapper>
      )}
    </Draggable>
  );
};

export default Item;

const ItemWrapper = styled.div`
  background-color: #f7f9fe;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;

  &:hover {
    background-color: #ebf0fc;
  }

  .remove-ticket {
    align-items: center;
    background-color: #e0f1ff;
    border-radius: 50%;
    color: #365ed2;
    display: flex;
    font-size: 9px;
    height: 15px;
    justify-content: center;
    margin-bottom: 5px;
    width: 15px;

    svg {
      height: 8px;
      width: 8px;
    }

    &:hover {
      background-color: #c0c4df;
    }
  }
`;
