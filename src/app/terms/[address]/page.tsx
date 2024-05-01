"use client";
import { useReadContract } from "wagmi";
import { findTermType } from "@/types/Term.type";
import Link from "next/link";
import { term_abi } from "@/abi/Term";

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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl text-green-900 font-bold text-center my-8">
                Term Details
            </h1>
            {termDetails && (
                <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                    <div>
                        <p className="text-xl font-semibold text-black">
                            {termDetails.title}
                        </p>
                        <p className="mt-2 text-gray-700">
                            {termDetails.details}
                        </p>
                        <p className="mt-2 text-gray-700 ">
                            Derived From:{" "}
                            {termType === "Standalone" ? (
                                "None"
                            ) : (
                                <Link
                                    className="underline"
                                    href={`/terms/${termDetails.derivedFrom}`}
                                >
                                    {termDetails.derivedFrom}
                                </Link>
                            )}
                        </p>
                        <p className="mt-2 text-gray-700">
                            Term Type:{termType}
                            {}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
