import React, { FC, ComponentProps } from "react";
import { Table, Dropdown, TextInput } from "flowbite-react";
import { FaClock, FaXmark } from "react-icons/fa6";
import { FaSearch, FaCheck, FaPlus } from "react-icons/fa";



const DropdownExample: FC = function () {
    return (
        <Dropdown
            label="Last 30 days"
            size="sm"
            color="bg"
        >
            <Dropdown.Item>
                Last day
            </Dropdown.Item>
            <Dropdown.Item>
                Last 7 days
            </Dropdown.Item>
            <Dropdown.Item>
                Last 30 days
            </Dropdown.Item>
            <Dropdown.Item>
                Last month
            </Dropdown.Item>
            <Dropdown.Item>
                Last year
            </Dropdown.Item>
        </Dropdown>
    )
}

const SearchBarExample: FC = function () {
    return (
        <div>
            <TextInput
                className="shadow-md rounded-lg border-none"
                shadow={true}
                placeholder={`Pesquisar por items`}
                icon={FaSearch}
            />
        </div>
    )
}

export const TableExample: FC = function () {
    return (
        <div>
            <div className=" grid grid-flow-col grid-cols-5 gap-x-6 pb-6">
                <div className="col-start-1 col-end-6">
                    <SearchBarExample />
                </div>
                <div className="flex bg-blue-500 border shadow-md rounded-lg text-white dark:bg-white dark:text-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">
                    <DropdownExample />
                </div>
            </div>
            <TableStyleExample />
        </div>
    )
}

const TableStyleExample: FC = function () {
    return (
        <div 
        className="relative overflow-x-auto rounded-lg"
        >
            <Table
            hoverable={false}
            striped={true}
            className="flex"
            >
                <Table.Head>
                    <Table.HeadCell>
                        Tarefa
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Data
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Status
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                        Editar
                    </Table.HeadCell>
                </Table.Head>
            </Table>
        </div>
        )
}

