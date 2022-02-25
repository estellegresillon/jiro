import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { DEMO_STATE } from "utils/constants";
import { createNewItem } from "utils/helpers";
import {
  getElementFromLocalStorage,
  saveInLocalStorage,
} from "utils/localStorage";

const BoardContext = createContext({
  addComponent: () => {},
  columns: [],
});

export const BoardProvider = ({ children }) => {
  const [columns, setColumns] = useState(
    getElementFromLocalStorage("board") || DEMO_STATE
  );
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [canDragColumns, setCanDragColumns] = useState(false);

  const selectTicket = useCallback((item) => {
    setSelectedTicket(item);
  }, []);

  const createElement = useCallback(
    (type, elementName) => {
      if (type === "ticket") {
        const newTicket = createNewItem({
          createdAt: "today",
          description: "description",
          status: "backlog",
          title: elementName,
        });

        const status = "backlog";

        const newBoard = [...columns];
        const backlogCol = newBoard.find((column) =>
          Object.keys(column).includes(status)
        )["backlog"];
        const updatedCol = backlogCol.tickets;
        const newCol = [...updatedCol, newTicket];
        backlogCol.tickets = newCol;

        setColumns(newBoard);
      }

      if (type === "column") {
        const columnExists = columns.find((column) =>
          Object.keys(column).includes(elementName)
        );

        if (columnExists) {
          return;
        }

        const newColObj = {
          [elementName]: {
            tickets: [],
          },
        };

        const newBoard = [...columns];
        const updatedBoard = [...newBoard, newColObj];
        setColumns(updatedBoard);
      }
    },
    [columns]
  );

  const removeItem = useCallback(
    (type, columnName, itemId) => {
      if (type === "ticket") {
        const newBoard = [...columns];

        const parentCol = newBoard.find((column) =>
          Object.keys(column).includes(columnName)
        );

        const updatedColTickets = parentCol[columnName].tickets;
        const colWithoutTicket = updatedColTickets.filter(
          (ticket) => ticket.id !== itemId
        );

        parentCol[columnName].tickets = colWithoutTicket;
        setColumns(newBoard);
      }

      if (type === "column") {
        if (columnName === "backlog") {
          return;
        }

        const filteredBoard = [...columns].filter(
          (column) => !Object.keys(column).includes(columnName)
        );

        setColumns(filteredBoard);
      }
    },
    [columns]
  );

  const updateElements = useCallback((elements) => {
    setColumns(elements);
  }, []);

  useEffect(() => {
    if (Object.keys(columns).length > 0) {
      saveInLocalStorage("board", columns);
    }
  }, [columns]);

  const value = useMemo(
    () => ({
      canDragColumns,
      columns,
      createElement,
      removeItem,
      selectTicket,
      selectedTicket,
      setCanDragColumns,
      updateElements,
    }),
    [
      canDragColumns,
      columns,
      createElement,
      removeItem,
      selectTicket,
      selectedTicket,
      updateElements,
    ]
  );

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);

export default BoardContext;
