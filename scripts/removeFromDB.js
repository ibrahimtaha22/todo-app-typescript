import { getFromDB } from "./getFromDB";

export const removeFromDB = (parentItem) => {
  const taskElement = parentItem.querySelector(".TaskList__value");
  const taskElementId = taskElement.id;
  const taskElementText = taskElement.innerText.trim();
  const dataFromDB = getFromDB("tasks");

  dataFromDB.forEach((element, index) => {
    if (
      element.id === parseFloat(taskElementId) &&
      element.task.trim() === taskElementText
    ) {
      dataFromDB.splice(index, 1);

      localStorage.setItem("tasks", JSON.stringify(dataFromDB));
    } else {
      return;
    }
  });
};

export const removeIdFromDB = (taskId) => {
  if (!taskId) {
    return;
  } else {
    const CheckedTaskIdFromDB = getFromDB("checkedTask-id");
    if (!CheckedTaskIdFromDB) {
      return;
    }
    const isId = CheckedTaskIdFromDB.includes(taskId);
    if (isId) {
      const isId = CheckedTaskIdFromDB.includes(taskId);
      const IdIndex = CheckedTaskIdFromDB.indexOf(taskId);
      const splicedTaskIdArr = CheckedTaskIdFromDB.toSpliced(IdIndex, 1);
      localStorage.setItem("checkedTask-id", JSON.stringify(splicedTaskIdArr));
    }
  }
};
