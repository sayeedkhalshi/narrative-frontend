import Image from "next/image";
import Link from "next/link";
import LogoImage from "./LogoImage";
import LogoText from "./LogoText";

const Menu = () => {
    return (
        <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center px-2 lg:px-0 mx-auto">
                    <LogoImage />
                    <LogoText />
                    <div className=" lg:block lg:ml-6">
                        <div className="flex space-x-4">
                            <Link href="#" className="nav-link">
                                Home
                            </Link>
                            <Link href="#" className="nav-link">
                                About
                            </Link>
                            <Link href="#" className="nav-link">
                                Services
                            </Link>
                            <Link href="#" className="nav-link">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
