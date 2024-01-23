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
            className="transition-colors duration-700"
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
                    <Table.Row className="transition-colors duration-700">
                        <Table.Cell>
                            <div className="flex pl-3 gap-6">
                            <button className="bg-green-600 hover:animate-pulse rounded-lg p-3 text-white">
                                <FaCheck />
                            </button>
                            <button className="bg-red-700 hover:animate-pulse rounded-lg p-3 ">
                                <div className="rotate-45 text-white">
                                    <FaPlus />
                                </div>
                            </button>
                            </div>
                        </Table.Cell>
                        <Table.Cell className="text-nowrap">
                            Regar a planta
                        </Table.Cell>
                        <Table.Cell className="text-nowrap">
                            23/01/2024
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
        )
}

