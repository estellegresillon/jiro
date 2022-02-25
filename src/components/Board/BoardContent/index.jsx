import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { useBoardContext } from "contexts";

import Column from "./Column";

const BoardContent = () => {
  const { columns, updateElements, canDragColumns } = useBoardContext();
  const [orderedColumns, updateOrderedColumns] = useState([]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.type === "TICKET") {
      const source = result.source.droppableId;
      const destination = result.destination.droppableId;
      const newBoard = [...columns];

      const sourceCol = newBoard.find((column) =>
        Object.keys(column).includes(source)
      )[source].tickets;

      const [reorderedItem] = sourceCol.splice(result.source.index, 1);
      reorderedItem.status = result.destination.droppableId;

      const targetCol = newBoard.find((column) =>
        Object.keys(column).includes(destination)
      )[destination].tickets;
      targetCol.splice(result.destination.index, 0, reorderedItem);

      updateElements(newBoard);
    }

    if (result.type === "COLUMN") {
      const items = [...columns];
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      updateOrderedColumns(items);
      updateElements(items);
    }
  };

  useEffect(() => {
    updateOrderedColumns(columns);
  }, [columns]);

  return (
    <BoardWrapper>
      {orderedColumns?.length > 0 ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="body" type="COLUMN" direction="horizontal">
            {(provided) => (
              <ColumnWrapper
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {orderedColumns.map((column, index) => {
                  const columnName = Object.keys(column)[0];

                  return (
                    <Column
                      canDragColumns={canDragColumns}
                      index={index}
                      key={columnName}
                      column={column}
                      columnName={columnName}
                    />
                  );
                })}
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

export default BoardContent;

const BoardWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: calc(100% - 250px);
  position: relative;
  width: 100%;
`;

const ColumnWrapper = styled.div`
  display: flex;
  height: calc(100% - 50px);
  margin: 0 30px 50px 30px;
  width: 100%;

  > div {
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 1px 60px 0 rgb(0 0 0 / 10%);
    margin: 0 20px;
    width: 100%;
  }
`;
