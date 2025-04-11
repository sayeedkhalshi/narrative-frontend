"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function IndustrialSpinner() {
    const rotateRef = useRef(null);

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden rounded-2xl">
            {/* Foggy green pulse in background */}
            <motion.div
                className="absolute inset-0 bg-green-400/10 blur-3xl pointer-events-none"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.05, 0.12, 0.05],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* SVG Spinner */}
            <motion.svg
                ref={rotateRef}
                width="500"
                height="500"
                viewBox="0 0 600 600"
                className="animate-spin-slow drop-shadow-[0_0_30px_#22c55e] z-10"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id="metalGreen" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#bbf7d0" />
                        <stop offset="100%" stopColor="#065f46" />
                    </radialGradient>
                </defs>

                {/* Spinner 1 - Weird outer shape */}
                <path
                    d="M300,100
             C360,120 400,180 390,240
             C420,280 420,320 390,360
             C400,420 360,480 300,500
             C240,480 200,420 210,360
             C180,320 180,280 210,240
             C200,180 240,120 300,100Z"
                    fill="url(#metalGreen)"
                    stroke="#22c55e"
                    strokeWidth="6"
                />

                {/* Spinner 2 - Core circle */}
                <circle
                    cx="300"
                    cy="300"
                    r="80"
                    fill="#14532d"
                    stroke="#86efac"
                    strokeWidth="8"
                    className="shadow-[0_0_20px_#22c55e] animate-pulse"
                />

                {/* Chain connector line */}
                <line
                    x1="300"
                    y1="100"
                    x2="300"
                    y2="20"
                    stroke="#4ade80"
                    strokeWidth="4"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                />
            </motion.svg>
        </div>
    );
}
