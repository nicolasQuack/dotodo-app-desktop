"use client";

import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { DashboardNavBar } from "./ui/navbar";
import { DashboardSideBar } from "./ui/sidebar";
import { SidebarProvider, useSidebarContext } from "../../../context/sidebar-context";

const DashboardLayout: FC<PropsWithChildren> = function ({children}) {
  return (
      <SidebarProvider>
        <DashboardLayoutContent>{children}</DashboardLayoutContent>
      </SidebarProvider>
    )
}

const DashboardLayoutContent: FC<PropsWithChildren> = function ({children}) {
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
            isCollapsed ? "md:ml-[4.5rem] transition-all duration-1000" : "transition-all duration-700 md:ml-64",
          )}
        >
          {children}
        </div>
      </div>
        </>
        )
}

export default DashboardLayout;
