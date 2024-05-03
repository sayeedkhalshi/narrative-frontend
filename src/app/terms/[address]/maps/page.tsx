"use client";
import { learnea_abi } from "@/abi/Learnea";
import TermsOnMap from "@/components/TermsOnMap";
import { learnea_contract_address } from "@/lib/constant";
import { setCentralTerms } from "@/redux/features/centralTerms.slice";
import { useDispatch } from "react-redux";

export default function Maps({
    params,
}: {
    params: { address: `0x${string}` };
}) {
    const dispatch = useDispatch();

    const terms = [params.address] as `0x${string}`[];

    dispatch(setCentralTerms(terms));
    return (
        <main className="flex min-h-screen max-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full font-mono">
                {terms.map((term, index) => {
                    return <TermsOnMap key={index} addressIndex={index} />;
                })}
            </div>
        </main>
    );
}
