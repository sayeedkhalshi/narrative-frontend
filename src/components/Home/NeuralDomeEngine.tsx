"use client";

import { motion } from "framer-motion";
import React from "react";

// CONSTANTS
const SIZE = 1000;
const CENTER = SIZE / 2;
const NUM_RINGS = 12;
const NODES_PER_RING = 36;
const BEAMS = 240;
const SHARDS = 60;
const SPINE_LAYERS = 20;
const RANDOM = (min: number, max: number) => Math.random() * (max - min) + min;

export default function NeuralDomeEngine() {
    return (
        <div
            className="absolute z-50 pointer-events-none"
            style={{
                width: SIZE,
                height: SIZE,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
                {/* CORE PULSAR */}
                <motion.circle
                    cx={CENTER}
                    cy={CENTER}
                    r={40}
                    fill="#86efac"
                    stroke="#4ade80"
                    strokeWidth="4"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* RINGS OF NODES */}
                {[...Array(NUM_RINGS)].map((_, rIndex) => {
                    const radius = 80 + rIndex * 30;
                    return (
                        <g key={`ring-${rIndex}`}>
                            {[...Array(NODES_PER_RING)].map((_, i) => {
                                const angle =
                                    (Math.PI * 2 * i) / NODES_PER_RING;
                                const x = CENTER + Math.cos(angle) * radius;
                                const y = CENTER + Math.sin(angle) * radius;
                                return (
                                    <motion.circle
                                        key={`node-${rIndex}-${i}`}
                                        cx={x}
                                        cy={y}
                                        r={4}
                                        fill="#bbf7d0"
                                        animate={{ opacity: [1, 0.5, 1] }}
                                        transition={{
                                            duration: RANDOM(2, 5),
                                            repeat: Infinity,
                                        }}
                                    />
                                );
                            })}
                        </g>
                    );
                })}

                {/* BEAMS */}
                {[...Array(BEAMS)].map((_, i) => {
                    const angle = (Math.PI * 2 * i) / BEAMS;
                    const x = CENTER + Math.cos(angle) * 60;
                    const y = CENTER + Math.sin(angle) * 60;
                    const x2 = CENTER + Math.cos(angle) * RANDOM(200, 400);
                    const y2 = CENTER + Math.sin(angle) * RANDOM(200, 400);
                    return (
                        <motion.line
                            key={`beam-${i}`}
                            x1={x}
                            y1={y}
                            x2={x2}
                            y2={y2}
                            stroke="#4ade80"
                            strokeOpacity="0.5"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: RANDOM(1, 4),
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    );
                })}

                {/* CRYSTAL SHARDS */}
                {[...Array(SHARDS)].map((_, i) => {
                    const angle = (Math.PI * 2 * i) / SHARDS;
                    const x1 = CENTER + Math.cos(angle) * 300;
                    const y1 = CENTER + Math.sin(angle) * 300;
                    const x2 = x1 + Math.cos(angle + 0.2) * 40;
                    const y2 = y1 + Math.sin(angle + 0.2) * 40;
                    const x3 = x1 + Math.cos(angle - 0.2) * 40;
                    const y3 = y1 + Math.sin(angle - 0.2) * 40;

                    return (
                        <motion.polygon
                            key={`shard-${i}`}
                            points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                            fill="#dcfce7"
                            fillOpacity={0.02}
                            stroke="#bbf7d0"
                            strokeWidth="0.5"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: RANDOM(30, 60),
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                transformOrigin: `${CENTER}px ${CENTER}px`,
                            }}
                        />
                    );
                })}

                {/* THREADED SPINE */}
                {[...Array(SPINE_LAYERS)].map((_, layer) => {
                    const offset = layer * 8;
                    const length = 100 + layer * 10;

                    return (
                        <motion.line
                            key={`spine-${layer}`}
                            x1={CENTER - offset}
                            y1={CENTER - length / 2}
                            x2={CENTER + offset}
                            y2={CENTER + length / 2}
                            stroke="#bbf7d0"
                            strokeOpacity="0.05"
                            strokeWidth="0.8"
                            animate={{ opacity: [0.03, 0.1, 0.03] }}
                            transition={{
                                duration: 5 + layer * 0.2,
                                repeat: Infinity,
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}
