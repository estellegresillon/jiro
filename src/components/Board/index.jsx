import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { useBoardContext } from "contexts";

import Column from "./Column";

const Board = () => {
  const { columns, tickets, updateElements } = useBoardContext();

  const [orderedColumns, updateOrderedColumns] = useState([]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.type === "TICKET") {
      const items = [...tickets];
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      updateElements(items, result.type);
    }

    if (result.type === "COLUMN") {
      const items = [...columns];
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      updateOrderedColumns(items);
      updateElements(items, result.type);
    }
  };

  useEffect(() => {
    console.log(columns, "cols");
    updateOrderedColumns(columns);
  }, [columns]);

  return (
    <BoardWrapper>
      {orderedColumns?.length > 0 ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="body" type="COLUMN">
            {(provided) => (
              <ColumnWrapper
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {orderedColumns.map((column, index) => (
                  <Column
                    index={index}
                    key={column}
                    column={column}
                    tickets={tickets}
                  />
                ))}
                {provided.placeholder}
              </ColumnWrapper>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <div>Add your first element.</div>
      )}
    </BoardWrapper>
  );
};

export default Board;

const BoardWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  height: 100%;

  > div {
    width: 200px;
  }
`;
