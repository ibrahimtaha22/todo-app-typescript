import { getFromDB } from "./getFromDB";
import { removeFromDB } from "./removeFromDB";
import { renderTask } from "./renderTask";

export const removeTask = (event) => {
  const answer = confirm("هل انت متأكد من حذف المهمة؟");

  if (answer === false) {
    return;
  } else {
    const removedItem = event.target.parentElement.parentElement;

    removeFromDB(removedItem);
    renderTask(removedItem, "remove");
  }
};
