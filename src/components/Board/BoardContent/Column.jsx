import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import IconClose from "components/common/IconClose";
import IconGrip from "components/common/IconGrip";
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
            <div>{columnName}</div>
            {canDragColumns && (
              <ActionsWrapper>
                {columnName !== "backlog" && (
                  <span onClick={() => removeItem("column", columnName)}>
                    <IconClose />
                  </span>
                )}
                <IconGrip />
              </ActionsWrapper>
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
  font-family: Noah Bold;
  font-size: 12px;
  font-weight: bolder;
  height: 40px;
  justify-content: space-between;
  margin-bottom: -8px;
  padding: 10px 20px 0 20px;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    height: 13px;
    width: 13px;
  }

  span {
    align-items: center;
    background-color: #f7f9ff;
    border-radius: 50%;
    display: flex;
    font-size: 8px;
    height: 20px;
    justify-content: center;
    margin-right: 10px;
    width: 20px;

    svg {
      height: 8px;
      width: 8px;
    }

    &:hover {
      background-color: #ebf0fc;
    }
  }
`;

const ActionsWrapper = styled.div`
  align-items: center;
  color: #365ed2;
  display: flex;
`;
