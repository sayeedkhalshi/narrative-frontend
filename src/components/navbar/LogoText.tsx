import Image from "next/image";
import Link from "next/link";

const LogoText = () => {
    return (
        <Link href="/">
            <div className="logo-text">
                <p>Narrative</p>
            </div>
        </Link>
    );
};

export default LogoText;
