function SideRibbons() {
    return (
        <>
            {/* Left Ribbon */}
            <svg
                className="absolute left-0 bottom-1/2 -translate-y-1/2 z-0 animate-[floatSideRibbon_10s_infinite]"
                style={{ width: "200px", height: "400px" }}
                viewBox="0 0 200 400"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient
                        id="leftGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                </defs>
                <path
                    d="M0,400 C50,100 150,100 200,0"
                    stroke="url(#leftGradient)"
                    strokeWidth="15"
                    fill="none"
                />
            </svg>

            {/* Right Ribbon */}
            <svg
                className="absolute right-0 bottom-1/2 -translate-y-1/2 z-0 animate-[floatSideRibbon_10s_infinite]"
                style={{ width: "200px", height: "400px" }}
                viewBox="0 0 200 400"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient
                        id="rightGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                </defs>
                <path
                    d="M200,400 C150,100 50,100 0,0"
                    stroke="url(#rightGradient)"
                    strokeWidth="15"
                    fill="none"
                />
            </svg>
        </>
    );
}
