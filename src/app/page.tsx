import BlockchainNodeSections from "@/components/Home/BlockchainNodeSections";
import HomeNarrativeSection from "@/components/Home/HomeNarrativeSection";
import QuoteSection from "@/components/Home/QuoteSection";

export default function LandingPage() {
    const texts = [
        "Naming Personal Story",
        "Enforcing Narrative in Contents",
        "No Random Contents",
        "Removing Learning Anxiety",
        "Connecting Thoughts",
    ];
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8 text-gray-800">
            {/* Hero Section */}
            <QuoteSection />

            <section className="flex flex-col items-center justify-center py-20 space-y-6">
                {texts.map((text, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2"
                    >
                        <h2 className="text-xl font-bold text-black text-center">
                            {text}
                        </h2>
                    </div>
                ))}
            </section>
            {/* Main Content */}
            {/*custom bg */}
            <HomeNarrativeSection />

            <BlockchainNodeSections />
        </main>
    );
}
