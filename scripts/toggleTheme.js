import {
  DarkThemeToggleActivate,
  DarkThemeToggleDeactivate,
  mainParent,
} from "./elements";
import { saveToDB } from "./saveToDB";

export const toggleTheme = () => {
  mainParent.classList.toggle("App--isDark");
  DarkThemeToggleActivate.classList.remove("hidden");
  DarkThemeToggleDeactivate.classList.add("hidden");

  const isDark = mainParent.classList.contains("App--isDark");
  const savedStatus = {
    isDark,
  };
  saveToDB("toggleTheme", savedStatus);
};
