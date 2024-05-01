"use client";
import { learnea_abi } from "@/abi/Learnea";
import TermsOnMap from "@/components/TermsOnMap";
import { learnea_contract_address } from "@/lib/constant";
import { useReadContract } from "wagmi";

export default function Home() {
    const {
        data: standaloneTerms,
        error,
        isPending,
    } = useReadContract({
        abi: learnea_abi,
        address: learnea_contract_address, //control structure
        functionName: "getStandaloneTerms",
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

    const terms = standaloneTerms as `0x${string}`[];
    console.log("t", terms);
    return (
        <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full font-mono">
                {terms.map((term, i) => (
                    <TermsOnMap key={i} address={term} />
                ))}
            </div>
        </main>
    );
}
