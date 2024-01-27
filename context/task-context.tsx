"use client";

import { FC, createContext, PropsWithChildren, useState, useContext, useEffect } from "react";
import { Task } from "../@types";
import { uuid } from 'uuidv4';

interface TodosProviderProps {
    tasks: Task[];
    createTask: (description: string) => void;
    deleteTask: (id: string) => void;
    handleTaskComplete: (id: string) => void;
}

const TodosContext = createContext<TodosProviderProps>({} as TodosProviderProps);

const TASKS_KEY = "@dotodo/tasks"

export const TodosProvider: FC<PropsWithChildren> = function ({ children }) {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        const tasks = localStorage.getItem(TASKS_KEY) || "[]";
        const formatedTasks = JSON.parse(tasks);

        setTasks(formatedTasks);
    }, [])

    function createTask(description: string) {
        const task: Task = { id: uuid(), description, createdAt: new Date(), isCompleted: false };
        const newTasks = [task, ...tasks];
        setTasks(newTasks);
        localStorage.setItem(TASKS_KEY, JSON.stringify(newTasks));
    }

    function deleteTask(id: string) {
        const filteredTasks = tasks.filter((task) => task.id !== id)

        setTasks(filteredTasks);
        localStorage.setItem(TASKS_KEY, JSON.stringify(filteredTasks));

    }

    function handleTaskComplete(id: string) {
        const taskIndex = tasks.findIndex((task) => task.id === id);
        const oldTask = tasks[taskIndex];

        let tasksCopy = [...tasks];
        tasksCopy[taskIndex] = { ...oldTask, isCompleted: !oldTask.isCompleted };
        setTasks(tasksCopy)
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasksCopy));

    }

    return (
        <TodosContext.Provider value={{ tasks, createTask, deleteTask, handleTaskComplete }}>
            {children}
        </TodosContext.Provider>
    )

}

export function useTodosContext(): TodosProviderProps {
    const context = useContext(TodosContext);

    if (typeof context === "undefined") {
        throw new Error(
            "useTodosContext should be used within the SidebarContext provider!",
        );
    }

    return context;
}