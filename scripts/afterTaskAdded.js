import { removeTask } from "./removeTask";
import { toggleTask } from "./toggleTask";

export const afterTaskAdded = (event) => {
  if (event.target.className === "TaskList__deleteIcon") {
    removeTask(event);
  } else if (event.target.className === "TaskList__checkboxImg") {
    toggleTask(event);
  }
};
