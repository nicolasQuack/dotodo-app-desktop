"use client";

import { FC, createContext, PropsWithChildren, useState, useContext, useEffect } from "react";
import { Task } from "../@types";
import { uuid } from 'uuidv4';

interface TodosProviderProps {
    tasks: Task[];
    createTask: (description: string) => void;
    deleteTask: (id: string) => void;
    handleTaskComplete: (id: string) => void;
    filteredTasks: Task[];
    searchTasks: (text: string) => void;
}

const TodosContext = createContext<TodosProviderProps>({} as TodosProviderProps);

const TASKS_KEY = "@dotodo/tasks"

export const TodosProvider: FC<PropsWithChildren> = function ({ children }) {
    const [tasks, setTasks] = useState<Task[]>([])
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([])

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
        const newTasks = tasks.filter((task) => task.id !== id)

        setTasks(newTasks);
        localStorage.setItem(TASKS_KEY, JSON.stringify(newTasks));

    }

    function handleTaskComplete(id: string) {
        const taskIndex = tasks.findIndex((task) => task.id === id);
        const oldTask = tasks[taskIndex];

        let tasksCopy = [...tasks];
        tasksCopy[taskIndex] = { ...oldTask, isCompleted: !oldTask.isCompleted };
        setTasks(tasksCopy)
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasksCopy));

    }

    function searchTasks(text: string) {
        setFilteredTasks(tasks.filter((task) => task.description.includes(text)))
    }

    return (
        <TodosContext.Provider value={{ tasks, createTask, deleteTask, handleTaskComplete, filteredTasks, searchTasks, }}>
            {children}
        </TodosContext.Provider>
    )

}

export function useTodosContext(): TodosProviderProps {
    const context = useContext(TodosContext);

    if (typeof context === "undefined") {
        throw new Error(
            "useTodosContext deve estar inserido dentro de um TodosContext provider!",
        );
    }

    return context;
}