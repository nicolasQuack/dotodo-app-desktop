import React, { FC, useState } from "react";
import { TextInput } from "flowbite-react";
import { inter } from "../../../../public/fonts/fonts";
import { useTodosContext } from "../../../../context";

export const InputExample: FC = function () {
    const { createTask } = useTodosContext();

    const [text, setText] = useState("");

    return (
        <div className={`${inter.className}`}>
            <form onSubmit={(e) => {
                e.preventDefault();
                createTask(text);
                setText("")
            }}>
                <TextInput
                    type="text"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    value={text}
                    name="taskInput"
                    className="shadow-md rounded-lg border-none transition-colors duration-700"
                    shadow={true}
                    sizing="md"
                    placeholder={`Qual é sua tarefa hoje?`}
                />
            </form>
        </div>
    )
}
