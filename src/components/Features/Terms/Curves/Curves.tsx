import React, { useState } from "react";
import { term_abi } from "@/abi/Term";
import { readContract } from "viem/actions";
import ShowCurves from "./ShowCurves";

type CurvesProps = {
    address: `0x${string}`;
    term: TermDetails;
};

export const Curves: React.FC<CurvesProps> = ({ address, term }) => {
    const [showCurve, setShowCurve] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center">
            <button
                onClick={() => setShowCurve(!showCurve)}
                className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
                style={{
                    borderRadius: 0,
                    margin: "10px 5px",
                    backgroundColor: "darkgreen",
                }}
            >
                {showCurve ? "Hide" : "Show"} Learning Curves
                <svg
                    className="w-6 h-6 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.946 7.523 5 12 5c4.478 0 8.268 2.946 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.946-9.542-7z"
                    ></path>
                </svg>
            </button>
            {showCurve && <ShowCurves term={term} address={address} />}
        </div>
    );
};
