"use client"

import { NextPage } from "next"
import Image from "next/image"
import React from "react";
import { InputExample } from "./Input";
import { TableExample } from "./Table";
import { useSidebarContext } from "../../../../context/sidebar-context";
import { twMerge } from "tailwind-merge";


export const HomePageContent: NextPage = function () {

    const { isCollapsed } = useSidebarContext();

    return (
        <div className={twMerge("p-6 h-screen", isCollapsed ? "aria-disabled: true" : "aria-disabled:true")}>
            <section>
                <div className="pb-6 ">
                    <InputExample />
                    <Image
                        loading="lazy"
                        className={twMerge("pt-5 ml-5 dark:opacity-50 md:block hidden transition-colors duration-1000", isCollapsed ? "hidden" : "")}
                        alt="Dotodo template"
                        height="126"
                        src="/img/template.png"
                        width="412"
                    />
                </div>
            </section>
            <section className="">
                <TableExample />
            </section>
        </div>
    )
}