"use client";

import { motion } from "framer-motion";
import React from "react";

export default function QuantumResonanceTriCore() {
    const size = 500;
    const cx = size / 2;
    const cy = size / 2;

    return (
        <div
            className="absolute pointer-events-none z-10"
            style={{ width: size, height: size, top: "25vh", left: "30vw" }}
        >
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* Outer pulse ring */}
                <motion.circle
                    cx={cx}
                    cy={cy}
                    r={200}
                    fill="none"
                    stroke="#22d3ee"
                    strokeOpacity="0.15"
                    strokeWidth="3"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                />

                {/* Central sphere */}
                <motion.circle
                    cx={cx}
                    cy={cy}
                    r={24}
                    fill="#a7f3d0"
                    stroke="#34d399"
                    strokeWidth="4"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Tri-core orbiters */}
                {[0, 1, 2].map((index) => {
                    const angle = (Math.PI * 2 * index) / 3;
                    const orbitRadius = 80;

                    return (
                        <motion.circle
                            key={index}
                            cx={cx + Math.cos(angle) * orbitRadius}
                            cy={cy + Math.sin(angle) * orbitRadius}
                            r={10}
                            fill="#86efac"
                            stroke="#22c55e"
                            strokeWidth="2"
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 10,
                                ease: "linear",
                            }}
                            style={{
                                transformOrigin: `${cx}px ${cy}px`,
                            }}
                        />
                    );
                })}

                {/* Inner neural beams */}
                {[...Array(6)].map((_, i) => {
                    const angle = (Math.PI * 2 * i) / 6;
                    const x = cx + Math.cos(angle) * 150;
                    const y = cy + Math.sin(angle) * 150;
                    return (
                        <line
                            key={i}
                            x1={cx}
                            y1={cy}
                            x2={x}
                            y2={y}
                            stroke="#67e8f9"
                            strokeOpacity="0.08"
                            strokeWidth="1"
                        />
                    );
                })}
            </svg>
        </div>
    );
}
