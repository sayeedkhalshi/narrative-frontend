import { useState, useEffect } from "react";
import FreedomList from "./FreedomList";

export default function QuoteSection() {
    const [isOpen, setIsOpen] = useState(false);

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
                <h4 className="text-xl font-light text-gray-800 mb-4 italic">
                    “I believe the web should be built following the perspective
                    of how the human brain learns - by letting a user follow a
                    personal narrative, not by random content that leads to
                    random learning that doesn't fit the narrative and creates
                    confused souls trying to connect dots that are way too far
                    from each other.”
                </h4>
                <h4 className="text-xl font-light text-gray-800 mb-4 italic">
                    "I believe we need a base reality in web that is built on
                    how our brain works; how social context and economics works;
                    and from the perspective of learning"
                </h4>
                <h4 className="text-xl font-light text-gray-800 mb-4 italic">
                    "Centralization of effort (All in one place yet minimalized
                    for concentration"
                </h4>
                <h4 className="text-xl font-light text-gray-800 mb-4 italic">
                    "I believe freedom on the web isn’t achieved. Full power and
                    freedom"
                </h4>

                <div className="mt-6">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-300 shadow-lg"
                    >
                        Freedom of Web
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
                            className="absolute top-4 right-4 text-gray-300 text-2xl p-3 
             bg-gradient-to-br from-gray-700 to-gray-900 
             rounded-full shadow-md shadow-gray-900/40 
             backdrop-blur-md bg-opacity-70 
             hover:scale-110 hover:bg-opacity-100 hover:shadow-lg transition-all duration-300 
             active:scale-90 active:shadow-md"
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
                                className="relative px-6 py-2 text-white font-medium rounded-lg bg-green-500 
               hover:bg-green-600 transition-all duration-300 
               shadow-lg shadow-red-500/30 
               active:scale-95"
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
