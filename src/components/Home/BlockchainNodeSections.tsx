const sections = [
    {
        title: "Self Mining",
        icon: "⛏️",

        content:
            "Can mine own transactions without needing money. People will host nodes to use the app. The app can be a browser-based node network. But the idea will be explored after the web app is developed.",
    },
    {
        title: "Self Storage",
        icon: "💾",

        content:
            "Stores own data on a PC, solving major data storage and central data management issues. Addresses RPC (Remote Procedure Call) and cost issues.",
    },
    {
        title: "Types of Contracts",
        icon: "📜",

        content:
            "Differentiates between various types of contracts, including financial contracts and contracts for other purposes.",
    },
    {
        title: "Types of Keys",
        icon: "🔑",

        content: "Different keys can be used for financial transactions.",
    },
    {
        title: "Delegation by Default",
        icon: "🛠️",

        content:
            "Provides default delegation settings for improved functionality.",
    },
    {
        title: "Real-Time Processing",
        icon: "⚡",

        content:
            "Incorporates real-time processing capabilities (e.g., MegaETH).",
    },
    {
        title: "Encryption",
        icon: "🔒",

        content:
            "Utilizes encryption methods, such as Fully Homomorphic Encryption (FHE).",
    },
    {
        title: "Withdrawable Tokens",
        icon: "💰",

        content:
            "Earned tokens are not tradeable. No other token is necessary. Non-tradable tokens can be withdrawn as another token if funded. Users can be funded to learn and earn, with achievements tracked beyond monetary gains.",
    },
    {
        title: "Purposeful Tokenization Standards",
        icon: "🏛️",

        content:
            "Establishes more purposeful standards for tokenization related to the Narrative project (e.g., story protocol).",
    },
    {
        title: "Self-Declared Standards",
        icon: "📝",

        content:
            "Allows for self-declared standards for each smart contract, promoting flexibility and customization.",
    },
];
// components/BlockchainSection.tsx
import React from "react";
import FloatingRibbonsUpward from "./FloatingRibbonsUpward";
import QuantumResonanceTriCore from "./QuantumResonanceTriCore";
import QuantumNeuralLensArray from "./QuantumNeuralLense";

export default function FuturisticNodeFeatures() {
    return (
        <section className="relative w-full overflow-hidden py-24 px-6 text-white rounded-xl">
            {/* Abstract Neural Background SVG */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none animate-pulse"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="80%">
                        <stop
                            offset="0%"
                            stopColor="#00ffff"
                            stopOpacity="0.2"
                        />
                        <stop
                            offset="100%"
                            stopColor="#000000"
                            stopOpacity="0"
                        />
                    </radialGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="20" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {[...Array(30)].map((_, i) => {
                    const x1 = Math.random() * 800;
                    const y1 = Math.random() * 600;
                    const x2 = x1 + Math.random() * 100 - 50;
                    const y2 = y1 + Math.random() * 100 - 50;

                    return (
                        <path
                            key={i}
                            d={`M ${x1} ${y1} Q ${(x1 + x2) / 2 + 20} ${
                                (y1 + y2) / 2 - 40
                            }, ${x2} ${y2}`}
                            stroke="url(#grad1)"
                            strokeWidth="0.6"
                            fill="none"
                            style={{
                                animation: `floatLine ${
                                    4 + Math.random() * 4
                                }s ease-in-out infinite alternate`,
                            }}
                            filter="url(#glow)"
                        />
                    );
                })}
            </svg>

            {/* Title */}
            <h2 className="relative z-10 text-center text-6xl sm:text-7xl font-black leading-tight tracking-tight mb-20 barrier-font text-[forestgreen]">
                Blockchain Node Features
            </h2>
            <QuantumResonanceTriCore />

            {/* Feature Cards */}
            <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="group p-6 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#001e1b] via-[#002d25] to-[#003d2f] hover:border-cyan-300 hover:shadow-[0_0_30px_5px_rgba(0,255,255,0.2)] transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
                    >
                        <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none skew-y-3 rotate-1" />
                        <div className="relative z-10 space-y-4">
                            <FloatingRibbonsUpward
                                style={{
                                    left: "1rem",
                                    top: "50%",
                                    transform:
                                        "translateY(-50%) rotate(-20deg) scale(1.2)",
                                    zIndex: 1,
                                }}
                                amount={20}
                            />
                            <FloatingRibbonsUpward
                                style={{
                                    right: "1rem",
                                    top: "50%",
                                    transform:
                                        "translateY(-50%) rotate(20deg) scale(1.2)",
                                    zIndex: 1,
                                }}
                                amount={20}
                            />
                            <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-cyan-200 tracking-wide p-4 bg-cyan-800/10 rounded-md backdrop-blur-sm shadow-inner shadow-cyan-500/10">
                                <QuantumNeuralLensArray />
                                <span className="text-2xl sm:text-3xl">
                                    {section.icon}
                                </span>
                                {section.title}
                            </h3>
                            <QuantumNeuralLensArray />

                            <p className="text-base sm:text-lg text-gray-100/90 leading-relaxed p-4 bg-white/5 rounded-md backdrop-blur-sm">
                                {section.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes floatLine {
                    0% {
                        transform: translateY(0px) translateX(0px);
                    }
                    100% {
                        transform: translateY(-30px) translateX(10px);
                    }
                }

                @keyframes animate-fade-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
