import { ModeToggle } from "./ToggleTheme";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarPic = () => {
    return (
        <div className="flex gap-2 items-center">
            <ModeToggle />
            <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )

}

export default AvatarPic;