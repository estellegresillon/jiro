import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

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
    getElementFromLocalStorage("board") || [{ backlog: { tickets: [] } }]
  );
  const [selectedTicket, setSelectedTicket] = useState(null);

  const selectTicket = useCallback((item) => {
    setSelectedTicket(item);
  }, []);

  const createElement = useCallback(
    (type) => {
      if (type === "ticket") {
        const newTicket = createNewItem({
          createdAt: "today",
          descrtion: "description",
          status: "backlog",
          title: type,
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
        const newColumn = "todo";

        const columnExists = columns.find((column) =>
          Object.keys(column).includes(newColumn)
        );

        if (columnExists) {
          return;
        }

        const newColObj = {
          todo: {
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

  // const removeTicket = useCallback(
  //   (item) => {
  //     const filteredTickets = [...tickets].filter((ticket) => {
  //       return ticket.id !== item.id;
  //     });

  //     // setTickets(filteredTickets);
  //   },
  //   [tickets]
  // );

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
      columns,
      createElement,
      selectTicket,
      selectedTicket,
      updateElements,
    }),
    [columns, createElement, selectTicket, selectedTicket, updateElements]
  );

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);

export default BoardContext;
