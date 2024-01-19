"use client"

import { NextPage } from "next"
import Image from "next/image"
import type { FC } from "react";
import React, { useState } from "react";
import { pacifico } from "@/app/utils/fonts";
import { AlertExample } from "./Alert";
import { InputExample } from "./Input";

export const HomePageContent: NextPage = function () {
    return (
        <div className="p-6 pb-96 ">
            <section className="pb-6">
                <AlertExample />
            </section>
            <section>
                <div>
                    <InputExample />
                    <Image
                        className="pt-5 ml-16 dark:opacity-50 md:block hidden"
                        alt="Dotodo template"
                        height="126"
                        src="/img/template.png"
                        width="412"
                    />
                </div>
            </section>
        </div>
    )
}