import { Table } from 'flowbite-react'
import { FaCheck, FaPlus } from 'react-icons/fa'
import React from 'react'
import { Task } from '../../../../@types'

interface TaskCardProps extends Task {
    onDelete: () => void;
}

export const TaskCard = function ({
    id,
    description,
    createdAt,
    isCompleted,
    onDelete

}: TaskCardProps) {

    const formatedDate = new Date(createdAt).toLocaleDateString()

    return (
        <Table.Row className="transition-colors duration-700">
            <Table.Cell>
                <div className="flex pl-3 gap-6">
                    <button className="bg-green-600 hover:animate-pulse rounded-lg p-3 text-white">
                        <FaCheck />
                    </button>
                    <button className="bg-red-700 hover:animate-pulse rounded-lg p-3" onClick={onDelete}>
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
