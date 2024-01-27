import { Table } from 'flowbite-react'
import { twMerge } from 'tailwind-merge';
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa'
import React from 'react'
import { Task } from '../../../../@types'

interface TaskCardProps extends Task {
    onDelete: () => void;
    handleComplete: () => void;
}

export const TaskCard = function ({
    id,
    description,
    createdAt,
    isCompleted,
    onDelete,
    handleComplete

}: TaskCardProps) {

    const formatedDate = new Date(createdAt).toLocaleDateString()

    return (
        <Table.Row className="transition-colors duration-700">
            <Table.Cell>
                <div className="flex pl-3 gap-6">
                    <button onClick={handleComplete} className={twMerge("duration-1000 hover:animate-pulse rounded-lg p-3 text-white", isCompleted ? "bg-yellow-400" : "bg-green-600")}>
                        {isCompleted ? <FaMinus /> : <FaCheck />}
                    </button>
                    <button onClick={onDelete} className="bg-red-700 hover:animate-pulse rounded-lg p-3" >
                        <div className="rotate-45 text-white">
                            <FaPlus />
                        </div>
                    </button>
                </div>
            </Table.Cell>
            <Table.Cell className="text-nowrap">
                {description}
            </Table.Cell>
            <Table.Cell className="text-nowrap">
                {formatedDate}
            </Table.Cell>
        </Table.Row>
    )
}
