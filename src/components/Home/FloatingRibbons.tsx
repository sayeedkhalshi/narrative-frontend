// components/FloatingRibbons.tsx
"use client";

import React from "react";

interface FloatingRibbonsProps {
    style?: React.CSSProperties;
}

export default function FloatingRibbons({ style }: FloatingRibbonsProps) {
    return (
        <div
            className="absolute opacity-30 z-0 pointer-events-none"
            style={style}
        >
            <svg
                viewBox="0 0 200 200"
                width="300"
                height="300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin-slow"
            >
                <path
                    d="M50 0 Q75 50 50 100 T50 200"
                    stroke="#00ffcc"
                    strokeWidth="3"
                    fill="none"
                />
            </svg>
        </div>
    );
}
