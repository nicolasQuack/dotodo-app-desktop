"use client"

import { NextPage } from "next"
import Image from "next/image"
import type { FC } from "react";
import React, { useState } from "react";
import { AlertExample } from "../ui/alert";
import { InputExample } from "../ui/input";
import { TableExample } from "./table";
import { CardExample } from "./cards";

export const HomePageContent: NextPage = function () {
    return (
        <div className="p-6 h-screen">
            <section className="pb-6">
                <AlertExample />
            </section>
            <section>
                <div className="pb-6">
                    <InputExample />
                    <Image
                        loading="lazy"
                        className="pt-5 ml-16 dark:opacity-50 md:block hidden"
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