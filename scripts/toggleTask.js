import { saveToDB } from "./saveToDB";
import { removeIdFromDB } from "./removeFromDB";

//DONE FIXME:  Toggling any task always updates the first task.

export const toggleTask = (event) => {
  const itemElementForClick = event.target.parentElement.parentElement;
  const itemElementForEnter = event.target.parentElement;

  if (event.type === "click") {
    itemElementForClick.classList.toggle("TaskList__taskContent--isActive");
    const isChecked = itemElementForClick.classList.contains(
      "TaskList__taskContent--isActive",
    );
    const taskId = itemElementForClick.lastElementChild.firstElementChild.id;
    if (isChecked) {
      saveToDB("checkedTask-id", `${taskId}`);
    } else {
      // remove TASK-Id from database
      removeIdFromDB(taskId);
    }
  } else if (
    event.type === "keydown" &&
    event.key === "Enter" &&
    event.target.className === "TaskList__checkbox"
  ) {
    itemElementForEnter.classList.toggle("TaskList__taskContent--isActive");
  }
};
