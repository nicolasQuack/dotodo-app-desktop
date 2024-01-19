import React, { FC } from "react";
import { TextInput } from "flowbite-react";
import { inter, pacifico } from "@/app/utils/fonts";

export const InputExample: FC = function() {
    return (
        <div className={`${inter.className}`}>
            <TextInput
            shadow={true}
            placeholder={`Qual é sua tarefa hoje?`}
        />
        </div>
        )
}