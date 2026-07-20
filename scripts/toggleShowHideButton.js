import { TaskList, showHideTaskButton } from "./elements";
import { hasCompletedTask } from "./hasCompletedTask";

export const toggleShowHideButton = () => {
  if (hasCompletedTask()) {
    showHideTaskButton.classList.toggle("TaskList__link--isActive");
    TaskList.classList.toggle("TaskList__list--hideCompleted");
  } else {
    return;
  }
};
