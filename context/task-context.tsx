"use client";

import { FC, createContext, PropsWithChildren, useState, useContext, useEffect } from "react";
import { Task } from "../@types";

interface TodosProviderProps {
    tasks: Task[];
    createTask: (description: string) => void;
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
        const task: Task = { description, createdAt: new Date(), isCompleted: false };
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        localStorage.setItem(TASKS_KEY, JSON.stringify(newTasks));
    }

    return (
        <TodosContext.Provider value={{ tasks, createTask }}>
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