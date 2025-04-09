"use client";
import { learnea_abi } from "@/abi/Learnea";
import BlockchainNodeSections from "@/components/Home/BlockchainNodeSections";
import CarechainNarrativeFull from "@/components/Home/CarechainIdeas";
import HomeNarrativeSection from "@/components/Home/HomeNarrativeSection";
import QuoteSection from "@/components/Home/QuoteSection";
import TermsOnMap from "@/components/TermsOnMap";
import { learnea_contract_address } from "@/lib/constant";
import { setCentralTerms } from "@/redux/features/centralTerms.slice";
import { useDispatch } from "react-redux";
import { useReadContract } from "wagmi";

export default function LandingPage() {
    const dispatch = useDispatch();

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

    dispatch(setCentralTerms(terms));
    const texts = [
        "Naming Personal Story",
        "Enforcing Narrative in Contents",
        "No Random Contents",
        "Removing Force Learning, Learning Anxiety",
        "Connecting Thoughts",
    ];
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 text-gray-800">
            {/* Hero Section */}
            <QuoteSection />
            <section className="flex flex-col items-center justify-center py-20 space-y-6">
                {texts.map((text, index) => (
                    <div
                        key={index}
                        className="relative bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2 overflow-hidden group"
                    >
                        {/* LEFT Ribbon Stack */}
                        <div className="absolute top-0 left-0 h-full w-1 rotate-[10deg] bg-emerald-100 opacity-80 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]" />
                        <div className="absolute top-0 left-2 h-full w-1 rotate-[8deg] bg-green-200 opacity-70 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.7)]" />
                        <div className="absolute top-0 left-4 h-full w-1 rotate-[6deg] bg-lime-200 opacity-60 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_10px_2px_rgba(163,230,53,0.6)]" />
                        <div className="absolute top-0 left-6 h-full w-1 rotate-[4deg] bg-teal-100 opacity-50 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_10px_2px_rgba(45,212,191,0.5)]" />

                        {/* RIGHT Ribbon Stack */}
                        <div className="absolute top-0 right-0 h-full w-1 -rotate-[10deg] bg-emerald-100 opacity-80 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]" />
                        <div className="absolute top-0 right-2 h-full w-1 -rotate-[8deg] bg-green-200 opacity-70 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.7)]" />
                        <div className="absolute top-0 right-4 h-full w-1 -rotate-[6deg] bg-lime-200 opacity-60 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_10px_2px_rgba(163,230,53,0.6)]" />
                        <div className="absolute top-0 right-6 h-full w-1 -rotate-[4deg] bg-teal-100 opacity-50 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_10px_2px_rgba(45,212,191,0.5)]" />

                        <h2 className="text-xl font-bold text-black text-center relative z-10">
                            {text}
                        </h2>
                    </div>
                ))}
            </section>

            {/* Main Content */}
            <CarechainNarrativeFull />
            {/*custom bg */}
            <HomeNarrativeSection />

            <BlockchainNodeSections />

            <h3 className="text-3xl my-16 font-light underline text-center">
                Terms Engeering initial concept deisgn (interactive)
            </h3>

            <TermsOnMap addressIndex={0} />
        </main>
    );
}
