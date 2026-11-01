import type { Task, TaskPriority, TaskStatus } from "./types.js";

export const tasks: Task[] = [];

export function addTask(title: string, priority: TaskPriority, description?: string): Task {
    const task: Task = {
        id: generateId(),
        title: title,
        description: description,
        status: 'todo',
        priority: priority,
        createdAt: new Date().toISOString()
    };

    tasks.push(task);

    return task;
}

export function getTasksByStatus(status: TaskStatus): Task[] {

    const filteredTasks = tasks.filter((element) => {
        return element.status === status;
    });


     return filteredTasks;
}

export function updateTaskStatus(id: number, status: TaskStatus, comment?: string): boolean {
    const task = tasks.find((element) => element.id === id);

    if(!task) {
        return false;
    }

    task.status = status;

    if(status === 'done') {
        task.completedAt = new Date().toISOString();
    } else {
        task.completedAt = undefined;
    }

    if (comment !== undefined) {
        console.log(comment);
    }

    return true;
}

export function updateTask(id: number, updates: Partial<Task>): boolean {
    const task = tasks.find((element) => element.id === id);

    if (!task) {
        return false;
    }

    Object.assign(task, updates);

    return true;
}

export function sortTasksByPriority(): Task[] {
    const priorityOrder: Record<TaskPriority, number> = {
        high: 3,
        medium: 2,
        low: 1
    };

    return [...tasks].sort((a, b) => {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    })
}

function generateId(): number {
    if(tasks.length === 0) {
        return 1;
    } else {
        const ids = tasks.map((task) => {
            return task.id;
        });

        return Math.max(...ids) + 1;
    }
}