"use client";

import { FC, createContext, PropsWithChildren, useState, useContext } from "react";
import { Task } from "../@types";

interface TodosProviderProps {
    tasks: Task[];
}

const TodosContext = createContext<TodosProviderProps>({} as TodosProviderProps);

export const TodosProvider: FC<PropsWithChildren> = function ({ children }) {
    const [tasks, setTasks] = useState<Task[]>([])

    return (
        <TodosContext.Provider value={{ tasks }}>

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