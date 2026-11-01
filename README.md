# TypeScript Task Manager

A simple task management application built with **TypeScript and Node.js** to practice static typing, interfaces, utility types, asynchronous programming, and file operations.

This is a learning project focused on understanding and applying TypeScript fundamentals.

## Features

- Create tasks with titles, priorities, and optional descriptions
- Generate unique numeric task IDs
- Filter tasks by status
- Sort tasks by priority
- Update task statuses and completion dates
- Edit task properties
- Save tasks to a local JSON file
- Practice loading and validating JSON data (in progress)

## Tech Stack

- **TypeScript**
- **Node.js**
- **tsx** — development execution
- **Node.js File System API** — JSON file storage

## Project Structure

```text
task-manager-ts/
├── src/
│   ├── index.ts          # Application entry point
│   ├── types.ts          # TypeScript types and interfaces
│   ├── taskService.ts    # Task management logic
│   └── storage.ts        # JSON file operations
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/SpySpoky/typescript-task-manager.git
cd typescript-task-manager
```

**2. Install dependencies**

```bash
npm install
```

**3. Run in development mode**

```bash
npm run dev
```

**4. Build and run**

```bash
npm run build
npm start
```

**5. Check TypeScript types**

```bash
npm run typecheck
```

## Task Structure

```typescript
type TaskStatus = "todo" | "in-progress" | "done";
type TaskPriority = "low" | "medium" | "high";

interface Task {
    id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt: string;
    completedAt?: string;
}
```

## Example Usage

```typescript
addTask("Learn TypeScript", "high");
addTask("Build REST API", "medium", "Using Express");

updateTaskStatus(1, "in-progress");

getTasksByStatus("todo");

sortTasksByPriority();

updateTask(1, {
    title: "Learn Advanced TypeScript",
    priority: "high"
});
```

## TypeScript Concepts Practiced

- Interfaces and type aliases
- Union and literal types
- Optional properties and parameters
- Function parameter and return types
- Type inference and narrowing
- Utility types: `Record`, `Partial`, `Pick`
- Typed arrays and objects
- Async functions and `Promise`
- JSON serialization with `fs/promises`

## Project Status

**Learning project — partially completed.**

Core task management operations and JSON saving are implemented. Persistent task loading, complete runtime validation, and an interactive CLI interface are not yet finished.

## Author

GitHub: [SpySpoky](https://github.com/SpySpoky)