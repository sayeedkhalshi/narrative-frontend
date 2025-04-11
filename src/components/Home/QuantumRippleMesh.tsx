"use client";

import { motion } from "framer-motion";

export default function QuantumRippleMesh() {
    return (
        <div className="absolute w-[600px] h-[600px] top-0 left-0 pointer-events-none z-10">
            <svg width="600" height="600" viewBox="0 0 600 600">
                {/* Radial ripple rings */}
                {[...Array(5)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx="300"
                        cy="300"
                        r={60 + i * 40}
                        fill="none"
                        stroke="#4ade80"
                        strokeOpacity={0.2 + i * 0.1}
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

                {/* Central pulsating core */}
                <motion.circle
                    cx="300"
                    cy="300"
                    r="25"
                    fill="#86efac"
                    stroke="#22c55e"
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

                {/* Neural mesh lines */}
                {[...Array(6)].map((_, i) => {
                    const angle = (Math.PI * 2 * i) / 6;
                    const x = 300 + Math.cos(angle) * 250;
                    const y = 300 + Math.sin(angle) * 250;
                    return (
                        <line
                            key={i}
                            x1="300"
                            y1="300"
                            x2={x}
                            y2={y}
                            stroke="#bbf7d0"
                            strokeOpacity="0.1"
                            strokeWidth="1"
                        />
                    );
                })}
            </svg>
        </div>
    );
}
