import {
  DarkThemeToggleActivate,
  DarkThemeToggleDeactivate,
  mainParent,
} from "./elements";
import { getFromDB } from "./getFromDB";
import { renderTask } from "./renderTask";

export const initDataOnStartUp = (localStorageKey) => {
  if (localStorageKey === "tasks") {
    const dataFromDB = getFromDB("tasks");
    const CheckedTaskIdFromDB = getFromDB("task-id") || [];

    if (dataFromDB) {
      debugger;
      dataFromDB.forEach((element) => {
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
    }
  } else if (localStorageKey === "toggleTheme") {
    const returnedData = getFromDB("toggleTheme");
    if (returnedData?.isDark) {
      mainParent.classList.toggle("App--isDark");
      DarkThemeToggleActivate.classList.remove("hidden");
      DarkThemeToggleDeactivate.classList.add("hidden");
    }
  }
};
