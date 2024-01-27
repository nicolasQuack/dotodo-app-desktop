import React, { FC } from "react";
import { Table, TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { TaskCard } from "./taskCard";
import { useTodosContext } from "../../../../context";

const SearchBarExample: FC = function () {
    return (
        <div>
            <TextInput
                className="shadow-md rounded-lg border-none transition-colors duration-700"
                shadow={true}
                placeholder={`Pesquisar por items`}
                icon={FaSearch}
            />
        </div>
    )
}

export const TableExample: FC = function () {
    return (
        <div className="transition-colors duration-700">
            <div className=" grid grid-flow-col grid-cols-5 gap-x-6 pb-6">
                <div className="col-start-1 col-end-6">
                    <SearchBarExample />
                </div>
            </div>
            <div className="pb-6">
                <TableStyleExample />
            </div>
        </div>
    )
}

const TableStyleExample: FC = function () {

    const { tasks, deleteTask, handleTaskComplete } = useTodosContext();

    return (
        <div
            className="relative overflow-hidden shadow-md rounded-lg sm:rounded-lg"
        >
            <Table
                hoverable={false}
                striped={true}
            >
                <Table.Head className="text-white">
                    <Table.HeadCell className="bg-orange-300 transition-colors duration-700">
                        <span className="sr-only">Edit</span>

                    </Table.HeadCell>
                    <Table.HeadCell className="bg-orange-300 transition-colors duration-700">
                        Tarefa
                    </Table.HeadCell>
                    <Table.HeadCell className="bg-orange-300 transition-colors duration-700">
                        Data
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {tasks.map((task) => <TaskCard key={task.id} {...task} onDelete={() => deleteTask(task.id)} handleComplete={() => handleTaskComplete(task.id)} />)}
                </Table.Body>
            </Table>
        </div>
    )
}

