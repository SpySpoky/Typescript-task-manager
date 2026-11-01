import { writeFile, readFile } from "node:fs/promises";
import type { Task } from "./types.js";

export async function saveTasks(tasks: Task[]): Promise<void> {
    const json = JSON.stringify(tasks, null, 2);

    await writeFile("tasks.json", json, "utf-8");
}

export async function loadTasks(): Promise<Task[]> {
    try {
        const content = await readFile("tasks.json", "utf-8");

        const data: unknown = JSON.parse(content);

        if(!Array.isArray(data)) {
            return [];
        }

        if(!data.every(element => { // data.every(isTask); same
            return isTask(element);
        })) {
            return [];
        }

        return data;
    } catch(error: unknown) {
        // console.log(error);
        // return [];

        if (error instanceof Error && "code" in error && error.code === "ENOENT") {
            return [];
        }

        throw error;
    }
    
}

function isTask(value: unknown): value is Task {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    if (!("id" in value) || typeof value.id !== "number") {
        return false;
    }

    if (!("title" in value) || typeof value.title !== "string") {
        return false;
    }

    return true;
}