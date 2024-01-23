import React, { FC } from "react";
import { TextInput } from "flowbite-react";
import { inter } from "@/app/utils/fonts";

export const InputExample: FC = function() {
    return (
        <div className={`${inter.className}`}>
            <TextInput
            className="shadow-md rounded-lg border-none transition-colors duration-700"
            shadow={true}
            sizing="md"
            placeholder={`Qual é sua tarefa hoje?`}
        />
        </div>
        )
}
