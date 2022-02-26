import { createNewItem } from "utils/helpers";

export const DEMO_STATE = [
  {
    backlog: {
      tickets: [
        createNewItem({
          status: "backlog",
          title:
            "Discipline is choosing between what you want now and what you want most.",
        }),
        createNewItem({
          status: "backlog",
          title: "Don’t settle for less just because it’s available.",
        }),
        createNewItem({
          status: "backlog",
          title:
            "The greatest rewards come from working on something that nobody has a name for. If you possibly can, work where there are no words for what you do.",
        }),
        createNewItem({
          status: "backlog",
          title: "Man will become better if you show him what he is like.",
        }),
        createNewItem({
          status: "backlog",
          title: "To be wealthy, accumulate what money can’t buy.",
        }),
      ],
    },
  },
  {
    ongoing: {
      tickets: [
        createNewItem({
          status: "ongoing",
          title:
            "The value of a thing sometimes lies not in one attains with it, but in one pays for it - what it cost us.",
        }),
        createNewItem({
          status: "ongoing",
          title:
            "You are only as young as the last time you changed your mind.",
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
          title:
            "Take up one idea. Make that one idea your life — think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone.",
        }),
        createNewItem({
          status: "qa",
          title: "All things are difficult before they are easy.",
        }),
        createNewItem({
          status: "qa",
          title: "The greatest friend of the soul is the unknown.",
        }),
      ],
    },
  },
  {
    done: {
      tickets: [
        createNewItem({
          status: "done",
          title:
            "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.",
        }),
        createNewItem({
          status: "done",
          title:
            "Ask what makes you come alive and go do it. Because what the world needs is people who have come alive.",
        }),
        createNewItem({
          status: "done",
          title:
            "Instead of saying 'I don’t have time for this' try saying 'It’s not a priority' and see how that feels.",
        }),
        createNewItem({
          status: "done",
          title: "The years teach much which the days never know.",
        }),
        createNewItem({
          status: "done",
          title: "Everything you can imagine is real.",
        }),
        createNewItem({
          status: "done",
          title:
            "It's shocking to find how many people do not believe they can learn, and how many more believe learning to be difficult.",
        }),
        createNewItem({
          status: "done",
          title: "What do you despise? By this are you truly known.",
        }),
        createNewItem({
          status: "done",
          title:
            "Deep in the human unconscious is a pervasive need for a logical universe that makes sense, But the real universe is always one step beyond logic.",
        }),
        createNewItem({
          status: "done",
          title:
            "Danger lurk in all systems. Systems incorporate the unexamined beliefs of their creators. Adopt a system, accept its beliefs, and you help strengthen the resistance to change.",
        }),
      ],
    },
  },
];
