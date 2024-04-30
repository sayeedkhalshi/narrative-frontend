import { toggleTermDrawer } from "@/redux/features/drawer.slice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface SingleNodeProps {
    name: string;
    id?: string;
    style?: React.CSSProperties;
    isCenter: boolean;
    address?: string;
}

const SingleNode: React.FC<SingleNodeProps> = ({
    name,
    id,
    style,
    isCenter,
    address = "0xE1C45B6e0B4b0629c440052cE679126b956C1adD",
}) => {
    const [visibility, setVisibility] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            <Link href={`/terms/${address}`} passHref>
                <button
                    onMouseEnter={() => setVisibility(true)}
                    onMouseLeave={() => setVisibility(false)}
                    id={id}
                    style={style}
                    className={`${
                        isCenter
                            ? "shadow-btn mx-auto filter-shadow"
                            : "sub-terms"
                    }`}
                >
                    {name}
                    <Link href={`/terms/${address}/create`} passHref>
                        <span
                            className={`${
                                visibility ? "visible" : "hidden"
                            } absolute`}
                            style={{
                                backgroundColor: "black",
                                fontSize: "0.6rem",
                                color: "e2e7e7",
                                fontWeight: "700",
                                border: "2px solid brown",
                                borderRadius: "5px",
                                padding: "5px",
                                boxShadow: "0px 0px 5px 3px brown inset",
                            }}
                            //open create terms drawer
                            onClick={(e) => {
                                // e.preventDefault();
                                // dispatch(
                                //     toggleTermDrawer({ type: 0, isOpen: true })
                                // );
                            }}
                        >
                            Create Term
                        </span>
                    </Link>
                </button>
            </Link>
        </>
    );
};

export default SingleNode;
