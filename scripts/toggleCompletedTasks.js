import { TaskList, toggleCompletedTaskButton } from "./elements";
import { hasAnyCompletedTask } from "./hasAnyCompletedTask";

export const toggleCompletedTasks = () => {
  if (hasAnyCompletedTask()) {
    toggleCompletedTaskButton.classList.toggle("TaskList__link--isActive");
    TaskList.classList.toggle("TaskList__list--hideCompleted");
  } else {
    return;
  }
};
