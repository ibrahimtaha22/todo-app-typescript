import { AddingTask } from "./scripts/AddingTask";
import { afterTaskAdded } from "./scripts/afterTaskAdded";
import {
  addingTaskForm,
  darkTheme,
  getdeleteTaskButton,
  TaskList,
  showHideTaskButton,
} from "./scripts/elements";
import { initDataOnStartUp } from "./scripts/initDataOnStartUp";
import { removeTask } from "./scripts/removeTask";
import { toggleCompletedTasks } from "./scripts/toggleCompletedTasks";
import { toggleTask } from "./scripts/toggleTask";
import { toggleTheme } from "./scripts/toggleTheme";

// initDataOnStartUp
initDataOnStartUp("toggleTheme");
initDataOnStartUp("tasks");

darkTheme.addEventListener("click", toggleTheme);
addingTaskForm.addEventListener("submit", AddingTask);

TaskList.addEventListener("click", afterTaskAdded);

TaskList.addEventListener("keydown", toggleTask);

showHideTaskButton.addEventListener("click", toggleCompletedTasks);

/*
 -DarkTheme
 [✅] toggleDarkTheme 
 -Tasks
 [✅ ] saveToDB
 [✅ ] getFromDB
 [ ✅] initDataOnStartUp  // بتجيبلك الداتا على اخر وضع تركت فيه الصفحة  
 [✅ ] renderTaskList 
 [✅] addTask 
 [ ✅] removeTask 
 [✅ ] toggleCompletedTask 

 */
