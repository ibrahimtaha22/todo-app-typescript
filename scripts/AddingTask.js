import { getInputTask } from "./elements";
import { renderTask } from "./renderTask";
import { saveToDB } from "./saveToDB";

export const AddingTask = (event) => {
  event.preventDefault();

  const inputElement = getInputTask().children.item(0);
  const taskText = inputElement.value.trim();

  if (inputElement.tagName === "INPUT") {
    const savedTaskInfo = {
      id: Date.now(),
      task: taskText,
    };
    saveToDB("tasks", savedTaskInfo);

    const TaskItem = `<li class="TaskList__taskContent">
      <div  class="TaskList__checkbox" tabindex="0" role="button">
        <img class="TaskList__checkboxImg" src="./assets/icon-checkmark.svg" alt="checkmark">
      </div>
      <div class="TaskList__valueContent">
        <p id = "${savedTaskInfo.id}" class="TaskList__value">
          ${taskText} 
        </p>
        
        <img src="./assets/icon-basket.svg" class="TaskList__deleteIcon" alt="basket-icon">
        
      </div>
    </li>`;

    renderTask(TaskItem, "adding");
    inputElement.value = ""; // to clear the input
  }
};
