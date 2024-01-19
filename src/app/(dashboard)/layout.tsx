"use client";

import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import DashboardNavbar from "./ui/navbar";

const DashboardLayoutContent: FC<PropsWithChildren> = function ({children}) {
    return (
        <>
            <DashboardNavbar />
            <div className="mt-16 flex items-start">
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900",
          )}
        >
          {children}
        </div>
      </div>
        </>
        )
}

export default DashboardLayoutContent;
