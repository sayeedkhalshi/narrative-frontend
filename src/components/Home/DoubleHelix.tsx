"use client";

import { motion } from "framer-motion";
import React from "react";

export default function QuantumPulseHelix() {
    const size = 500;
    const cx = size / 2;
    const cy = size / 2;
    const numPoints = 20;

    const helix1 = Array.from({ length: numPoints }).map((_, i) => ({
        x: cx + Math.sin(i * 0.6) * 60,
        y: cy - 200 + i * (400 / numPoints),
    }));

    const helix2 = helix1.map((p, i) => ({
        x: cx - Math.sin(i * 0.6) * 60,
        y: p.y,
    }));

    return (
        <div
            className="absolute pointer-events-none z-20"
            style={{ top: "20vh", left: "20vw", width: size, height: size }}
        >
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Connecting lines */}
                {helix1.map((p1, i) => {
                    const p2 = helix2[i];
                    return (
                        <line
                            key={`line-${i}`}
                            x1={p1.x}
                            y1={p1.y}
                            x2={p2.x}
                            y2={p2.y}
                            stroke="#4ade80"
                            strokeOpacity="0.08"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Helix 1 glow nodes */}
                {helix1.map((p, i) => (
                    <motion.circle
                        key={`h1-${i}`}
                        cx={p.x}
                        cy={p.y}
                        r={5}
                        fill="#a7f3d0"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                            duration: 1.2 + i * 0.03,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Helix 2 glow nodes */}
                {helix2.map((p, i) => (
                    <motion.circle
                        key={`h2-${i}`}
                        cx={p.x}
                        cy={p.y}
                        r={5}
                        fill="#4ade80"
                        animate={{
                            scale: [1.2, 0.8, 1.2],
                            opacity: [1, 0.6, 1],
                        }}
                        transition={{
                            duration: 1.3 + i * 0.02,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Central core */}
                <motion.circle
                    cx={cx}
                    cy={cy}
                    r={20}
                    fill="#22c55e"
                    stroke="#16a34a"
                    strokeWidth="3"
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
            </svg>
        </div>
    );
}
