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

export const removeIdFromDB = () => {};
