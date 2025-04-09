import { title } from "process";

const HomeNarrativeSection = () => {
    const sections = [
        {
            title: "Proof of Narrative",
            content:
                "Enforces a pre existing narrative to a newly created content that creates multilayered interconnected contents by design. To solve some problems that exist in the human context, Narrative is an experimental project. Purpose to implement the solution to learning, communication, mental illness, or possibly economic control structures",
            designClass: "bg-gray-100 p-6 rounded-lg shadow-md text-black",
        },
        {
            title: "Human Learning",
            content:
                "Looking at human interactions through the lens of learning and considering humans as learning machines.",
            designClass: "bg-blue-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "In-narrative Learning",
            content:
                "A web of in-narrative learning as the base of the web, thinking of human society from the lens of learning. Eliminating all the problems that randomness brings. It means that each thing we do on the internet or in life will be connected to the previous thing we do, and our progress will be tracked. More like a Forced narrative.",
            designClass: "bg-green-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Follows the Personal Narrative",
            content:
                "Follows the personal narrative of a person for their next actions. Don’t break personal story.",
            designClass: "bg-yellow-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Terms",
            content:
                "Name each story and sharable parts of it to bring discussion about it. An example of terms engineering in basic UI in the App section of this website or bottom of home page - interconnected all the knowledge of the world. One thing finds out another thing. Basically curiosity-based learning, no matter which way it goes. Solves the resource management issue for a learner.",
            designClass: "bg-red-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Layers and Levels",
            content:
                "Layers and layers are like an emergence in our brain’s context. Levels and leveling up when a layer of terms is learned. Each term is developed by a user who comes from their personal thinking or story-building inside. We might be confused by thinking it like a linear thing. But actually more like a network of nodes",
            designClass: "bg-purple-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Management",
            content:
                "To focus on the personal story, we need something to handle all our things in one place. To easily get things in front of the eyes.",
            designClass: "bg-teal-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Projects",
            content:
                "Actions are narrowed down to a project, where each activity belongs to a project. Projects are threads that a human brain handles. Usually a single thread running at a time. There is no learning without a project to achieve",
            designClass: "bg-indigo-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Activity and ToDos",
            content:
                "Activities are managing all you are working, learning, researching, etc., and keeping track.",
            designClass: "bg-pink-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Tony Robbins' Leverage-based Personal Growth",
            content:
                "Leverage-based personal growth and categorization of learning. Not based on subject and topic. By leverage, I mean - all the minimum necessary things in life you can categorize and move ahead.",
            designClass: "bg-orange-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Full Control Of User",
            content:
                "User can create and edit any feature for themselves. Point and click feature developments. Giving them the power of how they want to use the web. That’s what I believe: interlinked content, evolution of content in phases, full customization by user, personal node and storage management, actions only in/for a project etc should be the next web.",
            designClass: "bg-cyan-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Gamified Communication",
            content:
                "Gamified communication and tracking all to see how a user follows the learning framework and possible research to fulfill the complete framework implementation in the project slowly.",
            designClass: "bg-lime-50 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Economic Theory Implementation",
            content:
                "Full implementation of my economic theory or control structure and community theory. I am also working on human interaction which might change things a lot for this project.",
            designClass: "bg-red-200 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Browser Based Node Network",
            content:
                "This part is yet to be decided. So far browser based node to self manage storage, node, transactions are the idea",
            designClass: "bg-blue-300 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Development",
            content:
                "User can asks for a feature and raise funds for it and associate devs. Features are approved by users or user specific. Community or user owned features. Features sell or buy or list",
            designClass: "bg-green-400 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Voting",
            content:
                "Voting by community but after only proving that the voter knows the stake.For each stakes users can debate and debate feature in the app with moderation will decide the result. Only passed ideas can be voted or automated voting if a idea is debated and proved. You basically work to vote, which means you vote only for the things you care. If previously it was passed then records can handle the result itself",
            designClass: "bg-yellow-200 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Debate",
            content:
                "Debates are managed by a debating framework. Debate must result to a result.",
            designClass: "bg-green-300 p-6 rounded-lg shadow-lg text-black",
        },
        {
            title: "Self versioning",
            content:
                "Based on current discovery of knowledge and flaws in our logic, the frameworks of learning and others should upgrade themselves by desig",
            designClass: "bg-purple-300 p-6 rounded-lg shadow-lg text-black",
        },
    ];

    return (
        <section className="relative overflow-hidden py-32 px-6">
            <h1 className="text-6xl font-black text-center text-zinc-800 mb-20 leading-tight tracking-tight barrier-font">
                <span className="block">Ideas that</span>
                <span className="block bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                    Construct Realities
                </span>
            </h1>

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
                {sections.map((section, index) => {
                    const blobColors = [
                        "bg-gradient-to-br from-emerald-300 to-teal-200",
                        "bg-gradient-to-br from-pink-300 to-fuchsia-400",
                        "bg-gradient-to-br from-yellow-200 to-orange-300",
                        "bg-gradient-to-br from-sky-300 to-indigo-300",
                    ];

                    return (
                        <div
                            key={index}
                            className="relative p-10 rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl"
                        >
                            {/* Background Orb */}
                            <div
                                className={`absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-30 ${
                                    blobColors[index % blobColors.length]
                                } z-0`}
                            />

                            {/* Inner Content */}
                            <div className="relative z-10 space-y-6">
                                <h2 className="text-3xl font-extrabold text-zinc-800 text-center tracking-tight">
                                    {section.title}
                                </h2>
                                <div className="h-[2px] w-12 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
                                <p className="text-lg text-zinc-600 text-center leading-relaxed">
                                    {section.content}
                                </p>
                            </div>

                            {/* Floating Icon */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-inner flex items-center justify-center text-zinc-700 font-bold text-sm">
                                {index + 1}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Organic Floating SVG */}
            <svg
                className="absolute top-0 left-0 w-full pointer-events-none opacity-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,100 C30,70 70,130 100,100 L100,0 L0,0 Z"
                    fill="url(#fade)"
                />
                <defs>
                    <linearGradient
                        id="fade"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#d1fae5" />
                        <stop offset="100%" stopColor="#bae6fd" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
};

export default HomeNarrativeSection;
