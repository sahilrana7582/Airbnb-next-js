import Image from "next/image";

const Logo = () => {
    return (<Image src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png" alt="logo" width={120} height={120} className="hover:cursor-pointer" />);
}

export default Logo;