import { TaskList, showHideTaskButton } from "./elements";
import { hasAnyCompletedTask } from "./hasAnyCompletedTask";

export const toggleShowHideButton = () => {
  if (hasAnyCompletedTask()) {
    showHideTaskButton.classList.toggle("TaskList__link--isActive");
    TaskList.classList.toggle("TaskList__list--hideCompleted");
  } else {
    return;
  }
};
