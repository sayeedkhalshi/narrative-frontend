// components/FreedomList.tsx
import React from "react";

interface FreedomItem {
    text: string;
    icon: string;
}

const FreedomList: React.FC = () => {
    const freedomItems: FreedomItem[] = [
        {
            text: "Can point and click on the website to create features as they want and fund, gather team or develop it.",
            icon: "✨",
        },
        {
            text: "Can create and associate domain to any part of their project for free",
            icon: "🌐",
        },
        { text: "Freedom of UI being edited by user", icon: "🎨" },
        {
            text: "No fix schema or table, row column by dev. But also keeping it secure and follows the no deletion of effort rule.",
            icon: "🔒",
        },
        { text: "Self storage, self mining, self manage", icon: "💾" },
        { text: "No deletion of effort (creation)", icon: "🛠️" },
        {
            text: "No ban or filtration from base web except user or community centric.",
            icon: "🗳️",
        },
        {
            text: "Centralization of effort (All in one place yet minimalized for concentration)",
            icon: "🌌",
        },
        { text: "And, of course, defi", icon: "💸" },
        {
            text: "A base web similar to the physical world and economic reality.",
            icon: "🏞️",
        },
    ];

    return (
        <section className="relative max-w-5xl mx-auto px-6 py-4 overflow-hidden">
            {/* Central Title */}
            <div className="text-center mb-12">
                <h1 className="text-2xl md:text-5xl font-bold text-gray-700 animate-pulse-slow drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]">
                    Freedom of Web -
                </h1>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                {freedomItems.map((item, index) => (
                    <div
                        key={index}
                        className="group relative bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-cyan-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        {/* Icon */}
                        <span className="text-2xl mr-3 group-hover:animate-bounce">
                            {item.icon}
                        </span>
                        {/* Text */}
                        <p className="text-gray-200 text-lg leading-relaxed">
                            {item.text}
                        </p>
                        {/* Neon Gradient Border Effect */}
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-t-cyan-400 group-hover:border-r-pink-500 group-hover:border-b-purple-500 group-hover:border-l-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>

            {/* Background Particles (Optional) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-1 h-1 bg-cyan-400 rounded-full absolute top-1/4 left-1/3 animate-float" />
                <div className="w-2 h-2 bg-pink-500 rounded-full absolute top-3/4 left-2/3 animate-float delay-100" />
                <div className="w-1 h-1 bg-purple-500 rounded-full absolute top-1/2 left-1/4 animate-float delay-200" />
            </div>
        </section>
    );
};

export default FreedomList;
