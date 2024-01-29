import { useSidebarContext } from "../../../../context/sidebar-context";
import { Sidebar, SidebarItems } from "flowbite-react";
import type { FC } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export const DashboardSideBar: FC = function () {

  const { isCollapsed } = useSidebarContext();

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      id="sidebar"
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-1000 dark:border-gray-700 md:flex",
        isCollapsed && "hidden w-16",)}
    >
      <SidebarItems>
        <Sidebar.ItemGroup>
          <Sidebar.Item target="_blank" href="https://github.com/nicolasQuack" icon={FaGithub}>
            GitHub
          </Sidebar.Item>
          <Sidebar.Item target="_blank" href="https://www.linkedin.com/in/nicolasquack/" icon={FaLinkedin}>
            LinkedIn
          </Sidebar.Item>
          <Sidebar.Item target="_blank" href="https://www.instagram.com/nicolas_f_felipe/" icon={FaInstagram}>
            Instagram
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}