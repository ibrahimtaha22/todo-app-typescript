import { initDataOnStartUp } from "./scripts/initDataOnStartUp";
import { initAppListeners } from "./scripts/eventListeners";

// initDataOnStartUp
initDataOnStartUp("toggleTheme");
initDataOnStartUp("tasks");
initDataOnStartUp("toggleShowHideButton");

initAppListeners();
