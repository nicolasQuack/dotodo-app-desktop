"use client";

import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { DashboardNavBar } from "./components/NavBar";
import { DashboardSideBar } from "./components/SideBar";
import { SidebarProvider, useSidebarContext, TodosProvider } from "../../../context";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <SidebarProvider>
      <TodosProvider>
        <DashboardLayoutContent>{children}</DashboardLayoutContent>
      </TodosProvider>
    </SidebarProvider>
  )
}

const DashboardLayoutContent: FC<PropsWithChildren> = function ({ children }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      <DashboardNavBar />
      <div className="mt-16 flex items-start">
        <DashboardSideBar />
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto transition-colors duration-700 bg-gray-50 dark:bg-gray-900",
            isCollapsed ? "md:ml-16 transition-all duration-1000" : "transition-all duration-700 md:ml-64",
          )}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default DashboardLayout;
