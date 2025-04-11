function FloatingRibbonsUpward({
    style,
    amount = 20,
}: {
    style?: React.CSSProperties;
    amount?: number;
}) {
    const ribbons = Array.from({ length: amount });

    return (
        <>
            {ribbons.map((_, i) => {
                const delay = Math.random() * 8;
                const size = Math.random() * 60 + 30;
                const drift = Math.random() * 120 - 10;
                const rotation = Math.random() * 120 - 10;

                const color1 =
                    "#" +
                    Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, "0");
                const color2 =
                    "#" +
                    Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, "0");
                const gradientId = `ribbonGradient-${i}-${Math.random()}`;

                return (
                    <svg
                        key={i}
                        className="animate-[floatRibbon_18s_linear_infinite] absolute opacity-60 pointer-events-none"
                        style={{
                            ...style,
                            width: `${size}px`,
                            height: `${size * 40}px`,
                            animationDelay: `${delay}s`,
                            transform: `${
                                style?.transform ?? ""
                            } translateY(-50%) translateX(${drift}px) rotate(${rotation}deg)`,
                        }}
                        viewBox="0 0 200 800"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0,800 C50,200 150,600 200,0"
                            stroke={`url(#${gradientId})`}
                            strokeWidth="4"
                            fill="none"
                        />
                        <defs>
                            <linearGradient
                                id={gradientId}
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                            >
                                <stop offset="0%" stopColor={color1} />
                                <stop offset="100%" stopColor={color2} />
                            </linearGradient>
                        </defs>
                    </svg>
                );
            })}
        </>
    );
}

export default FloatingRibbonsUpward;
