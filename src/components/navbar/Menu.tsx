import Image from "next/image";
import Link from "next/link";

const Menu = () => {
    return (
        <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center px-2 lg:px-0 mx-auto">
                    <div className="flex-shrink-0">
                        <Image
                            width={67}
                            height={67}
                            className="h-18 w-18 mt-2 mr-2 filter-shadow"
                            src="/images/logo/logo3.png"
                            alt="Logo"
                            style={{}}
                        />
                    </div>
                    <div className="logo-text">Learnea</div>
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
