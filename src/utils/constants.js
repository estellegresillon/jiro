import { createNewItem } from "utils/helpers";

export const DEMO_STATE = [
  {
    backlog: {
      tickets: [
        createNewItem({
          status: "backlog",
          title: "Add new sprint feature",
        }),
        createNewItem({
          status: "backlog",
          title: "Dynamic CSS on draggable state",
        }),
        createNewItem({
          status: "backlog",
          title: "Create ticket page",
        }),
      ],
    },
  },
  {
    ongoing: {
      tickets: [
        createNewItem({
          status: "ongoing",
          title: "Groom app header",
        }),
      ],
    },
  },
  { review: { tickets: [] } },
  {
    qa: {
      tickets: [
        createNewItem({
          status: "qa",
          title: "Columns and tickets drag and drop",
        }),
        createNewItem({
          status: "qa",
          title: "Move columns on Manage Board click",
        }),
      ],
    },
  },
  {
    done: {
      tickets: [
        createNewItem({
          status: "done",
          title: "App look and feel / CSS",
        }),
        createNewItem({
          status: "done",
          title: "Project structure",
        }),
        createNewItem({
          status: "done",
          title: "Delete a ticket and a column (except backlog)",
        }),
      ],
    },
  },
];
