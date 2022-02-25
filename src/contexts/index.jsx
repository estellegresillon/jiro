import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { createNewItem } from "utils/helpers";
import { getElementFromLocalStorage } from "utils/localStorage";

const BoardContext = createContext({
  addComponent: () => {},
  columns: [],
});

export const BoardProvider = ({ children }) => {
  const [columns, setColumns] = useState(
    getElementFromLocalStorage("columns") || ["backlog"]
  );
  const [tickets, setTickets] = useState(
    getElementFromLocalStorage("tickets") || []
  );
  const [selectedTicket, setSelectedTicket] = useState(null);

  const selectTicket = useCallback((item) => {
    setSelectedTicket(item);
  }, []);

  const createElement = useCallback((type) => {
    if (type === "ticket") {
      const newTicket = createNewItem({
        createdAt: "today",
        descrtion: "description",
        status: "backlog",
        title: type,
        type,
      });

      console.log(newTicket, "newticket");
      setTickets((prevState) => [...prevState, newTicket]);
    }

    if (type === "column") {
      setColumns((prevState) => [...prevState, "todo"]);
    }
  }, []);

  const removeTicket = useCallback(
    (item) => {
      const filteredTickets = [...tickets].filter((ticket) => {
        return ticket.id !== item.id;
      });

      setTickets(filteredTickets);
    },
    [tickets]
  );

  const updateElements = useCallback((elements, type) => {
    if (type === "COLUMN") {
      setColumns(elements);
    }

    if (type === "TICKET") {
      setTickets(elements);
    }
  }, []);

  const value = useMemo(
    () => ({
      columns,
      createElement,
      tickets,
      removeTicket,
      selectTicket,
      selectedTicket,
      updateElements,
    }),
    [
      columns,
      createElement,
      tickets,
      removeTicket,
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
