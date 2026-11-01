import { saveTasks } from "./storage.js";
import { addTask, tasks, sortTasksByPriority } from "./taskServer.js";

addTask("Learn TypeScript", "high");
addTask("Finish Node.js course", "medium");
addTask("Build React project", "low");
await saveTasks(tasks);

console.log(tasks);
console.log(sortTasksByPriority());