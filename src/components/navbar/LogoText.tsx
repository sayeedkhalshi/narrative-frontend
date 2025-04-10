import Link from "next/link";

const LogoText = () => {
    return (
        <Link href="/">
            <div className="logo-text flex items-center space-x-2">
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-[-10deg]"
                >
                    <defs>
                        <radialGradient
                            id="layer1Gradient"
                            cx="50%"
                            cy="50%"
                            r="50%"
                        >
                            <stop offset="0%" stopColor="#A7F3D0" />
                            <stop offset="100%" stopColor="#10B981" />
                        </radialGradient>
                        <linearGradient
                            id="layer2Gradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="1"
                        >
                            <stop offset="0%" stopColor="#34D399" />
                            <stop offset="100%" stopColor="#047857" />
                        </linearGradient>
                    </defs>
                    {/* Base Layer: Background circle with radial gradient */}
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="url(#layer1Gradient)"
                        stroke="#065F46"
                        strokeWidth="2"
                    />
                    {/* Middle Layer: Overlapping translucent circles */}
                    <circle
                        cx="35"
                        cy="35"
                        r="10"
                        fill="rgba(255,255,255,0.3)"
                    />
                    <circle
                        cx="65"
                        cy="65"
                        r="12"
                        fill="rgba(255,255,255,0.25)"
                    />
                    {/* Extra dimensional element: Rotated rectangle overlay */}
                    <g transform="rotate(20 50 50)" opacity="0.5">
                        <rect
                            x="40"
                            y="40"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="#FFD93D"
                            strokeWidth="1"
                        />
                    </g>
                    {/* Subtle abstract dashed circles for depth */}
                    <g opacity="0.4">
                        <circle
                            cx="50"
                            cy="50"
                            r="15"
                            fill="none"
                            stroke="#34D399"
                            strokeWidth="1"
                            strokeDasharray="4,2"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="10"
                            fill="none"
                            stroke="#047857"
                            strokeWidth="1"
                            strokeDasharray="2,2"
                        />
                    </g>
                    {/* Additional decorative dashed lines */}
                    <g opacity="0.7">
                        <line
                            x1="50"
                            y1="50"
                            x2="50"
                            y2="90"
                            stroke="#34D399"
                            strokeWidth="1"
                            strokeDasharray="2,2"
                        />
                        <line
                            x1="30"
                            y1="50"
                            x2="70"
                            y2="50"
                            stroke="#34D399"
                            strokeWidth="1"
                            strokeDasharray="2,2"
                        />
                    </g>
                    {/* Banana element on the left side */}
                    <g
                        transform="translate(5,10) rotate(-20 20 60)"
                        opacity="0.8"
                    >
                        <path
                            d="M15 60 Q10 50, 25 45 Q35 40, 40 55 Q35 65, 25 70 Q15 75, 15 60 Z"
                            fill="#FFD700"
                            stroke="#B8860B"
                            strokeWidth="0.5"
                        />
                    </g>
                    {/* Banyan tree element on the right side */}
                    <g
                        transform="translate(50,5) rotate(15 50 50)"
                        opacity="0.8"
                    >
                        <path
                            d="M60 65 Q55 50, 70 40 Q80 35, 85 50 Q80 60, 70 65 Q60 70, 60 65 Z"
                            fill="#228B22"
                            stroke="#006400"
                            strokeWidth="0.5"
                        />
                        {/* Simple branch details */}
                        <line
                            x1="70"
                            y1="40"
                            x2="68"
                            y2="30"
                            stroke="#006400"
                            strokeWidth="0.5"
                        />
                        <line
                            x1="85"
                            y1="50"
                            x2="88"
                            y2="45"
                            stroke="#006400"
                            strokeWidth="0.5"
                        />
                    </g>
                    {/* Expressive sweeping curve (preserved from before) */}
                    <path
                        d="M15 65 Q50 5, 85 65 T15 65"
                        fill="none"
                        stroke="#34D399"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
                <p className="text-xl font-bold text-gray-800">Narrative</p>
            </div>
        </Link>
    );
};

export default LogoText;
