import { term_abi } from "@/abi/Term";
import { toggleTermDrawer } from "@/redux/features/drawer.slice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useReadContract } from "wagmi";

interface SingleNodeProps {
    name: string;
    id?: string;
    style?: React.CSSProperties;
    isCenter: boolean;
    address?: `0x${string}`;
}

const SingleNode: React.FC<SingleNodeProps> = ({
    name,
    id,
    style,
    isCenter,
    address,
}) => {
    const [visibility, setVisibility] = useState(false);
    const dispatch = useDispatch();

    const {
        data: nodeDetails,
        error,
        isPending,
    } = useReadContract({
        abi: term_abi,
        address: address, //control structure
        functionName: "getDetails",
    });

    if (isPending)
        return (
            <div className="flex justify-center items-center h-screen">
                Loading...
            </div>
        );
    if (error)
        return (
            <div className="flex justify-center items-center h-screen">
                Error! {error.message}
            </div>
        );

    console.log("node details", nodeDetails);
    const node = nodeDetails as TermDetails;

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
                    {node.title}
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
