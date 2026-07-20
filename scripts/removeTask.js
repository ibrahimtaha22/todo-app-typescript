import { getFromDB } from "./getFromDB";
import { removeFromDB, removeIdFromDB } from "./removeFromDB";
import { renderTask } from "./renderTask";

export const removeTask = (event) => {
  const answer = confirm("هل انت متأكد من حذف المهمة؟");

  if (answer === false) {
    return;
  } else {
    const removedItem = event.target.parentElement.parentElement;
    const removedIdTask = event.target.parentElement.firstElementChild.id;

    removeFromDB(removedItem);
    removeIdFromDB(removedIdTask);
    renderTask(removedItem, "remove");
  }
};
