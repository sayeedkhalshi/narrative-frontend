const BlockchainNodeSections = () => {
    const sections = [
        {
            title: "Self Mining",
            icon: "⛏️",
            content:
                "Can mine own transactions without needing money. People will host nodes to use the app. The app can be a browser-based node network. But the idea will be explored after the web app is developed.",
        },
        {
            title: "Self Storage",
            icon: "💾",
            content:
                "Stores own data on a PC, solving major data storage and central data management issues. Addresses RPC (Remote Procedure Call) and cost issues.",
        },
        {
            title: "Types of Contracts",
            icon: "📜",
            content:
                "Differentiates between various types of contracts, including financial contracts and contracts for other purposes.",
        },
        {
            title: "Types of Keys",
            icon: "🔑",
            content: "Different keys can be used for financial transactions.",
        },
        {
            title: "Delegation by Default",
            icon: "🛠️",
            content:
                "Provides default delegation settings for improved functionality.",
        },
        {
            title: "Real-Time Processing",
            icon: "⚡",
            content:
                "Incorporates real-time processing capabilities (e.g., MegaETH).",
        },
        {
            title: "Encryption",
            icon: "🔒",
            content:
                "Utilizes encryption methods, such as Fully Homomorphic Encryption (FHE).",
        },
        {
            title: "Withdrawable Tokens",
            icon: "💰",
            content:
                "Earned tokens are not tradeable. No other token is necessary. Non-tradable tokens can be withdrawn as another token if funded. Users can be funded to learn and earn, with achievements tracked beyond monetary gains.",
        },
        {
            title: "Purposeful Tokenization Standards",
            icon: "🏛️",
            content:
                "Establishes more purposeful standards for tokenization related to the Narrative project (e.g., story protocol).",
        },
        {
            title: "Self-Declared Standards",
            icon: "📝",
            content:
                "Allows for self-declared standards for each smart contract, promoting flexibility and customization.",
        },
    ];

    return (
        <section className="relative p-3 my-8 text-white rounded-lg">
            {/* Background SVG */}
            <svg
                className="absolute top-0 left-0 w-full h-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 600"
                fill="none"
            >
                <path
                    d="M50 50L750 50L400 550Z"
                    stroke="white"
                    strokeWidth="2"
                />
            </svg>

            <div className="max-w-4xl mx-auto relative z-10 p-6">
                <h2 className="barrier-font text-4xl font-bold text-center py-5 rounded-lg mb-10 border-b-4 border-gray-700 bg-gray-400">
                    Blockchain Node Features
                </h2>
                <ul className="space-y-6">
                    {sections.map((section, index) => (
                        <li
                            key={index}
                            className="p-6 rounded-xl shadow-lg border border-green-300 homepage-blockchain"
                        >
                            <h3 className="text-2xl font-semibold flex items-center gap-2 ">
                                <span>{section.icon}</span> {section.title}
                            </h3>
                            <p className="text-lg mt-2">{section.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BlockchainNodeSections;
