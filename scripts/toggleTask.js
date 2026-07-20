import { returnTaskId } from "./returnTaskId";
import { saveToDB } from "./saveToDB";

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
    saveToDB("checkedTask-id", `${taskId}`);
  } else if (
    event.type === "keydown" &&
    event.key === "Enter" &&
    event.target.className === "TaskList__checkbox"
  ) {
    itemElementForEnter.classList.toggle("TaskList__taskContent--isActive");
  }
};
