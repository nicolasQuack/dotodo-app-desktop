import React, { FC, useState } from "react";
import { Table, Dropdown, TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { TaskCard } from "./taskCard";
import { useTodosContext } from "../../../../context";

const DropdownExample: FC = function () {
    const [selected, setSelected] = useState("Last 30 days");

    return (
        <Dropdown
            label={`${selected}`}
            size="sm"
            color="bg"
            className="transition-colors duration-700"
        >
            <Dropdown.Item onClick={() => setSelected("Last day")}>
                Last day
            </Dropdown.Item >
            <Dropdown.Item onClick={() => setSelected("Last 7 days")}>
                Last 7 days
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelected("Last 30 days")}>
                Last 30 days
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelected("Last month")}>
                Last month
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelected("Last year")}>
                Last year
            </Dropdown.Item>
        </Dropdown>
    )
}

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
                <div className="flex bg-blue-500 border shadow-md rounded-lg text-white dark:bg-white dark:text-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">
                    <DropdownExample />
                </div>
            </div>
            <div className="pb-6">
                <TableStyleExample />
            </div>
        </div>
    )
}

const TableStyleExample: FC = function () {

    const { tasks } = useTodosContext();

    return (
        <div
            className="relative overflow-x-auto shadow-md rounded-lg sm:rounded-lg"
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
                    {tasks.map((task) => <TaskCard key={task.id} {...task} />)}
                </Table.Body>
            </Table>
        </div>
    )
}

