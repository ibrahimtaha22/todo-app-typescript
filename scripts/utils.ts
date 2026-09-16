import { toggleTask } from "./toggle";
import { getEmptyStateElement, TaskList } from "./elements";
import type {
  AfterTaskAdded,
  DBData,
  GetFromDB,
  HasCompletedTask,
  RemoveFromDB,
  RemoveIdFromDB,
  RemoveTask,
  RenderEmptyState,
  RenderTask,
  Task,
} from "./types";

import checkmarkIcon from "../assets/icon-checkmark.svg";
import basketIcon from "../assets/icon-basket.svg";
import emptyIcon from "./assets/icon-empty.svg";

export const AddingTask: (event: Event) => void = (event) => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const inputElement = form.querySelector("input") as HTMLInputElement;
  const inputValue = inputElement?.value.trim();

  if (!inputValue) return;

  const savedTaskInfo = {
    id: Date.now(),
    task: inputValue,
  };

  saveToDB("tasks", savedTaskInfo);

  const TaskItem = `<li class="TaskList__taskContent">
      <div class="TaskList__checkbox" tabindex="0" role="button">
        <img
          class="TaskList__checkboxImg"
          src=${checkmarkIcon}
          alt="checkmark"
        >
      </div>

      <div class="TaskList__valueContent">
        <p id="${savedTaskInfo.id}" class="TaskList__value">
          ${inputValue}
        </p>

        <img
          src=${basketIcon}
          class="TaskList__deleteIcon"
          alt="basket-icon"
        >
      </div>
    </li>`;

  removeEmptyState();
  renderTask(TaskItem, "adding");
  inputElement.value = "";
};

export const getFromDB: GetFromDB = (key) => {
  const returnedData = localStorage.getItem(key);

  if (!returnedData) {
    return null;
  }

  return JSON.parse(returnedData);
};

export const hasCompletedTask: HasCompletedTask = () => {
  const allCheckedElementsCount = document.querySelectorAll(
    "li.TaskList__taskContent--isActive",
  ).length;

  return allCheckedElementsCount > 0;
};

export const afterTaskAdded: AfterTaskAdded = (event) => {
  const htmlElement = event.target as HTMLElement;

  if (htmlElement.className === "TaskList__deleteIcon") {
    removeTask(event);
  } else if (htmlElement.className === "TaskList__checkboxImg") {
    toggleTask(event);
  }
};

export const removeFromDB: RemoveFromDB = (parentItem) => {
  const taskElement = parentItem.querySelector(
    ".TaskList__value",
  ) as HTMLElement;

  const taskElementId = taskElement.id;
  const taskElementText = taskElement.innerText.trim();
  const dataFromDB = getFromDB("tasks");

  if (!dataFromDB) return;

  dataFromDB.forEach((element, index) => {
    if (
      element.id === parseFloat(taskElementId) &&
      element.task.trim() === taskElementText
    ) {
      dataFromDB.splice(index, 1);

      localStorage.setItem("tasks", JSON.stringify(dataFromDB));
    }
  });
};

export const removeIdFromDB: RemoveIdFromDB = (taskId) => {
  if (!taskId) return;

  const checkedTaskIdFromDB = getFromDB("checkedTask-id");

  if (!checkedTaskIdFromDB) return;

  const isId = checkedTaskIdFromDB.includes(taskId);

  if (isId) {
    const idIndex = checkedTaskIdFromDB.indexOf(taskId);
    const splicedTaskIdArr = checkedTaskIdFromDB.toSpliced(idIndex, 1);

    localStorage.setItem("checkedTask-id", JSON.stringify(splicedTaskIdArr));
  }
};

export const removeTask: RemoveTask = (event) => {
  const answer = confirm("هل انت متأكد من حذف المهمة؟");

  if (answer === false) return;

  const target = event.target as HTMLElement;

  const removedItem = target.parentElement?.parentElement as HTMLElement;

  const removedIdTask = target.parentElement?.firstElementChild?.id as string;

  removeFromDB(removedItem);
  removeIdFromDB(removedIdTask);
  renderTask(removedItem, "remove");
  renderEmptyState();
};

export const saveToDB = <K extends keyof DBData>(
  key: K,
  data: DBData[K],
): void => {
  if (key === "tasks") {
    const tasks = getFromDB("tasks") || [];
    tasks.push(data as Task);

    localStorage.setItem(key, JSON.stringify(tasks));
  } else if (key === "toggleTheme") {
    localStorage.setItem(key, JSON.stringify(data));
  } else if (key === "checkedTask-id") {
    const existingData = getFromDB(key);
    const taskIds = Array.isArray(existingData) ? existingData : [];

    if (!(taskIds as string[]).includes(data as string)) {
      (taskIds as string[]).push(data as string);
    }

    localStorage.setItem(key, JSON.stringify(taskIds));
  } else {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const renderTask: RenderTask = (taskItem, operationType) => {
  if (operationType === "adding") {
    TaskList.insertAdjacentHTML("beforeend", taskItem as string);
  } else if (operationType === "remove") {
    TaskList.removeChild(taskItem as HTMLElement);
  }
};

export const renderEmptyState: RenderEmptyState = () => {
  const tasks = getFromDB("tasks");

  if (tasks?.length === 0) {
    TaskList.innerHTML = `<li class="EmptyList">
      <img
        class="EmptyList__img"
        src=${emptyIcon}
        alt="list is empty"
      />
      <p>قائمة المهام فارغة</p>
    </li>`;
  }
};

export const removeEmptyState = () => {
  getEmptyStateElement() && (TaskList.innerHTML = "");
};
