export const hasAnyCompletedTask = () => {
  const allCheckedElementsCount = document.querySelectorAll(
    "li.TaskList__taskContent--isActive",
  ).length;

  return allCheckedElementsCount > 0;
};
