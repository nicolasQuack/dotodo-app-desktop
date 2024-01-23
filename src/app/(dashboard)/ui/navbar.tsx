import { pacifico } from "@/app/utils/fonts";
import { useSidebarContext } from "../../../../context/sidebar-context";
import { isSmallScreen } from "../../../../helpers/is-small-screen";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import type { FC } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";

export const DashboardNavBar: FC<Record<string, never>> = function () {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } = useSidebarContext();

  return (
    <header>
      <Navbar
        fluid
        className="fixed transition-colors duration-700 top-0 z-30 w-full border-b border-pink-300 bg-orange-300 p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0"
      >
        <div className="w-full p-3 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                aria-controls="sidebar"
                aria-expanded
                className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 transition-transform duration-700 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
                onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              >
                {isSidebarCollapsed || !isSmallScreen() ? (
                  <HiMenuAlt1 className="h-6 w-6" />
                ) : (
                  <HiX className="h-6 w-6" />
                )}
              </button>
              <Navbar.Brand href="/">
                <Image
                  alt="Dotodo logo"
                  height="24"
                  src="/img/logo-icon.png"
                  width="24"
                />
                <span className={`${pacifico.className} self-center whitespace-nowrap px-3 text-xl font-semibold text-white `}>
                  DotoDo
                </span>
              </Navbar.Brand>
            </div>
            <DarkThemeToggle className="transition-color duration-500"/>
          </div>
        </div>
      </Navbar>
    </header>
  )
}