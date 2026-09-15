//@ts-ignore
import { AddingTask, afterTaskAdded } from "./utils";
import {
  addingTaskForm,
  darkTheme,
  showHideTaskButton,
  TaskList,
} from "./elements";
import { toggleShowHideButton, toggleTask, toggleTheme } from "./toggle";

export const initAppListeners = () => {
  darkTheme?.addEventListener("click", toggleTheme);
  addingTaskForm?.addEventListener("submit", AddingTask);

  TaskList?.addEventListener("click", afterTaskAdded);

  TaskList?.addEventListener("keydown", toggleTask);

  showHideTaskButton?.addEventListener("click", toggleShowHideButton);
};
