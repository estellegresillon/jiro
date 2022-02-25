import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import { useBoardContext } from "contexts";

import ItemList from "./ItemList";

const Column = ({ index, canDragColumns, column, columnName, ...props }) => {
  const { removeItem } = useBoardContext();

  return (
    <Draggable
      isDragDisabled={!canDragColumns}
      draggableId={columnName}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <ColHeaderWrapper>
            {columnName}
            {canDragColumns && (
              <span onClick={() => removeItem("column", columnName)}>x</span>
            )}
          </ColHeaderWrapper>
          <ItemList
            canDragColumns={canDragColumns}
            column={column}
            columnName={columnName}
            index={index}
            {...props}
          />
        </div>
      )}
    </Draggable>
  );
};

export default Column;

const ColHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  padding: 10px 20px 0 20px;

  > span {
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 50%;
    display: flex;
    font-size: 10px;
    height: 20px;
    justify-content: center;
    margin-left: 8px;
    width: 20px;

    &:hover {
      background-color: #d2d2d2;
    }
  }
`;
