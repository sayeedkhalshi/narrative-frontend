import Image from "next/image";

const LogoImage = () => {
    return (
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
    );
};

export default LogoImage;
