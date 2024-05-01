"use client";
import { useReadContract } from "wagmi";
import { findTermType } from "@/types/Term.type";
import Link from "next/link";
import { term_abi } from "@/abi/Term";
import { Curves } from "@/components/Features/Terms/Curves/Curves";

// Adjusted interface to match the return typ

export default function SingleTermPage({
    params,
}: {
    params: { address: `0x${string}` };
}) {
    // Adjusted parsing function to return the correct type
    function parseTermDetails(data: any): TermDetails {
        // If it's a single object, parse it directly
        return parseItem(data);
    }

    function parseItem(item: any): TermDetails {
        // Assuming item is an object, we'll just return it as is
        // If the structure is more complex, you might need to adjust this
        return item;
    }

    console.log("a", params.address);
    const {
        data: details,
        error,
        isPending,
    } = useReadContract({
        abi: term_abi,
        address: params.address, //control structure
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

    const termDetails: TermDetails | null = details
        ? parseTermDetails(details)
        : null;

    const termType = findTermType(Number(termDetails?.termType));

    console.log("t", termDetails);
    return (
        <div className="max-w-2xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
            {termDetails && (
                <div className=" shadow overflow-hidden sm:rounded-lg">
                    <div>
                        <h1
                            className="text-2xl text-green-900 font-bold text-center"
                            style={{
                                background: "rgb(251 255 251)",
                                boxShadow: "rgb(9 7 7) 3px 3px 0px 3px",
                                textTransform: "uppercase",
                                padding: "25px 10px",
                                zIndex: 99,
                                color: "#28472d",
                            }}
                        >
                            {termDetails && termDetails.title}
                        </h1>
                        <p
                            className="mt-2 text-gray-700"
                            style={{
                                //backgroundColor: "#ffffff",
                                padding: "5rem",
                                //textShadow:
                                //  "6px 9px 16px #e3d5d5, -40px -15px 16px #e3d5d5",
                                //backgroundImage:
                                //  "url('/images/texture/gray-texture.jpeg')",
                                color: "rgb(48 64 45)",
                                //backgroundBlendMode: "exclusion",
                                fontSize: "1.1rem",
                                textAlign: "left",
                                backgroundSize: "contain",
                                borderRadius: "10px",
                            }}
                        >
                            {termDetails.details}
                        </p>
                        <Curves term={termDetails} address={params.address} />
                        <p className="mt-2 text-gray-700 p-5">
                            <em>Derived From: </em> <br />
                            {termType === "Standalone" ? (
                                "None"
                            ) : (
                                <Link
                                    className="underline"
                                    href={`/terms/${termDetails.derivedFrom}`}
                                >
                                    <span className="text-xl">
                                        {termDetails.derivedFrom}
                                    </span>
                                </Link>
                            )}
                        </p>
                        <p className="mt-2 text-gray-700 p-5 ">
                            <em>Term Type: </em>
                            <br />
                            <span className="text-xl">{termType}</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
