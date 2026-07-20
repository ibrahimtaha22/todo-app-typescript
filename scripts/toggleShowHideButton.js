import { TaskList, showHideTaskButton } from "./elements";
import { hasCompletedTask } from "./hasCompletedTask";
import { saveToDB } from "./saveToDB";

export const toggleShowHideButton = () => {
  if (hasCompletedTask()) {
    showHideTaskButton.classList.toggle("TaskList__link--isActive");
    TaskList.classList.toggle("TaskList__list--hideCompleted");

    const isShowButton = showHideTaskButton.classList.contains(
      "TaskList__link--isActive",
    );
    const isHideCompleted = TaskList.classList.contains(
      "TaskList__list--hideCompleted",
    );

    saveToDB("isShowButton", isShowButton);
    saveToDB("isHideCompleted", isHideCompleted);
  } else {
    return;
  }
};
