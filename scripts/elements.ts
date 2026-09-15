export const darkTheme = document.querySelector(".DarkThemeToggle");

// export const getInputTask = () => {
//   return document.querySelector(".TaskSearchBar__searchContent") as HTMLElement;
// };

export const TaskList = document.querySelector(
  ".TaskList__list",
) as HTMLElement;

export const DarkThemeToggleDeactivate = document.querySelector(
  ".DarkThemeToggle__deactivate",
);

export const DarkThemeToggleActivate = document.querySelector(
  ".DarkThemeToggle__activate",
);

export const mainParent = document.querySelector(".App");
export const addingTaskForm = document.querySelector(
  ".TaskSearchBar__searchContent",
);

export const getdeleteTaskButton = () => {
  return document.querySelector(".TaskList__deleteIcon");
};
export const showHideTaskButton = document.querySelector(
  ".TaskList__link",
) as HTMLElement;
export const getEmptyStateElement = () => document.querySelector(".EmptyList");
