import { term_abi } from "@/abi/Term";
import { toggleTermDrawer } from "@/redux/features/drawer.slice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useReadContract } from "wagmi";

interface SingleNodeProps {
    centralAddress?: `0x${string}`;
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
    centralAddress,
}) => {
    const [visibility, setVisibility] = useState(false);
    const dispatch = useDispatch();

    const {
        data: nodeDetails,
        isPending,
        isLoadingError,
        isError,
    } = useReadContract({
        abi: term_abi,
        address: address, //control structure
        functionName: "getDetails",
    });

    if (typeof address == "undefined" || !address) {
        return (
            <Link
                id={id}
                style={style}
                className="sub-terms text-center"
                href={`/terms/${centralAddress}/create`}
                passHref
            >
                Create Term
            </Link>
        );
    }

    if (isPending) {
        return (
            <div id={id} style={style} className="sub-terms">
                Loading...
            </div>
        );
    }

    if (isLoadingError) {
        return (
            <div id={id} style={style} className="sub-terms">
                Loading Err!
            </div>
        );
    }

    if (isError) {
        return (
            <div id={id} style={style} className="sub-terms">
                Error!
            </div>
        );
    }

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
                                color: "#e2e7e7",
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
