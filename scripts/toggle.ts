import { saveToDB } from "./utils";
import { removeIdFromDB } from "./utils";
import {
  DarkThemeToggleActivate,
  DarkThemeToggleDeactivate,
  TaskList,
  mainParent,
  showHideTaskButton,
} from "./elements";
import { hasCompletedTask } from "./utils";
import type { ToggleTheme } from "./types";

export const toggleTask = (event: Event) => {
  const isMouseEvent = event instanceof MouseEvent;
  const isKeyboardEvent = event instanceof KeyboardEvent;
  const itemElementForClick = isMouseEvent
    ? (event.target as HTMLElement).parentElement?.parentElement
    : null;
  const itemElementForEnter = isKeyboardEvent
    ? (event.target as HTMLElement).parentElement
    : null;

  if (isMouseEvent && event.type === "click") {
    itemElementForClick?.classList.toggle("TaskList__taskContent--isActive");
    const isChecked = itemElementForClick?.classList.contains(
      "TaskList__taskContent--isActive",
    );
    const taskId = itemElementForClick?.lastElementChild?.firstElementChild?.id;
    if (isChecked) {
      saveToDB("checkedTask-id", `${taskId}`);
    } else {
      // remove TASK-Id from database
      taskId && removeIdFromDB(taskId);
    }
  } else if (
    isKeyboardEvent &&
    event.type === "keydown" &&
    event.key === "Enter" &&
    (event.target as HTMLElement).className === "TaskList__checkbox"
  ) {
    itemElementForEnter?.classList.toggle("TaskList__taskContent--isActive");
  }
};

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

export const toggleTheme = () => {
  mainParent?.classList.toggle("App--isDark");
  DarkThemeToggleActivate?.classList.remove("hidden");
  DarkThemeToggleDeactivate?.classList.add("hidden");

  const isDark = mainParent?.classList.contains("App--isDark");
  const savedStatus = {
    isDark,
  };
  saveToDB("toggleTheme", savedStatus as ToggleTheme);
};
