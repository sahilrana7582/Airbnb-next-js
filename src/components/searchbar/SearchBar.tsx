import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchBar = () => {
    return (
        <div className="border rounded-full shadow-md dark:border-rose-500/40 px-1 py-1 flex justify-center items-center gap-2">
            <div className="text-lg font-semibold rounded-l-full p-1 px-2 text-center hover:bg-gray-200 transition-all duration-300 cursor-pointer border-r">Anywhere</div>
            <div className="text-lg font-semibold rounded-md  p-1 px-2 text-center hover:bg-gray-200 transition-all duration-300 cursor-pointer border-r bottom-1">Anyweek</div>

            <div className="flex justify-center items-center gap-1">
                <div className="text-lg font-semibold rounded-md  p-1 px-2 text-center hover:bg-gray-200 transition-all duration-300 cursor-pointer ">Add Guest</div>

                <Button size='icon' className="rounded-full bg-rose-500 p-4">
                    <Search className="font-semibold" />
                </Button>

            </div>
        </div>
    );
}

export default SearchBar;