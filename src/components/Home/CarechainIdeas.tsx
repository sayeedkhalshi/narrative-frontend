import React, { useState, useEffect } from "react";
import FloatingRibbonsUpward from "./FloatingRibbonsUpward";

const FloatingRibbons = ({ style }: { style?: React.CSSProperties }) => (
    <div
        className="absolute w-48 h-2 bg-gradient-to-r from-green-400 to-teal-300 animate-pulse rounded-full rotate-12 opacity-50 blur-sm"
        style={style}
    ></div>
);

const WowSlider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative overflow-x-auto w-full flex space-x-6 snap-x snap-mandatory scrollbar-hide py-6">
            {React.Children.map(children, (child, index) => (
                <div className="snap-center shrink-0 w-full md:w-[75%] lg:w-[60%] transition-all duration-500 ease-in-out">
                    {child}
                </div>
            ))}
        </div>
    );
};

export default function CarechainNarrativeFull() {
    return (
        <div className="rounded-xl min-h-screen bg-gradient-to-br from-[#001e1b] via-[#002d25] to-[#003d2f] text-white px-4 md:px-12 py-16 font-sans relative">
            {/* Elegant moving ribbons */}
            <FloatingRibbons style={{ top: "5%", left: "10%" }} />
            <FloatingRibbons style={{ top: "30%", right: "15%" }} />
            <FloatingRibbons style={{ bottom: "10%", left: "5%" }} />
            <FloatingRibbons style={{ bottom: "25%", right: "10%" }} />
            <FloatingRibbonsUpward
                style={{
                    left: "1rem",
                    top: "50%",
                    transform: "translateY(-50%) rotate(-20deg) scale(1.2)",
                    zIndex: 1,
                }}
                amount={200}
            />
            <FloatingRibbonsUpward
                style={{
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%) rotate(20deg) scale(1.2)",
                    zIndex: 1,
                }}
                amount={200}
            />
            <div className="relative z-20 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent mb-10">
                    Open Source and Community Upgradable Frameworks To Maintain
                    Life
                </h1>

                <p className="text-center text-lg text-zinc-300 mb-14 max-w-2xl mx-auto">
                    For Learning frameworks and all other frameworks are Open
                    Source and upgradable as a DAO system.
                </p>

                <WowSlider>
                    {/* Slides */}
                    {sections.map((section, i) => (
                        <section
                            key={i}
                            className="p-8 md:p-10 bg-[#072b21] border border-emerald-900 rounded-3xl shadow-xl text-zinc-200"
                        >
                            {section}
                        </section>
                    ))}
                </WowSlider>
            </div>
        </div>
    );
}

const sections = [
    <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-emerald-300">
            Developing from a Learning Framework
        </h2>
        <p>
            A learning framework developed by founder Abu Sayeed called
            Carechain Of Internally and Externally Influenced Learning
        </p>
        <p>
            Developed from a few multilayers of frameworks that exist in the
            human context. Also, new frameworks can be created and implemented
            by DAO society.
        </p>
        <p>
            Learning is restricted to a project for better clarity where
            projects have a team, funding, etc. Basically, learning is a
            secondary action; working on anything is a primary action. To learn
            when you need to or are stuck.
        </p>
        <p>
            From the idea that management is more important than learning, it
            provides another framework where all our actions fall in an activity
            management framework.
        </p>
    </div>,

    <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-emerald-300">
            Non-random interlinked content
        </h2>
        <p>Based on the narrative identity theory and more.</p>
        <p>
            Possible civilizational move after being deprived of authenticity.
        </p>
        <p>
            Interlinked content and accessibility of resources to learn from a
            minimal yet desire-driven learning environment
        </p>
    </div>,

    <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-emerald-300">Terms</h2>
        <p>
            Share Thoughts as stories and Name them - Terms are the next phase
            of civilizational evolution to name authentic ideas, after that
            comes the phase of sharability of non random terms or interconnected
            terms.
        </p>
        <p>
            Terms - Terms are thoughts with a name. For better discussion
            ability. Terms have stories and learning curves in them. A term page
            has its own world, and the community lives inside a term.
        </p>
    </div>,

    <div className="space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-emerald-300">Path</h2>
        <p>
            Paths are learning paths developed by a person who is creating an
            activity management shit for his project. Another person can follow
            the sheet and learn the same thing.
        </p>
        <h2 className="text-2xl font-semibold text-emerald-300">
            Terms Engineering
        </h2>
        <p>
            Means to create a term where you can engineer ideas inside a
            framework.
        </p>
    </div>,

    <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-emerald-300">
            Personal Framework
        </h2>
        <div className="flex flex-col items-center space-y-2">
            {[
                "Manage your own story, thoughts, ideas",
                "Connect them, share them, create project on them, gather team who has same goal",
                "Make better decision from ideas that your brain can’t remember",
                "Help your predictibility by writing and analysing more",
                "Let people create personal framework for themselves that we forget",
            ].map((item, i) => (
                <div
                    key={i}
                    className="bg-emerald-800/20 border-l-4 border-emerald-400 px-4 py-2 rounded-xl text-left w-full"
                >
                    {item}
                </div>
            ))}
        </div>
    </div>,

    <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-emerald-300">
            A Better DAO
        </h2>
        <p>Held by a better community who passes test</p>
        <p>Vote must be automatic if someone participate in the debate</p>
        <p>Only can vote after a debate</p>
    </div>,

    <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-emerald-300">
            A better web3
        </h2>
        {[
            "I believe we need a base reality in web",
            "Upgradable frameworks for base reality in web",
            "Non-random inter-connected content by enforced narrative",
            "Building a web from how the human brain works and learns",
            "A better browser experience with UI focused on management",
            "Blockchain-based browser dns, node, and storage",
            "Free and self-mining, self-storage and self-managed data by the user’s own browser",
            "Bringing up real-time feature and user management from web2",
            "Removing wallet extension out of the question. A browser- implemented wallet feature or human wallet (sui)",
        ].map((item, i) => (
            <div
                key={i}
                className="bg-emerald-900/10 border-l-4 border-emerald-500 px-4 py-2 rounded-xl text-left w-full"
            >
                {item}
            </div>
        ))}
    </div>,

    <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-emerald-300">
            Freedom On Web
        </h2>
        {[
            "Can point and click on the website to create features as they want and fund, gather team or develop it.",
            "Can create and associate domain to any part of their project for free",
            "Freedom of UI being edited by user",
            "No fix schema or table, row column by dev. But also keeping it secure and following the no-deletion-of-effort rule.",
            "Self storage, self mining, self manage",
            "No deletion of effort (creation)",
            "No ban or filtration from base web except user or community centric.",
            "Centralization of effort (All in one place yet minimalized for concontration)",
            "And, of course, defi",
        ].map((item, i) => (
            <div
                key={i}
                className="bg-emerald-900/10 border-l-4 border-emerald-500 px-4 py-2 rounded-xl text-left w-full"
            >
                {item}
            </div>
        ))}
        <p className="mt-4 text-zinc-400 italic">
            A base web is similar to the physical world and economic reality.
        </p>
    </div>,

    <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-emerald-300">UI</h2>
        {[
            "Full customization - Self-selecting and self-designed UI",
            "Green and heavenly feel",
            "Focus and hide unnecessary things that is not required in a moment.",
        ].map((item, i) => (
            <div
                key={i}
                className="bg-emerald-800/20 border-l-4 border-emerald-400 px-4 py-2 rounded-xl text-left w-full"
            >
                {item}
            </div>
        ))}
    </div>,
];
