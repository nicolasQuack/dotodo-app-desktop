"use client"

import { NextPage } from "next"
import Image from "next/image"
import type { FC } from "react";
import React, { useState } from "react";
import { pacifico } from "@/app/utils/fonts";
import { AlertExample } from "./Alert";

export const HomePageContent: NextPage = function () {
    return (
        <div className="p-6">
            <section>
                <AlertExample />
            </section>
        </div>
    )
}