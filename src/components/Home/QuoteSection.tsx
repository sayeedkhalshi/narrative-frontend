import { useState, useEffect } from "react";
import FreedomList from "./FreedomList";

export default function QuoteSection() {
    const [isOpen, setIsOpen] = useState(false);

    // Helper function to render random colorful geometric pieces
    function renderGeometricPieces() {
        const count = Math.floor(Math.random() * 3) + 3; // 3 to 5 pieces
        const colors = [
            "#FF6B6B",
            "#6BCB77",
            "#4D96FF",
            "#FFD93D",
            "#FF6EC7",
            "#B388EB",
        ];
        return Array.from({ length: count }).map((_, idx) => {
            const size = Math.random() * 10 + 5; // size between 5 and 15
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const shapeType = ["circle", "rect", "polygon"][
                Math.floor(Math.random() * 3)
            ];
            switch (shapeType) {
                case "circle":
                    return (
                        <circle
                            key={idx}
                            cx={`${x}%`}
                            cy={`${y}%`}
                            r={size / 2}
                            fill={color}
                        />
                    );
                case "rect":
                    return (
                        <rect
                            key={idx}
                            x={`${x}%`}
                            y={`${y}%`}
                            width={size}
                            height={size}
                            fill={color}
                        />
                    );
                case "polygon":
                    return (
                        <polygon
                            key={idx}
                            points={`${x},${y} ${x + size},${y} ${
                                x + size / 2
                            },${y - size}`}
                            fill={color}
                        />
                    );
                default:
                    return null;
            }
        });
    }

    // Close modal on ESC key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Disable browser scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <section className="flex items-center justify-center relative z-10">
            {/* Quote Section */}
            <div className="max-w-2xl p-6 text-center rounded-lg">
                <div className="space-y-12 relative">
                    {/* Floating Ribbons */}
                    <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 100 }).map((_, i) => {
                            const topVal = Math.random() * 100;
                            const leftVal = Math.random() * 100;
                            // 1cm ~ 38px, 5cm ~ 190px
                            const widthVal = 38 + Math.random() * (190 - 38);
                            const animDuration = 5 + Math.random() * 10; // 5s to 15s
                            const gradients = [
                                "bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500",
                                "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500",
                                "bg-gradient-to-r from-green-500 via-teal-500 to-lime-500",
                                "bg-gradient-to-r from-pink-500 via-red-500 to-purple-500",
                                "bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-500",
                                "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500",
                            ];
                            const gradientClass =
                                gradients[
                                    Math.floor(Math.random() * gradients.length)
                                ];
                            return (
                                <div
                                    key={i}
                                    style={{
                                        top: `${topVal}%`,
                                        left: `${leftVal}%`,
                                        width: `${widthVal}px`,
                                        animationDuration: `${animDuration}s`,
                                    }}
                                    className={`absolute h-[2px] ${gradientClass} rounded-full opacity-50 animate-float`}
                                />
                            );
                        })}
                    </div>
                    <div className="space-y-12">
                        {/* Quote 1: Masterpiece with Circle Addition */}
                        <div className="relative p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    className="animate-draw"
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    stroke="url(#grad1)"
                                    strokeWidth="2"
                                />
                                <defs>
                                    <linearGradient
                                        id="grad1"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="1"
                                    >
                                        <stop offset="0%" stopColor="#2dd4bf" />
                                        <stop
                                            offset="100%"
                                            stopColor="#3b82f6"
                                        />
                                    </linearGradient>
                                </defs>
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="30%"
                                    stroke="url(#grad1)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="animate-pulse"
                                />
                                <g className="geometric-pieces">
                                    {renderGeometricPieces()}
                                </g>
                            </svg>
                            <h4 className="relative text-xl font-light text-gray-700 italic josefin-font">
                                “I believe the web should be built following the
                                perspective of how the human brain learns - by
                                letting a user follow a personal narrative, not
                                by random content that leads to random learning
                                that doesn't fit the narrative and creates
                                confused souls trying to connect dots that are
                                way too far from each other.”
                            </h4>
                        </div>

                        {/* Quote 2: Masterpiece with Polygon Overlay */}
                        <div className="relative p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    className="animate-draw"
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    stroke="url(#grad2)"
                                    strokeWidth="2"
                                />
                                <defs>
                                    <linearGradient
                                        id="grad2"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="1"
                                    >
                                        <stop offset="0%" stopColor="#34d399" />
                                        <stop
                                            offset="100%"
                                            stopColor="#06b6d4"
                                        />
                                    </linearGradient>
                                </defs>
                                <polygon
                                    points="50,15 90,85 10,85"
                                    stroke="url(#grad2)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="animate-spin-slow"
                                />
                                <g className="geometric-pieces">
                                    {renderGeometricPieces()}
                                </g>
                            </svg>
                            <h4 className="relative text-xl font-light text-gray-700 italic josefin-font">
                                "I believe we need a base reality in web that is
                                built on how our brain works; how social context
                                and economics works; and from the perspective of
                                learning."
                            </h4>
                        </div>

                        {/* Quote 3: Masterpiece with Custom Parabolic Path */}
                        <div className="relative p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    className="animate-draw"
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    stroke="url(#grad3)"
                                    strokeWidth="2"
                                />
                                <defs>
                                    <linearGradient
                                        id="grad3"
                                        x1="0"
                                        y1="0"
                                        x2="1"
                                        y2="1"
                                    >
                                        <stop offset="0%" stopColor="#facc15" />
                                        <stop
                                            offset="100%"
                                            stopColor="#f97316"
                                        />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M10 80 Q 52.5 10, 95 80 T 180 80"
                                    stroke="url(#grad3)"
                                    strokeWidth="2"
                                    fill="none"
                                    className="animate-draw-path"
                                />
                                <g className="geometric-pieces">
                                    {renderGeometricPieces()}
                                </g>
                            </svg>
                            <h4 className="relative text-xl font-light text-gray-700 italic josefin-font">
                                "I believe freedom on the web isn’t achieved. We
                                also need Centralization of All Effort (All in
                                one place yet minimalized for concentration)."
                            </h4>
                        </div>
                    </div>{" "}
                </div>
                <div className="mt-6">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="relative overflow-hidden px-10 py-5 text-xl font-light text-white uppercase tracking-wider bg-gradient-to-r from-green-500 via-emerald-600 to-teal-500 rounded-full shadow-2xl hover:shadow-green-600/50 transition-all duration-500 ease-in-out transform hover:-translate-y-2 active:scale-95 uchen-font"
                    >
                        {/* Animated radial overlay */}
                        <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.6),rgba(6,182,212,0.6))] opacity-40 blur-md animate-tilt"></span>
                        {/* Text */}
                        <span className="relative z-10">Freedom of Web</span>
                        {/* Top-right pulsing accent */}
                        <span className="absolute top-0 right-0 h-6 w-6 bg-white rounded-full opacity-30 animate-ping"></span>
                        {/* Bottom-left pulsing accent */}
                        <span className="absolute bottom-0 left-0 h-8 w-8 bg-white rounded-full opacity-20 animate-ping delay-200"></span>
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-top justify-center">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full h-screen max-h-screen flex flex-col relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-300 text-2xl p-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-md shadow-gray-900/40 backdrop-blur-md bg-opacity-70 hover:scale-110 hover:bg-opacity-100 hover:shadow-lg transition-all duration-300 active:scale-90 active:shadow-md"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        {/* Modal Content */}
                        <div className="overflow-y-auto p-6 mt-10">
                            <FreedomList />
                        </div>

                        {/* Close Button at Bottom */}
                        <div className="p-6 flex">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="relative px-6 py-2 text-white font-medium rounded-lg bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg shadow-red-500/30 active:scale-95"
                            >
                                Close
                                <span className="absolute inset-0 rounded-lg bg-green-400 blur-md opacity-20"></span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
