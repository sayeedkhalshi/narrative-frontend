"use client";

import { motion } from "framer-motion";

export default function NeuralPlasmaBloom() {
    return (
        <div className="absolute w-full h-[500px] flex items-center justify-center bg-gradient-to-b rounded-2xl overflow-hidden">
            {/* Plasma Ring */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full bg-green-300/10 blur-3xl shadow-[0_0_60px_#22c55e] z-0"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* SVG Neural Orb */}
            <svg
                viewBox="0 0 400 400"
                className="relative z-10"
                width="300"
                height="300"
            >
                <defs>
                    <radialGradient id="nodeCore" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#bbf7d0" />
                        <stop offset="100%" stopColor="#064e3b" />
                    </radialGradient>

                    <filter
                        id="glowFilter"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                    >
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="5"
                            result="blur"
                        />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Central node */}
                <circle
                    cx="200"
                    cy="200"
                    r="60"
                    fill="url(#nodeCore)"
                    stroke="#4ade80"
                    strokeWidth="8"
                    filter="url(#glowFilter)"
                />

                {/* Neural tendrils */}
                {[...Array(6)].map((_, i) => {
                    const angle = (Math.PI * 2 * i) / 6;
                    const x = 200 + Math.cos(angle) * 120;
                    const y = 200 + Math.sin(angle) * 120;

                    return (
                        <motion.line
                            key={i}
                            x1="200"
                            y1="200"
                            x2={x}
                            y2={y}
                            stroke="#86efac"
                            strokeWidth="2"
                            strokeDasharray="4 8"
                            initial={{ strokeDashoffset: 20 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "linear",
                                delay: i * 0.2,
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}
