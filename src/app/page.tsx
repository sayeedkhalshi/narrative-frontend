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
                        className="relative bg-white p-2 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2 overflow-hidden group"
                    >
                        {/* LEFT — 20 Thin Ribbons */}
                        {Array.from({ length: 20 }).map((_, i) => {
                            const rotate = 12 - i * 1.2;
                            const leftOffset = i * 0.5;
                            const colors = [
                                "bg-emerald-100",
                                "bg-green-100",
                                "bg-lime-100",
                                "bg-teal-100",
                                "bg-emerald-50",
                                "bg-green-50",
                                "bg-lime-50",
                                "bg-teal-50",
                            ];
                            const opacities = [80, 70, 60, 50, 40, 30, 20];
                            const shadowGlow = [
                                "rgba(16,185,129,0.5)",
                                "rgba(34,197,94,0.5)",
                                "rgba(190,242,100,0.4)",
                                "rgba(153,246,228,0.4)",
                            ];
                            const color = colors[i % colors.length];
                            const opacity = opacities[i % opacities.length];
                            const glow = shadowGlow[i % shadowGlow.length];

                            return (
                                <div
                                    key={`left-${i}`}
                                    className={`absolute top-0 left-[${leftOffset}px] h-full w-px ${color} opacity-${opacity} rounded-sm`}
                                    style={{
                                        transform: `rotate(${rotate}deg)`,
                                        transition: "all 0.3s ease",
                                        boxShadow: `0 0 8px 1px ${glow}`,
                                        transitionDelay: `${i * 10}ms`,
                                    }}
                                />
                            );
                        })}

                        {/* RIGHT — 20 Thin Ribbons */}
                        {Array.from({ length: 20 }).map((_, i) => {
                            const rotate = -12 + i * 1.2;
                            const rightOffset = i * 0.5;
                            const colors = [
                                "bg-teal-100",
                                "bg-lime-100",
                                "bg-green-100",
                                "bg-emerald-100",
                                "bg-teal-50",
                                "bg-lime-50",
                                "bg-green-50",
                                "bg-emerald-50",
                            ];
                            const opacities = [80, 70, 60, 50, 40, 30, 20];
                            const shadowGlow = [
                                "rgba(45,212,191,0.4)",
                                "rgba(163,230,53,0.4)",
                                "rgba(74,222,128,0.5)",
                                "rgba(16,185,129,0.5)",
                            ];
                            const color = colors[i % colors.length];
                            const opacity = opacities[i % opacities.length];
                            const glow = shadowGlow[i % shadowGlow.length];

                            return (
                                <div
                                    key={`right-${i}`}
                                    className={`absolute top-0 right-[${rightOffset}px] h-full w-px ${color} opacity-${opacity} rounded-sm`}
                                    style={{
                                        transform: `rotate(${rotate}deg)`,
                                        transition: "all 0.3s ease",
                                        boxShadow: `0 0 8px 1px ${glow}`,
                                        transitionDelay: `${i * 10}ms`,
                                    }}
                                />
                            );
                        })}
                        {/* RIGHT Ribbon Stack */}
                        {Array.from({ length: 6 }).map((_, i) => {
                            const colors = [
                                // 🌿 Softest (far right)
                                "bg-[#f0fdf4]", // soft mist green
                                "bg-[#e6f4ea]",
                                "bg-[#dcfce7]",
                                "bg-[#d1fae5]",
                                "bg-[#ccfbf1]",

                                // 🍃 Medium
                                "bg-[#bbf7d0]",
                                "bg-[#a7f3d0]",
                                "bg-[#99f6e4]",
                                "bg-[#86efac]",
                                "bg-[#bef264]",
                            ];

                            const color = colors[i % colors.length];
                            const rotation = -13 + i * 0.5;
                            const right = i * 2; // 2px spacing

                            return (
                                <div
                                    key={i}
                                    className={`absolute top-0 h-full w-px ${color} opacity-70 rounded-sm transition-all duration-300 group-hover:shadow-[0_0_8px_1px_rgba(34,197,94,0.5)]`}
                                    style={{
                                        right: `${right}px`,
                                        transform: `rotate(${rotation}deg)`,
                                    }}
                                />
                            );
                        })}
                        <h2 className="px-8 py-4 text-xl font-bold text-black text-center relative z-10 uchen-font">
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
