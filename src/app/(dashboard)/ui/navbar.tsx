import { pacifico } from "@/app/utils/fonts";
import { isSmallScreen } from "../../../../helpers/is-small-screen";
import { DarkThemeToggle, Navbar} from "flowbite-react";
import Image from "next/image";
import type { FC } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";

export default function DashboardNavBar() {
    return (
        <header>
      <Navbar
        fluid
        className="fixed top-0 z-30 w-full border-b border-pink-300 bg-orange-300 p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0"
      >
        <div className="w-full p-3 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              
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
            <DarkThemeToggle />
          </div>
        </div>
      </Navbar>
    </header>
        )
}