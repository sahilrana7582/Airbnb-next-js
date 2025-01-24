import AvatarPic from "../Avatar";
import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";

const Navbar = () => {
    return (<div className="shadow-md dark:shadow-rose-500/40">

        <div className="flex justify-between items-center px-10">
            <Logo />
            <SearchBar />
            <AvatarPic />
        </div>

    </div>);
}

export default Navbar;