"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const palettes = [
    {
        name: "Green Core",
        core_fill: "#86efac",
        core_stroke: "#22c55e",
        ripple_stroke: "#4ade80",
        mesh_stroke: "#bbf7d0",
    },
    {
        name: "Blue Ice",
        core_fill: "#a5f3fc",
        core_stroke: "#0ea5e9",
        ripple_stroke: "#38bdf8",
        mesh_stroke: "#bae6fd",
    },
    {
        name: "Purple Pulse",
        core_fill: "#c4b5fd",
        core_stroke: "#8b5cf6",
        ripple_stroke: "#a78bfa",
        mesh_stroke: "#ddd6fe",
    },
    {
        name: "Amber Core",
        core_fill: "#fcd34d",
        core_stroke: "#f59e0b",
        ripple_stroke: "#fbbf24",
        mesh_stroke: "#fde68a",
    },
    {
        name: "Infrared Bloom",
        core_fill: "#fca5a5",
        core_stroke: "#ef4444",
        ripple_stroke: "#fb7185",
        mesh_stroke: "#fecaca",
    },
    {
        name: "Magenta Vibe",
        core_fill: "#f9a8d4",
        core_stroke: "#db2777",
        ripple_stroke: "#f472b6",
        mesh_stroke: "#fbcfe8",
    },
    {
        name: "Ocean Wave",
        core_fill: "#67e8f9",
        core_stroke: "#06b6d4",
        ripple_stroke: "#22d3ee",
        mesh_stroke: "#cffafe",
    },
    {
        name: "Golden Bloom",
        core_fill: "#fde68a",
        core_stroke: "#facc15",
        ripple_stroke: "#fcd34d",
        mesh_stroke: "#fef3c7",
    },
    {
        name: "Deep Space",
        core_fill: "#e0e7ff",
        core_stroke: "#6366f1",
        ripple_stroke: "#818cf8",
        mesh_stroke: "#c7d2fe",
    },
    {
        name: "Skyfire",
        core_fill: "#fca5a5",
        core_stroke: "#f43f5e",
        ripple_stroke: "#f87171",
        mesh_stroke: "#fecaca",
    },
];

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomPalette(excludeFirst = false) {
    const index = excludeFirst ? getRandomInt(1, palettes.length) : 0;
    return palettes[index];
}

function generateRandomMesh(index: number) {
    const size = getRandomInt(300, 600);
    const top = getRandomInt(0, window.innerHeight - size);
    const left = getRandomInt(0, window.innerWidth - size);
    const palette = getRandomPalette(index !== 0);

    return { id: index, size, top, left, palette };
}

export default function QuantumRippleMulti() {
    const [meshes, setMeshes] = useState<
        { id: number; size: number; top: number; left: number; palette: any }[]
    >([]);

    useEffect(() => {
        const newMeshes = Array.from({ length: 7 }).map((_, i) =>
            generateRandomMesh(i)
        );
        setMeshes(newMeshes);
    }, []);

    return (
        <>
            {meshes.map(({ id, size, top, left, palette }) => (
                <div
                    key={id}
                    className="absolute pointer-events-none z-10"
                    style={{ width: size, height: size, top, left }}
                >
                    <svg
                        width={size}
                        height={size}
                        viewBox={`0 0 ${size} ${size}`}
                    >
                        {[...Array(5)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx={size / 2}
                                cy={size / 2}
                                r={size * 0.1 + i * (size * 0.07)}
                                fill="none"
                                stroke={palette.ripple_stroke}
                                strokeOpacity={0.15 + i * 0.08}
                                strokeWidth="1.5"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1.05 }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                            />
                        ))}

                        <motion.circle
                            cx={size / 2}
                            cy={size / 2}
                            r={size * 0.04}
                            fill={palette.core_fill}
                            stroke={palette.core_stroke}
                            strokeWidth="4"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.7, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {[...Array(6)].map((_, i) => {
                            const angle = (Math.PI * 2 * i) / 6;
                            const x = size / 2 + Math.cos(angle) * (size * 0.4);
                            const y = size / 2 + Math.sin(angle) * (size * 0.4);
                            return (
                                <line
                                    key={i}
                                    x1={size / 2}
                                    y1={size / 2}
                                    x2={x}
                                    y2={y}
                                    stroke={palette.mesh_stroke}
                                    strokeOpacity="0.1"
                                    strokeWidth="1"
                                />
                            );
                        })}
                    </svg>
                </div>
            ))}
        </>
    );
}
