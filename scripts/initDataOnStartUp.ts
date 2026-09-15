import {
  DarkThemeToggleActivate,
  DarkThemeToggleDeactivate,
  mainParent,
  showHideTaskButton,
  TaskList,
} from "./elements.js";
import { getFromDB, renderEmptyState, renderTask } from "./utils.ts";

type DbaseElment = {
  id: number;
  task: string;
};
export const initDataOnStartUp = (localStorageKey: string) => {
  if (localStorageKey === "tasks") {
    const dataFromDB = getFromDB("tasks");
    const CheckedTaskIdFromDB = getFromDB("checkedTask-id") || [];

    if (dataFromDB && dataFromDB.length) {
      dataFromDB.forEach((element: DbaseElment) => {
        const checkedClass = CheckedTaskIdFromDB.includes(`${element.id}`)
          ? "TaskList__taskContent--isActive"
          : "";
        const TaskItem = `<li class="TaskList__taskContent ${checkedClass}">
      <div  class="TaskList__checkbox" tabindex="0" role="button">
        <img class="TaskList__checkboxImg" src="./assets/icon-checkmark.svg" alt="checkmark">
      </div>
      <div class="TaskList__valueContent">
        <p id = "${element.id}" class="TaskList__value">
          ${element.task} 
        </p>
        
        <img src="./assets/icon-basket.svg" class="TaskList__deleteIcon" alt="basket-icon">
        
      </div>
    </li>`;

        renderTask(TaskItem, "adding");
      });
    } else {
      renderEmptyState();
    }
  } else if (localStorageKey === "toggleTheme") {
    const returnedData = getFromDB("toggleTheme");
    if (returnedData?.isDark) {
      mainParent?.classList.toggle("App--isDark");
      DarkThemeToggleActivate?.classList.remove("hidden");
      DarkThemeToggleDeactivate?.classList.add("hidden");
    }
  } else if (localStorageKey === "toggleShowHideButton") {
    const isShowButton = getFromDB("isShowButton");
    const isHideCompleted = getFromDB("isHideCompleted");
    if (isHideCompleted && isShowButton) {
      showHideTaskButton?.classList.add("TaskList__link--isActive");
      TaskList?.classList.add("TaskList__list--hideCompleted");
    } else if (!isHideCompleted || !isShowButton) {
      showHideTaskButton?.classList.remove("TaskList__link--isActive");
      TaskList?.classList.remove("TaskList__list--hideCompleted");
    }
  } else {
    return;
  }
};
