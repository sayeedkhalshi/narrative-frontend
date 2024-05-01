import React from "react";
import { term_abi } from "@/abi/Term";
import { useReadContract } from "wagmi";
import CreateLearningCurveForm from "@/components/Forms/CreateLearningCurve";

type ShowCurvesProps = {
    address: `0x${string}`;
    term: TermDetails;
};

const ShowCurves: React.FC<ShowCurvesProps> = ({ term, address }) => {
    const [createCurve, setCreateCurve] = React.useState(false);

    const {
        data: curves,
        error,
        isPending,
    } = useReadContract({
        abi: term_abi,
        address: address, //control structure
        functionName: "getLearningCurves",
    });

    if (isPending)
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="animate-pulse text-4xl font-bold text-darkgreen-700">
                    Loading...
                </div>
            </div>
        );
    if (error)
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="text-4xl font-bold text-darkgreen-700">
                    Error! {error.message}
                </div>
            </div>
        );

    const learningCurves = curves as string[];

    return (
        <div className="flex flex-col items-center justify-center">
            {
                //create a form with react-hook-form
            }
            <div className="space-y-4">
                <button
                    onClick={() => setCreateCurve(!createCurve)}
                    className="w-max px-4 py-2 text-sm font-medium text-gray-700 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    {createCurve
                        ? "Hide create curve form?"
                        : "Want to add a learning curve?"}
                </button>
            </div>
            <div className="space-y-4">
                {createCurve && (
                    <CreateLearningCurveForm term={term} address={address} />
                )}
            </div>

            <div className="space-y-4">
                {learningCurves?.map((curve, i) => {
                    return (
                        <div
                            key={i}
                            className="flex items-center shadow-sm rounded-lg p-4"
                        >
                            {/* Numbering Placeholder */}
                            <div className="flex-shrink-0 w-10 h-10 mr-4">
                                <p
                                    className="text-gray-700 text-lg"
                                    style={{
                                        fontWeight: "700",
                                        fontSize: "2rem",
                                        color: "black",
                                        background: "white",
                                        padding: "10px",
                                    }}
                                >
                                    {i + 1}
                                </p>
                            </div>
                            <div>
                                <p
                                    className="text-lg"
                                    style={{
                                        // backgroundColor: "#ffffff",
                                        padding: "1rem",
                                        color: "#333333",
                                        backgroundBlendMode: "exclusion",
                                        fontSize: "1.1rem",
                                        textAlign: "left",
                                        backgroundSize: "contain",
                                        borderRadius: "10px",
                                    }}
                                >
                                    {curve}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {learningCurves.length === 0 && (
                <p
                    className="text-gray-700 text-lg"
                    style={{
                        fontWeight: "700",
                        fontSize: "2rem",
                        color: "black",
                    }}
                >
                    No Curve Added
                </p>
            )}
        </div>
    );
};

export default ShowCurves;
