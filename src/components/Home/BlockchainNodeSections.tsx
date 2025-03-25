const BlockchainNodeSections = () => {
    const sections = [
        {
            title: "Self Mining",
            content: "Can mine own transactions without needing money.",
        },
        {
            title: "Self Storage",
            content:
                "Stores own data on a PC, solving major data storage and central data management issues. Addresses RPC (Remote Procedure Call) and cost issues.",
        },
        {
            title: "Types of Contracts",
            content:
                "Differentiates between various types of contracts, including financial contracts and contracts for other purposes.",
        },
        {
            title: "Types of Keys",
            content: "Different keys can be used for financial transactions.",
        },
        {
            title: "Delegation by Default",
            content:
                "Provides default delegation settings for improved functionality.",
        },
        {
            title: "Real-Time Processing",
            content:
                "Incorporates real-time processing capabilities (e.g., MegaETH).",
        },
        {
            title: "Encryption",
            content:
                "Utilizes encryption methods, such as Fully Homomorphic Encryption (FHE).",
        },
        {
            title: "Withdrawable Tokens",
            content:
                "Non-tradable tokens can be withdrawn as another token if funded. Users can be funded to learn and earn, with achievements tracked beyond monetary gains.",
        },
        {
            title: "Purposeful Tokenization Standards",
            content:
                "Establishes more purposeful standards for tokenization related to the Narrative project (e.g., story protocol).",
        },
        {
            title: "Self-Declared Standards",
            content:
                "Allows for self-declared standards for each smart contract, promoting flexibility and customization.",
        },
    ];

    return (
        <section className="py-2 bg-gray-50">
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                    Blockchain Node Features
                </h2>
                <ul className="space-y-6">
                    {sections.map((section, index) => (
                        <li key={index} className="border-b pb-4">
                            <h3 className="text-xl font-semibold text-gray-700">
                                {section.title}
                            </h3>
                            <p className="text-gray-600">{section.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BlockchainNodeSections;
