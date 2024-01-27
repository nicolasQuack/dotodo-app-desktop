import { FC } from "react"
import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { useTodosContext } from "../../../../context";

export const SearchBar: FC = function () {

    const { searchText, setSearchText, searchTasks } = useTodosContext()

    return (
        <div>
            <TextInput
                onChange={(e) => {
                    const value = e.target.value
                    setSearchText(value)
                    searchTasks(value)
                }}
                value={searchText}
                className="shadow-md rounded-lg border-none transition-colors duration-700"
                shadow={true}
                placeholder={`Pesquisar por items`}
                icon={FaSearch}
            />
        </div>
    )
}