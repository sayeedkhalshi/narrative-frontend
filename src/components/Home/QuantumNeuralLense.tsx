"use client";

import { motion } from "framer-motion";
import React from "react";

export default function QuantumNeuralLensArray() {
    const size = 600;
    const cx = size / 2;
    const cy = size / 2;

    const rings = [
        { r: 100, stroke: "#facc15", speed: 60, dir: 1 },
        { r: 140, stroke: "#fde68a", speed: 80, dir: -1 },
        { r: 180, stroke: "#fef08a", speed: 100, dir: 1 },
        { r: 220, stroke: "#fcd34d", speed: 130, dir: -1 },
    ];

    return (
        <div
            className="absolute pointer-events-none z-10"
            style={{ width: size, height: size, top: "30vh", left: "40vw" }}
        >
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Glass-like rotating plates */}
                {rings.map((ring, i) => (
                    <motion.circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r={ring.r}
                        fill="none"
                        stroke={ring.stroke}
                        strokeWidth="2"
                        strokeOpacity="0.08"
                        animate={{
                            rotate: 360 * ring.dir,
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: ring.speed,
                            ease: "linear",
                        }}
                        style={{
                            transformOrigin: `${cx}px ${cy}px`,
                        }}
                    />
                ))}

                {/* Glowing nucleus */}
                <motion.circle
                    cx={cx}
                    cy={cy}
                    r={30}
                    fill="#bef264"
                    stroke="#84cc16"
                    strokeWidth="3"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [1, 0.6, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Neural shimmer threads */}
                {[...Array(12)].map((_, i) => {
                    const angle = (Math.PI * 2 * i) / 12;
                    const x = cx + Math.cos(angle) * 260;
                    const y = cy + Math.sin(angle) * 260;
                    return (
                        <motion.line
                            key={i}
                            x1={cx}
                            y1={cy}
                            x2={x}
                            y2={y}
                            stroke="#a3e635"
                            strokeOpacity="0.06"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 3 + i * 0.2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}
