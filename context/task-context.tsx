"use client";

import { FC, createContext, PropsWithChildren, useState, useContext, useEffect } from "react";
import { Task } from "../@types";
import { uuid } from 'uuidv4';

interface TodosProviderProps {
    tasks: Task[];
    createTask: (description: string) => void;
    deleteTask: (id: string) => void;
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

    return (
        <TodosContext.Provider value={{ tasks, createTask, deleteTask }}>
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