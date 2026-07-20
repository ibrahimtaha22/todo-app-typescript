import { getFromDB } from "./getFromDB";

export const saveToDB = (key, data) => {
  if (key === "tasks") {
    const tasks = getFromDB(key) || [];
    tasks.push(data);
    localStorage.setItem(key, JSON.stringify(tasks));
  } else if (key === "toggleTheme") {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(typeof localStorage.getItem(key), key);
    // } else if (key === `checkedTask-id`) {
    const task_ids = [];

    getFromDB(`checkedTask-id`) && task_ids.push(getFromDB(`checkedTask-id`));
    task_ids.includes(data) || task_ids.push(data);

    task_ids.forEach((task_id) => {
      localStorage.setItem(key, JSON.stringify(task_id));
    });
  } else if (key === "checkedTask-id") {
    // 1. بنجيب الداتا القديمة، ونتأكد إنها مصفوفة، ولو مفيش داتا بنبدأ بمصفوفة فاضية
    const existingData = getFromDB(key);
    const task_ids = Array.isArray(existingData) ? existingData : [];

    // 2. بنضيف الـ ID الجديد لو مش موجود أصلاً في المصفوفة
    if (!task_ids.includes(data)) {
      task_ids.push(data);
    }

    // 3. بنحفظ المصفوفة كلها مرة واحدة باسم المفتاح
    localStorage.setItem(key, JSON.stringify(task_ids));
  } else {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
