import React, { useMemo } from "react";

interface ConnectedNeuronGridProps {
    texts: string[];
}

const ribbonColors = [
    "#a5b4fc", // light indigo
    "#f9a8d4", // soft pink
    "#86efac", // mint green
    "#fcd34d", // amber
    "#6ee7b7", // teal
];

export default function ConnectedNeuronGrid({
    texts,
}: ConnectedNeuronGridProps) {
    // --- Compute centers for each text card based on grid cell ---
    const numColumns = 3;
    const numRows = Math.ceil(texts.length / numColumns);
    const positions = useMemo(() => {
        return texts.map((_, index) => {
            const col = index % numColumns;
            const row = Math.floor(index / numColumns);
            // Each card is centered within its grid cell (in percent)
            const x = ((col + 0.5) / numColumns) * 100;
            const y = ((row + 0.5) / numRows) * 100;
            return { x, y };
        });
    }, [texts, numColumns, numRows]);

    // --- Generate neuron-like ribbons connecting each card to a few others ---
    const neuronRibbons = useMemo(() => {
        const connections: { d: string; stroke: string; delay: number }[] = [];
        const numConnectionsPerCard = 2; // each card connects to 2 other random cards
        positions.forEach((p, index) => {
            // Get indices of all other cards
            const availableIndices = positions
                .map((_, i) => i)
                .filter((i) => i !== index);
            for (let j = 0; j < numConnectionsPerCard; j++) {
                const randIndex =
                    availableIndices[
                        Math.floor(Math.random() * availableIndices.length)
                    ];
                const q = positions[randIndex];

                // Calculate the midpoint between the two positions
                const midX = (p.x + q.x) / 2;
                const midY = (p.y + q.y) / 2;
                const dx = q.x - p.x;
                const dy = q.y - p.y;
                const angle = Math.atan2(dy, dx);
                // Apply a perpendicular offset to get a curved (parabolic) effect
                const offset = 5 + Math.random() * 10; // percent units
                const controlX = midX + offset * Math.cos(angle - Math.PI / 2);
                const controlY = midY + offset * Math.sin(angle - Math.PI / 2);

                const d = `M ${p.x}% ${p.y}% Q ${controlX}% ${controlY}% ${q.x}% ${q.y}%`;
                const stroke =
                    ribbonColors[
                        Math.floor(Math.random() * ribbonColors.length)
                    ];
                const delay = Math.random() * 2;
                connections.push({ d, stroke, delay });
            }
        });
        return connections;
    }, [positions]);

    return (
        <section className="relative py-20">
            {/* --- SVG Layer with neuron-like ribbons connecting text cards --- */}
            <svg
                className="absolute inset-0 pointer-events-none w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
            >
                {neuronRibbons.map((ribbon, i) => (
                    <path
                        key={i}
                        d={ribbon.d}
                        fill="none"
                        stroke={ribbon.stroke}
                        strokeWidth="1.2"
                        opacity="0.35"
                        style={{
                            animation: "dash 3s ease-in-out infinite",
                            animationDelay: `${ribbon.delay}s`,
                        }}
                    />
                ))}
            </svg>

            {/* --- Original Text Grid (Do NOT alter this design) --- */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {texts.map((text, index) => (
                    <div
                        key={index}
                        className="relative bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:translate-y-0 overflow-hidden group"
                    >
                        {/* LEFT Ribbon Stack */}
                        <div className="absolute top-0 left-0 h-full w-1 rotate-[10deg] bg-emerald-100 opacity-80 rounded-sm transition-all duration-300 shadow-[0_0_10px_2px_rgba(16,185,129,0.8)] group-hover:shadow-none" />
                        <div className="absolute top-0 left-2 h-full w-1 rotate-[8deg] bg-green-200 opacity-70 rounded-sm transition-all duration-300 shadow-[0_0_10px_2px_rgba(34,197,94,0.7)] group-hover:shadow-none" />
                        <div className="absolute top-0 left-4 h-full w-1 rotate-[6deg] bg-lime-200 opacity-60 rounded-sm transition-all duration-300 shadow-[0_0_10px_2px_rgba(163,230,53,0.6)] group-hover:shadow-none" />
                        <div className="absolute top-0 left-6 h-full w-1 rotate-[4deg] bg-teal-100 opacity-50 rounded-sm transition-all duration-300 shadow-[0_0_10px_2px_rgba(45,212,191,0.5)] group-hover:shadow-none" />

                        {/* RIGHT Ribbon Stack */}
                        <div className="absolute top-0 right-0 h-full w-1 -rotate-[10deg] bg-emerald-100 opacity-80 rounded-sm transition-all duration-300 shadow-[0_0_10px_2px_rgba(16,185,129,0.8)] group-hover:shadow-none" />
                        <div className="absolute top-0 right-2 h-full w-1 -rotate-[8deg] bg-green-200 opacity-70 rounded-sm transition-all duration-300 shadow-[0_0_10px_2px_rgba(34,197,94,0.7)] group-hover:shadow-none" />
                        <div className="absolute top-0 right-4 h-full w-1 -rotate-[6deg] bg-lime-200 opacity-60 rounded-sm transition-all duration-300 shadow-[0_0_10px_2px_rgba(163,230,53,0.6)] group-hover:shadow-none" />
                        <div className="absolute top-0 right-6 h-full w-1 -rotate-[4deg] bg-teal-100 opacity-50 rounded-sm transition-all duration-300 shadow-[0_0_10px_2px_rgba(45,212,191,0.5)] group-hover:shadow-none" />

                        <h2 className="px-6 py-2 text-xl font-bold text-black text-center relative z-10">
                            {text}
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
}
