import { TaskList } from "./elements";

export const renderTask = (taskItem, operationType) => {
  if (operationType === "adding") {
    TaskList.insertAdjacentHTML("beforeend", taskItem);
  } else if (operationType === "remove") {
    TaskList.removeChild(taskItem);
  }
};
