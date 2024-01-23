import React, { FC } from "react";
import { TextInput } from "flowbite-react";
import { inter, pacifico } from "@/app/utils/fonts";
import { Key } from "grommet-icons";

export const InputExample: FC = function() {
    return (
        <div className={`${inter.className}`}>
            <TextInput
            className="shadow-md rounded-lg border-none"
            shadow={true}
            sizing="md"
            placeholder={`Qual é sua tarefa hoje?`}
        />
        </div>
        )
}